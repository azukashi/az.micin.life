import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { createClient } from '@/utils/supabase/client';
import { Container } from '@/components/Container';
import { Icon } from '@iconify/react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Projects',
    openGraph: {
        images: [
            {
                url: 'https://azukashiic.sirv.com/assets/portfolio/projects.png?format=original&q=100',
                alt: "🖥️ Azu's Portfolio",
                type: 'image/png',
                width: 1200,
                height: 630,
            },
        ],
    },
};

type ProjectsProps = {
    data: {
        id: number;
        created_at: string;
        name: string;
        description: string;
        image: string;
        url: string;
        source: string;
    }[];
};

export default async function Projects() {
    const supabase = createClient();
    const projects: ProjectsProps = (await supabase
        .from('Projects')
        .select('*')
        .order('id', { ascending: true })) as any;

    return (
        <Container>
            <div className="md:flex items-center px-5 py-10 md:px-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-black">Projects</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {projects.data.map((data) => {
                            return (
                                <Card key={data.id} className="py-0">
                                    <CardHeader className="border-b-2 border-black px-0 gap-0 overflow-hidden">
                                        <div className="overflow-hidden">
                                            <a href={data.url || data.source} target="_blank">
                                                <Image
                                                    src={data.image}
                                                    alt={data.name}
                                                    width={700}
                                                    height={500}
                                                    className="w-[100%]"
                                                />
                                            </a>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pb-6">
                                        <div className="flex pb-2">
                                            <CardTitle>{data.name}</CardTitle>
                                            <div className="flex flex-1 items-center align-middle space-x-2 justify-end">
                                                {data.source ? (
                                                    <a href={data.source} target="_blank">
                                                        <Icon icon="mdi:github" className="size-5" />
                                                    </a>
                                                ) : null}
                                                {data.url ? (
                                                    <a href={data.url} target="_blank">
                                                        <Icon icon="majesticons:open" className="size-5" />
                                                    </a>
                                                ) : null}
                                            </div>
                                        </div>
                                        <CardDescription>{data.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* <code className="block bg-main/30 p-4 rounded-2xl">{JSON.stringify(projects)}</code> */}
        </Container>
    );
}
