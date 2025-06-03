import { Container } from '@/components/Container';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
    return (
        <Container>
            <div className="-mt-17 px-10 space-x-2 flex items-center min-h-screen">
                <div className="space-y-2">
                    <Skeleton className="h-12 md:w-[250px] w-[250px]" />
                    <Skeleton className="h-16 md:w-[200px] w-[200px]" />
                    <Skeleton className="h-8 mt-8 md:w-[400px] w-[250px]" />
                    <Skeleton className="h-8 md:w-[400px] w-[250px]" />
                    <Skeleton className="h-8 mt-8 md:w-[300px] w-[250px]" />
                    <Skeleton className="h-8 md:w-[300px] w-[250px]" />
                    <div className="flex mt-8 space-x-2">
                        <Skeleton className="h-10 md:w-[100px] w-[100px]" />
                        <Skeleton className="h-10 md:w-[100px] w-[100px]" />
                    </div>
                </div>
            </div>
        </Container>
    );
}
