import { ExperienceSelection } from '@/components/ExperienceSelection';
import ServerCard from '@/components/ServerCard';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';
import Markdown from 'react-markdown';
import Image from 'next/image';
import type { ExperienceContentProps } from './ExperienceContent';

type DiscordExperienceProps = ExperienceContentProps & {
    selectedExperience: string;
    setSelectedExperience: (value: string) => void;
};

export function DiscordExperience({ exp, contact, selectedExperience, setSelectedExperience }: DiscordExperienceProps) {
    return (
        <>
            {/* Section 1 */}
            <div className="md:flex items-center min-h-screen mt-14 md:-mt-7 px-5 md:px-10">
                <div className="flex flex-col gap-4 md:w-[60%]">
                    <ExperienceSelection value={selectedExperience} onValueChange={setSelectedExperience} />
                    <h1 className="text-4xl font-black">My Experience in Discord Server Management</h1>
                    <Markdown>{exp.data[0].content[0].main}</Markdown>
                </div>
                <div className="flex items-center align-middle justify-center pt-10 md:py-0 md:w-[40%]">
                    <Image src="/discord.png" alt="Discord server" className="" width={1280} height={1440} />
                </div>
            </div>

            {/* Section 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 items-center align-middle min-h-screen px-5 md:px-10">
                <div className="order-2 md:order-1">
                    <Image src="/discord_youtube_integration.png" alt="Discord icon" width={1000} height={1000} />
                </div>
                <div className="flex flex-col gap-4 order-1 md:order-2">
                    <h1 className="text-4xl font-black">{exp.data[0].content[1].title}</h1>
                    <Markdown>{exp.data[0].content[1].main}</Markdown>
                    <Markdown>{exp.data[0].content[1].second}</Markdown>
                </div>
            </div>

            {/* Section 3 */}
            <div className="flex min-h-screen py-10 px-5 md:px-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-black">{exp.data[0].content[2].title}</h1>
                    <Markdown>{exp.data[0].content[2].main}</Markdown>
                    <p>This deep understanding comes from my knowledge of:</p>
                    <ul>
                        {exp.data[0].content[2].points?.map((data) => {
                            return (
                                <li key={data} className="list-disc ml-4">
                                    <Markdown>{data}</Markdown>
                                </li>
                            );
                        })}
                    </ul>
                    <Markdown>{exp.data[0].content[2].second}</Markdown>
                </div>
            </div>

            {/* Section 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 items-center align-middle min-h-screen px-5 md:px-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-black">{exp.data[0].content[3].title}</h1>
                    <Markdown>{exp.data[0].content[3].main}</Markdown>
                </div>
                <div>
                    <Image src="/exxyll_card.png" alt="Discord icon" width={1000} height={1000} />
                </div>
            </div>

            {/* Section 5 */}
            <div className="flex items-center justify-center min-h-screen px-5 md:px-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-black">Discord server & YouTube Moderation lists</h1>
                    <p>
                        Here are lists of Discord servers & YouTube channels that are currently handled or moderated by
                        me.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {exp.data[1].content.map((data) => {
                            return (
                                <ServerCard
                                    name={data.name}
                                    badge={data.badge}
                                    description={data.description}
                                    icon={data.icon}
                                    links={data.links}
                                    key={data.name}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Section 6 */}
            <div className="flex items-center justify-center min-h-screen px-5 md:px-10">
                <div className="flex flex-col items-center gap-4 md:w-[60%]">
                    <h1 className="text-4xl font-black">Need help?</h1>
                    <p className="text-center">
                        Do you want to create a Discord server community? You are on the right position! If you are
                        currently not having a Discord server or need me to do advisory in your current Discord server,
                        I can help with that. Just contact me here and ask me.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center max-w-lg">
                        {contact.map((data) => {
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
        </>
    );
}
