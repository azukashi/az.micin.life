import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { createClient } from '@/utils/supabase/client';
import { Container } from '@/components/Container';
import { LaptopDevice } from '@/utils/types/devices';
import { Icon } from '@iconify/react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '1st Phone',
};

export default async function FirstPhone() {
    const supabase = createClient();
    const phone = (await supabase.from('Devices').select('*').order('id', { ascending: true }))
        .data?.[1] as unknown as LaptopDevice;

    if (!phone) {
        return (
            <Container>
                <p>No 1st phone data available</p>
            </Container>
        );
    }

    return (
        <Container>
            <div className="items-center px-5 py-10 md:px-10">
                <div className="flex flex-col gap-4">
                    <Link href="/devices" className="text-sm underline">
                        &larr; Back to Devices
                    </Link>
                    <h1 className="text-4xl font-black mb-20">1st Phone</h1>
                    <div className="flex flex-col md:flex-row gap-20 pb-20 ">
                        <Image
                            src={phone.details.image}
                            alt={phone.name}
                            width={700}
                            height={500}
                            className="w-[100%]"
                        />
                        <div className="flex flex-col gap-4 w-full">
                            <h2 className="text-2xl font-bold">{phone.name}</h2>f
                            <div>
                                <h3 className="text-xl font-bold mb-2">General Specifications</h3>
                                <div>
                                    <div className="mb-2">
                                        <p className="font-semibold">Manufacturer: {phone.details.manufacturer}</p>
                                        <p className="font-semibold">Release date: {phone.details.release_date}</p>
                                        <p className="font-semibold">Processor: {phone.details.proc}</p>
                                        <p className="font-semibold">Memory: {phone.details.memory}</p>
                                        <p className="font-semibold">Storage: {phone.details.storage}</p>
                                        <p className="font-semibold">Security: {phone.details.security}</p>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-2">Operating System</h3>
                                <div>
                                    {phone.details.os.map((data) => {
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
                                    {phone.details.graphics.map((data) => {
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
                </div>
            </div>
        </Container>
    );
}
