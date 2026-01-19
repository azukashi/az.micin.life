import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { ExperienceContentProps } from './ExperienceContent';
import { ExperienceSelection } from '@/components/ExperienceSelection';
import ServerCard from '@/components/ServerCard';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';
import Markdown from 'react-markdown';
import Image from 'next/image';

type ManagerExperienceProps = ExperienceContentProps & {
    selectedExperience: string;
    setSelectedExperience: (value: string) => void;
};

export function ManagerExperience({ exp, contact, selectedExperience, setSelectedExperience }: ManagerExperienceProps) {
    return (
        <>
            {/* Section 1 */}
            <div className="md:flex items-center min-h-screen mt-14 md:-mt-7 px-5 md:px-10">
                <div className="flex flex-col gap-4 md:w-[60%]">
                    <ExperienceSelection value={selectedExperience} onValueChange={setSelectedExperience} />
                    <h1 className="text-4xl font-black">My Experience as VTuber Manager</h1>
                    <Markdown>{exp.data[2].content[0].main}</Markdown>
                </div>
                <div className="flex items-center align-middle justify-center pt-10 md:py-0 md:w-[40%]">
                    <Image src="/manager_notion.png" alt="Notion" className="" width={1280} height={1440} />
                </div>
            </div>

            {/* Section 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 items-center align-middle min-h-screen px-5 md:px-10">
                <div className="order-2 md:order-1">
                    <Image src="/fukidashi_man_think.png" alt="Fukidashi Think" width={1000} height={1000} />
                </div>
                <div className="flex flex-col gap-4 order-1 md:order-2">
                    <h1 className="text-4xl font-black">{exp.data[2].content[1].title}</h1>
                    <Markdown>{exp.data[2].content[1].main}</Markdown>
                    <Markdown>{exp.data[2].content[1].second}</Markdown>
                </div>
            </div>

            {/* Section 3 */}
            <div className="flex min-h-screen py-10 px-5 md:px-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-black">{exp.data[2].content[2].title}</h1>
                    <Markdown>{exp.data[2].content[2].main}</Markdown>
                    <p>If you're curious what software I use for management, here are some of the tools I rely on:</p>
                    <ul>
                        {exp.data[2].content[2].points?.map((data) => {
                            return (
                                <li key={data} className="list-disc ml-4">
                                    <Markdown>{data}</Markdown>
                                </li>
                            );
                        })}
                    </ul>
                    <Markdown>{exp.data[2].content[2].second}</Markdown>
                </div>
            </div>

            {/* Section 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 items-center align-middle min-h-screen px-5 md:px-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-black">{exp.data[2].content[3].title}</h1>
                    <Markdown>{exp.data[2].content[3].main}</Markdown>
                </div>
                <div>
                    <Image src="/manager_reminders.png" alt="Apple Reminders" width={1000} height={1000} />
                </div>
            </div>

            {/* Section 5 */}
            <div className="flex items-center justify-center min-h-screen px-5 md:px-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-black">Who am I currently managing for?</h1>
                    <p>
                        You might be curious about the VTubers I am currently managing. Here are some of the list of who
                        I am managing for right now:
                    </p>
                    <div className="flex flex-col gap-4">
                        {exp.data[3].content.map((data) => {
                            return (
                                <Card key={data.name} className="w-full max-w-full px-5 md:px-10">
                                    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                                        <div>
                                            <img
                                                src={data.icon}
                                                alt={data.name}
                                                className="rounded-full size-32 md:size-48"
                                            />
                                        </div>

                                        <CardContent className="flex-1">
                                            <div className="flex flex-col gap-2">
                                                <CardTitle className="text-2xl md:text-3xl font-bold">
                                                    {data.name}
                                                </CardTitle>
                                                <CardDescription className="text-base md:text-lg">
                                                    {data.description}
                                                </CardDescription>
                                                <div>
                                                    <p className="font-mono text-sm uppercase text-gray-700 dark:text-gray-300">
                                                        Managing since {data.since}
                                                    </p>
                                                </div>
                                                <div className="flex flex-row gap-2 mt-2">
                                                    {data.links.map((link) => {
                                                        return (
                                                            <a href={link.url} target="_blank" key={link.name}>
                                                                <Button className="cursor-pointer">{link.name}</Button>
                                                            </a>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </div>
                                </Card>
                            );
                        })}

                        <p className="my-4">
                            If you want to support them, feel free to reach their YouTube channels and consider
                            subscribing. Thank you for supporting!
                        </p>
                    </div>
                </div>
            </div>

            {/* Section 6 */}
            <div className="flex items-center justify-center min-h-screen px-5 md:px-10">
                <div className="flex flex-col items-center gap-4 md:w-[60%]">
                    <h1 className="text-4xl font-black">Need help?</h1>
                    <p className="text-center">
                        Are you currently seeking a VTuber manager or need assistance with managing your VTuber
                        activities? Feel free to reach out to me through the following platforms:
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
