import { Container } from '@/components/Container';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
    return (
        <Container>
            <div className="md:-mt-17 md:flex space-x-2 items-center min-h-screen px-5 py-10 md:px-10">
                <div className="flex flex-col gap-4 min-w-full">
                    <Skeleton className="h-12 md:w-[250px] w-[250px]" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-screen md:min-h-0">
                        <Skeleton className="h-[100%] md:h-72 md:w-full w-full" />
                        <Skeleton className="h-[100%] md:h-72 md:w-full w-full" />
                        <Skeleton className="h-[100%] md:h-72 md:w-full w-full" />
                    </div>
                </div>
            </div>
        </Container>
    );
}
