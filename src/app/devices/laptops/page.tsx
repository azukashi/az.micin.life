import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { createClient } from '@/utils/supabase/client';
import { Container } from '@/components/Container';
import { LaptopDevice } from '@/utils/types/devices';
import { Icon } from '@iconify/react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Laptop',
};

export default async function Laptop() {
    const supabase = createClient();
    const laptop = (await supabase.from('Devices').select('*').order('id', { ascending: true }))
        .data?.[0] as unknown as LaptopDevice;

    if (!laptop) {
        return (
            <Container>
                <p>No laptop data available</p>
            </Container>
        );
    }

    return (
        <Container>
            <div className="md:flex items-center px-5 py-10 md:px-10">
                <div className="flex flex-col gap-4">
                    <Link href="/devices" className="text-sm underline">
                        &larr; Back to Devices
                    </Link>
                    <h1 className="text-4xl font-black mb-20">Laptop</h1>
                    <div className="flex flex-col md:flex-row gap-20 pb-20">
                        <Image
                            src={laptop.details.image}
                            alt={laptop.name}
                            width={700}
                            height={500}
                            className="w-[100%]"
                        />
                        <div className="flex flex-col gap-4 w-full">
                            <h2 className="text-2xl font-bold">{laptop.name}</h2>
                            <div>
                                <h3 className="text-xl font-bold mb-2">General Specifications</h3>
                                <div>
                                    <div className="mb-2">
                                        <p className="font-semibold">Manufacturer: {laptop.details.manufacturer}</p>
                                        <p className="font-semibold">Release date: {laptop.details.release_date}</p>
                                        <p className="font-semibold">Processor: {laptop.details.proc}</p>
                                        <p className="font-semibold">Memory: {laptop.details.memory}</p>
                                        <p className="font-semibold">Storage: {laptop.details.storage}</p>
                                        <p className="font-semibold">Security: {laptop.details.security}</p>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-2">Operating System</h3>
                                <div>
                                    {laptop.details.os.map((data) => {
                                        return (
                                            <div key={data.name} className="flex mb-2">
                                                <Icon icon={data.icon} className="size-6 inline-block mr-2" />
                                                <p className="font-semibold">
                                                    {data.name} - <span className="font-mono">{data.version}</span>
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>

                                <h3 className="text-xl font-bold mb-2">Graphic Cards</h3>
                                <div>
                                    {laptop.details.graphics.map((data) => {
                                        return (
                                            <div key={data.name} className="flex items-center align-middle mb-2">
                                                <Icon
                                                    icon={data.icon}
                                                    style={{ color: data.color }}
                                                    className="size-6 inline-block mr-2"
                                                />
                                                <p className="font-semibold">
                                                    {data.name} {data.vram ? data.vram + ' MB' : ''}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-4xl font-black mb-5">Screenshots</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pb-10">
                        {laptop.details.screenshots?.map((data) => {
                            return (
                                <Image
                                    key={data}
                                    src={data}
                                    alt="Screenshots"
                                    width={1536}
                                    height={960}
                                    className="w-[100%]"
                                />
                            );
                        })}
                    </div>

                    <h1 className="text-4xl font-black mb-5">Accessories</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {laptop.accessories?.map((accessory) => {
                            return (
                                <Link key={accessory.name} href={accessory.link} target="_blank">
                                    <Card key={accessory.name} className="py-0">
                                        <CardHeader className="border-b-2 border-black px-0 gap-0 overflow-hidden">
                                            <div className="overflow-hidden flex justify-center items-center p-4">
                                                <Image
                                                    src={accessory.image}
                                                    alt={accessory.name}
                                                    width={700}
                                                    height={500}
                                                    className="w-[100%]"
                                                />
                                            </div>
                                        </CardHeader>
                                        <CardContent className="pb-6">
                                            <p className="pb-2 text-sm text-gray-700 dark:text-gray-300">
                                                {accessory.type}
                                            </p>
                                            <CardTitle className="pb-2">{accessory.name}</CardTitle>
                                            <CardDescription>{accessory.description}</CardDescription>
                                        </CardContent>
                                    </Card>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Container>
    );
}
