'use client';

import { useState } from 'react';
import { ExperienceSelection } from '@/components/ExperienceSelection';
import { Container } from '@/components/Container';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';
import Markdown from 'react-markdown';
import Image from 'next/image';
import { DiscordExperience } from './DiscordExperience';
import { ManagerExperience } from './ManagerExperience';

type Link = { url: string; name: string };

type ContactButton = { name: string; url: string; icon: string };

type ContentSection = {
    main: string;
    title: string;
    second?: string;
    points?: string[];
};

type ServerInfo = {
    icon: string;
    name: string;
    badge: string[];
    links: Link[];
    description: string;
};

type VTuberInfo = {
    icon: string;
    name: string;
    description: string;
    since: string;
    links: Link[];
};

type ExperienceData<T = ContentSection[] | ServerInfo[]> = {
    id: number;
    created_at: string;
    content: T;
};

export type ExperienceContentProps = {
    exp: {
        data: [
            ExperienceData<ContentSection[]>,
            ExperienceData<ServerInfo[]>,
            ExperienceData<ContentSection[]>,
            ExperienceData<VTuberInfo[]>,
        ];
    };
    contact: ContactButton[];
};

export function ExperienceContent({ exp, contact }: ExperienceContentProps) {
    const [selectedExperience, setSelectedExperience] = useState('manager');

    return (
        <Container>
            {selectedExperience === 'discord' && (
                <DiscordExperience
                    exp={exp}
                    contact={contact}
                    selectedExperience={selectedExperience}
                    setSelectedExperience={setSelectedExperience}
                />
            )}

            {selectedExperience === 'manager' && (
                <ManagerExperience
                    exp={exp}
                    contact={contact}
                    selectedExperience={selectedExperience}
                    setSelectedExperience={setSelectedExperience}
                />
            )}

            {selectedExperience === 'photograph' && (
                <div className="flex items-center justify-center min-h-screen px-5 md:px-10">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl font-black">Photography Experience</h1>
                        <p>Content coming soon...</p>
                        {/* Add your photography content here */}
                    </div>
                </div>
            )}
        </Container>
    );
}
