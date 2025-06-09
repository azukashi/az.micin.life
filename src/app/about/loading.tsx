import { Container } from '@/components/Container';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
    return (
        <Container>
            <div className="md:-mt-17 space-x-2 md:flex items-center min-h-screen px-5 md:px-10">
                <div className="flex order-2 items-center align-middle justify-center py-10 md:w-[40%]">
                    <Skeleton className="size-42 md:size-64 rounded-full" />
                </div>

                <div className="flex flex-col gap-4 md:w-[60%]">
                    <Skeleton className="h-12 md:w-[250px] w-[250px]" />
                    <Skeleton className="h-screen md:h-76 md:w-[60%] w-full" />
                </div>
            </div>
        </Container>
    );
}
