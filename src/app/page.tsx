import { createClient } from '@/utils/supabase/client';
import { Container } from '@/components/Container';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';

type HomeProps = {
    data: {
        id: number;
        created_at: string;
        name: string;
        description: {
            bold: string;
            subtitle: string;
        };
        points: [
            string,
            {
                bold?: string;
                subtitle?: string;
            }
        ];
        buttons: {
            name: string;
            url: string;
            icon: string;
        }[];
    }[];
};

export default async function Home() {
    const supabase = createClient();

    const home: HomeProps = (await supabase.from('Home').select('*')) as any;

    return (
        <Container>
            <div className="flex -mt-17 items-center justify-items-center min-h-screen gap-16 px-10">
                <main className="flex md:w-[65%] gap-[32px] flex-col row-start-2 items-start sm:items-start">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl lg:text-3xl text-main font-bold">Hey there!, I'm-</h2>
                        <h1 className="text-6xl lg:text-8xl font-black">{home.data[0].name}.</h1>
                    </div>
                    <h3 className="text-xl lg:text-2xl text-gray-700 dark:text-gray-400 font-extrabold">
                        <span className="text-black dark:text-white">{home.data[0].description.bold}.</span>{' '}
                        {home.data[0].description.subtitle}
                    </h3>
                    <p className="text-lg lg:text-xl font-bold text-gray-700 dark:text-gray-400">
                        {home.data[0].points[0]}
                        <br />
                        {home.data[0].points[1].subtitle}{' '}
                        <span className="text-main">{home.data[0].points[1].bold}</span>.
                    </p>
                    <div className="flex flex-row gap-4">
                        {home.data[0].buttons.map(data => {
                            return (
                                <a key={data.name} href={data.url} target="_blank">
                                    <Button className="font-bold cursor-pointer">
                                        <Icon icon={data.icon} /> {data.name}
                                    </Button>
                                </a>
                            );
                        })}
                    </div>
                </main>
            </div>
        </Container>
    );
}
