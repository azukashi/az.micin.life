import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { createClient } from '@/utils/supabase/client';
import { Container } from '@/components/Container';
import { Icon } from '@iconify/react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Devices',
};

export default async function Devices() {
    const supabase = createClient();
    const devices = (await supabase.from('Devices').select('*').order('id', { ascending: true })) as any;

    return (
        <Container>
            <div className="md:flex items-center px-5 py-10 md:px-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-black">Devices</h1>
                    <p className="font-semibold">
                        Since you're here out of nowhere, welcome to the Devices page! This page shows you all of my
                        devices used for development, gaming, and everyday use. From powerful laptops to sleek
                        smartphones, I've got a variety of gadgets that help me stay productive and entertained. Feel
                        free to explore and see what tech I rely on daily!
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {devices.data.map((data: any) => {
                            return (
                                <Link key={data.id} href={`/devices/${data.type.toLowerCase()}`}>
                                    <Card key={data.id} className="py-0">
                                        <CardHeader className="border-b-2 border-black px-0 gap-0 overflow-hidden">
                                            <div className="overflow-hidden flex justify-center items-center p-4">
                                                {/* <Image
                                                src={data.details.image}
                                                alt={data.name}
                                                width={700}
                                                height={500}
                                                className="w-[100%]"
                                            /> */}
                                                <Icon icon="mingcute:laptop-line" className="size-20" />
                                            </div>
                                        </CardHeader>
                                        <CardContent className="pb-6">
                                            <CardTitle>{data.page_name}</CardTitle>
                                        </CardContent>
                                    </Card>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>

            <code className="block bg-main/30 p-4 rounded-2xl">{JSON.stringify(devices.data)}</code>
        </Container>
    );
}
