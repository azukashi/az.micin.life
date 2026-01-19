import { ThemeProvider } from '@/components/theme-provider';
import { Providers as ProgressProvider } from './provider';
import { DM_Sans, DM_Mono } from 'next/font/google';
import { Navbar } from '@/components/NavigationBar';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';

const dmSans = DM_Sans({
    subsets: ['latin'],
    display: 'swap',
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ff7a05' },
        { media: '(prefers-color-scheme: dark)', color: '#eb6d00' },
    ],
};

export const metadata: Metadata = {
    metadataBase: new URL('https://az.micin.life'),
    title: {
        template: '%s | λzu',
        default: 'λzu',
    },
    description: 'Software, full-stack web and Electrical engineer based in Indonesia.',
    alternates: {
        canonical: '/',
    },
    authors: [{ name: 'Azukashiic', url: 'https://az.micin.life' }],
    creator: 'Azukashiic',
    robots: 'index, follow',
    generator: 'Next.js',
    openGraph: {
        type: 'website',
        url: 'https://az.micin.life',
        siteName: 'Azukashiic',
        title: 'Azu - Software, web & electrical engineer',
        description: 'Software, full-stack web and Electrical engineer based in Indonesia.',
        images: [
            {
                url: 'https://azukashiic.sirv.com/assets/portfolio/home.png?format=original&q=100',
                alt: "🖥️ Azu's Portfolio",
                type: 'image/png',
                width: 1200,
                height: 630,
            },
        ],
        countryName: 'Indonesia',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@azukashiic',
        creator: '@azukashiic',
        title: 'Azu - Software, web & electrical engineer',
        description: 'Software, full-stack web and Electrical engineer based in Indonesia.',
        images: [
            {
                url: 'https://azukashiic.sirv.com/assets/portfolio/home.png?format=original&q=100',
                alt: "🖥️ Azu's Portfolio",
                type: 'image/png',
                width: 1200,
                height: 630,
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <Script
                    defer
                    strategy="beforeInteractive"
                    src="https://umami.micin.life/script.js"
                    data-website-id="c8c2eed9-e7ef-4cc5-9c7d-19e5d1aca55f"
                ></Script>
            </head>
            <body
                className={`${dmSans.className} antialiased bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]`}
            >
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
                    <ProgressProvider>
                        <Navbar />
                        {children}
                    </ProgressProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
