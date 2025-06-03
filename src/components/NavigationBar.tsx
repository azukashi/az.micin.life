'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { ModeToggle } from '@/components/ModeToggle';
import { Button } from '@/components/ui/button';
import { Container } from './Container';
import Image from 'next/image';

const navigationItems = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'About',
        href: '/about',
    },
    {
        title: 'Projects',
        href: '/projects',
    },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-background border-b-2 border-black backdrop-blur supports-[backdrop-filter]:bg-background/100">
            <Container>
                <div className="flex px-10 h-16 items-center">
                    {/* Logo */}
                    <div className="mr-4 hidden md:flex">
                        <Link href="/" className="mr-6 flex items-center space-x-2">
                            <Image src="/favicon.png" width={32} height={32} alt="Logo" />
                            <span className="hidden font-bold sm:inline-block">Az</span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="neutral"
                                className="mr-4 px-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                            >
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <SheetDescription className="sr-only">
                                Main navigation menu for mobile devices
                            </SheetDescription>
                            <div className="px-6 py-6">
                                <MobileNav onNavigate={() => setIsOpen(false)} />
                            </div>
                        </SheetContent>
                    </Sheet>

                    {/* Mobile logo */}
                    <div className="flex md:hidden">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image src="/favicon.png" width={32} height={32} alt="Logo" />
                            <span className="font-bold">Az</span>
                        </Link>
                    </div>

                    {/* Desktop navigation */}
                    <div className="flex flex-1 items-center justify-between space-x-6 md:justify-end">
                        <div className="w-full flex-1 md:w-auto md:flex-none">
                            <nav className="hidden md:flex">
                                <ul className="flex items-center space-x-6">
                                    {navigationItems.map(item => (
                                        <li key={item.title}>
                                            <Link
                                                href={item.href}
                                                className="text-sm font-medium transition-colors hover:text-primary"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        {/* User menu */}
                        <nav className="flex items-center space-x-2">
                            <ModeToggle />
                        </nav>
                    </div>
                </div>
            </Container>
        </header>
    );
}

interface MobileNavProps {
    onNavigate: () => void;
}

function MobileNav({ onNavigate }: MobileNavProps) {
    const handleLinkClick = () => {
        onNavigate();
    };

    return (
        <div className="flex flex-col space-y-6">
            <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
                <Image src="/favicon.png" width={32} height={32} alt="Logo" />
                <span className="font-bold text-lg">Az</span>
            </Link>
            <div className="flex flex-col space-y-4">
                {navigationItems.map(item => (
                    <div key={item.title}>
                        <Link
                            key={item.title}
                            href={item.href}
                            onClick={handleLinkClick}
                            className="text-lg font-medium text-foreground/70 transition-colors hover:text-foreground py-2 px-3 rounded-md hover:bg-accent"
                        >
                            {item.title}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
