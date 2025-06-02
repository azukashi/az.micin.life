import { Marquee } from '@devnomic/marquee';
import { Icon } from '@iconify/react';
import '@/styling/marquee.css';

export const MarqueeHome = () => {
    const items = [<Icon icon="mdi:react" />];

    return (
        <Marquee
            className="border-t-4 border-border md:[&_.animate-marquee-left]:gap-[50px]! [&_.animate-marquee-left]:gap-[35px]! bg-secondary-background md:py-4 py-3"
            direction="left"
        >
            {Array.from({ length: 10 }).map((_, id) => {
                return (
                    <div
                        className="flex items-center md:gap-[50px] gap-[35px] xl:[&_span]:text-3xl md:[&_span]:text-2xl sm:[&_span]:text-xl [&_span]:text-base lg:[&_svg]:size-[30px] md:[&_svg]:size-10 [&_svg]:size-[30px]"
                        key={id}
                    >
                        <Icon icon="mdi:react" className="text-sky-500" />
                        <span>React.js</span>
                        <Icon icon="material-icon-theme:vue" />
                        <span>Vue.js </span>
                        <Icon icon="nonicons:next-16" />
                        <span>Next.js</span>
                        <Icon icon="material-icon-theme:nuxt" />
                        <span>Nuxt.js</span>
                        <Icon icon="mdi:nodejs" className="text-green-500" />
                        <span>Node.js</span>
                        <Icon icon="devicon:typescript" />
                        <span>TypeScript</span>
                        <Icon icon="devicon:bun" />
                        <span>Bun</span>
                        <Icon icon="skill-icons:elysia-light" />
                        <span>Elysia.js</span>
                        <Icon icon="devicon:discordjs" />
                        <span>Discord.js</span>
                    </div>
                );
            })}
        </Marquee>
    );
};
