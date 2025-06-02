import { Container } from '@/components/Container';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';

export default function Home() {
    return (
        <Container>
            <div className="flex -mt-17 items-center justify-items-center min-h-screen gap-16 px-10">
                <main className="flex md:w-[65%] gap-[32px] flex-col row-start-2 items-start sm:items-start">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl lg:text-3xl text-main font-bold">Hey there!, I'm-</h2>
                        <h1 className="text-6xl lg:text-8xl font-black">Azka.</h1>
                    </div>
                    <h3 className="text-xl lg:text-2xl text-gray-700 dark:text-gray-400 font-extrabold">
                        <span className="text-black dark:text-white">Web Developer.</span> A self-taught developer with
                        an interest in Computer Science & Cinematography.
                    </h3>
                    <p className="text-lg lg:text-xl font-bold text-gray-700 dark:text-gray-400">
                        🚀 Exploring opportunities and side projects.
                        <br />
                        💻 Currently specializing in <span className="text-main">Full-stack Web Development</span>.
                    </p>
                    <div className="flex flex-row gap-4">
                        <a href="https://github.com/azukashi" target="_blank">
                            <Button className="font-bold cursor-pointer">
                                <Icon icon="mdi:github" /> GitHub
                            </Button>
                        </a>
                        <a href="mailto:azukashiic@icloud.com" target="_blank">
                            <Button className="font-bold cursor-pointer">
                                <Icon icon="material-symbols:mail-outline" />
                                E-mail
                            </Button>
                        </a>
                    </div>
                </main>
            </div>
        </Container>
    );
}
