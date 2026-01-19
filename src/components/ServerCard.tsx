import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Icon } from '@iconify/react';

type ServerProps = {
    name: string;
    description: string;
    icon: string;
    badge: string[];
    links: {
        name: string;
        url: string;
    }[];
};

export default function ServerCard(props: ServerProps) {
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <img src={props.icon} alt="Qray7Day's server" className="rounded-full size-24" />
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex gap-2 flex-col items-center justify-center">
                    <div className="flex gap-1 pb-2">
                        {props.badge.map((data) => {
                            if (data === 'Admin')
                                return (
                                    <Badge key={data}>
                                        <Icon icon="ri:admin-fill" /> Admin
                                    </Badge>
                                );
                            if (data === 'YouTube Mod')
                                return (
                                    <Badge key={data}>
                                        <Icon icon="mdi:wrench" /> YT Mod
                                    </Badge>
                                );
                            if (data === 'Manager')
                                return (
                                    <Badge key={data}>
                                        <Icon icon="mdi:account-tie" /> Manager
                                    </Badge>
                                );
                        })}
                    </div>
                    <CardTitle>{props.name}</CardTitle>
                    <CardDescription className="text-center">{props.description}</CardDescription>
                </div>
                <div className="flex flex-row items-center justify-center mt-4 gap-2">
                    {props.links.map((data) => {
                        return (
                            <a href={data.url} target="_blank" key={data.name}>
                                <Button className="cursor-pointer">{data.name}</Button>
                            </a>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
}
