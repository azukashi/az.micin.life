'use client';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const cycleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    if (!mounted) {
        return (
            <Button variant="neutral" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        );
    }

    const getIcon = () => {
        switch (theme) {
            case 'light':
                return <Sun className="h-[1.2rem] w-[1.2rem]" />;
            case 'dark':
                return <Moon className="h-[1.2rem] w-[1.2rem]" />;
            default:
                return <Sun className="h-[1.2rem] w-[1.2rem]" />;
        }
    };

    return (
        <Button variant="neutral" size="icon" onClick={cycleTheme}>
            {getIcon()}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
