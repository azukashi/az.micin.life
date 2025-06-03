import { createClient } from '@/utils/supabase/client';
import { Container } from '@/components/Container';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';
import Image from 'next/image';

type AboutProps = {
    data: {
        id: number;
        created_at: string;
        name: string;
        live_in: string;
        picture_url: string;
        descriptions: string[];
        contact_desc: string[];
        contact_buttons: {
            name: string;
            url: string;
            icon: string;
        }[];
    }[];
};

export default async function About() {
    const supabase = createClient();
    const about: AboutProps = (await supabase.from('About').select('*')) as any;

    return (
        <Container>
            <div className="md:flex items-center min-h-screen md:-mt-7 px-5 md:px-10">
                <div className="flex order-2 items-center align-middle justify-center py-10 md:w-[40%]">
                    <Image
                        src="https://avatars.githubusercontent.com/u/68645946"
                        alt="Profile Picture"
                        className="rounded-full shadow-2xl shadow-main size-42 md:size-64"
                        width={256}
                        height={256}
                    />
                </div>
                <div className="flex flex-col gap-4 md:w-[60%]">
                    <h1 className="text-4xl font-black">About Me</h1>
                    <p className="text-justify text-lg">
                        Hey! I'm <span className="font-bold text-main">{about?.data[0].name}</span>. Born and live in{' '}
                        <span className="font-bold text-main">{about?.data[0].live_in}</span>.{' '}
                        {about?.data[0].descriptions.map(data => {
                            return <span key={data}>{data} </span>;
                        })}
                    </p>
                    <br />
                </div>
            </div>
            <div className="flex items-center justify-center min-h-screen md:-mt-7 px-5 md:px-10">
                <div className="flex flex-col align-middle items-center justify-items-center gap-6">
                    <h2 className="text-4xl font-black">Contact me!</h2>
                    <div className="space-y-1">
                        {about?.data[0].contact_desc.map(data => {
                            return (
                                <p key={data} className="text-center">
                                    {data}
                                </p>
                            );
                        })}
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center max-w-lg">
                        {about?.data[0].contact_buttons.map(data => {
                            return (
                                <a key={data.name} href={data.url} target="_blank" className="flex-1">
                                    <Button className="cursor-pointer">
                                        <Icon icon={data.icon} />
                                        {data.name}
                                    </Button>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* <code className="block bg-main/30 p-4 rounded-2xl">{JSON.stringify(about)}</code> */}
        </Container>
    );
}
