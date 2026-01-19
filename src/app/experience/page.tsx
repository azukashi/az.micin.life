import { createClient } from '@/utils/supabase/client';
import { Container } from '@/components/Container';
import { AboutProps } from '../about/page';
import { Metadata } from 'next';
import { ExperienceContent } from './ExperienceContent';

export const metadata: Metadata = {
    title: 'Experience',
    openGraph: {
        images: [
            {
                url: 'https://azukashiic.sirv.com/assets/portfolio/experience.png?format=original&q=100',
                alt: "🖥️ Azu's Portfolio",
                type: 'image/png',
                width: 1200,
                height: 630,
            },
        ],
    },
};

type ExperienceProps = {
    data: [
        {
            id: number;
            created_at: string;
            content: [
                { main: string; title: string },
                { main: string; title: string; second: string },
                { main: string; title: string; points: string[]; second: string },
                { main: string; title: string },
            ];
        },
        {
            id: number;
            created_at: string;
            content: {
                icon: string;
                name: string;
                badge: string[];
                links: { url: string; name: string }[];
                description: string;
            }[];
        },
        {
            id: number;
            created_at: string;
            content: [
                { main: string; title: string },
                { main: string; title: string; second: string },
                { main: string; title: string; points: string[]; second: string },
                { main: string; title: string },
            ];
        },
        {
            id: number;
            created_at: string;
            content: {
                icon: string;
                name: string;
                description: string;
                since: string;
                links: { url: string; name: string }[];
            }[];
        },
    ];
};

export default async function Experience() {
    const supabase = createClient();
    const exp: ExperienceProps = (await supabase
        .from('Experience')
        .select('*')
        .order('id', { ascending: true })) as any;
    const contact = ((await supabase.from('About').select('*')) as AboutProps).data[0].contact_buttons;

    return <ExperienceContent exp={exp} contact={contact} />;
}
