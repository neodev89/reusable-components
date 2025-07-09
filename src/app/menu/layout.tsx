import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create Menu",
    description: "A multiple cards to create a menu",
    /**metadataBase: new URL('https://example.com'),
        title: { default: 'My Site', template: '%s | My Site' },
        description: 'Welcome to My Site',
        alternates: {
        canonical: 'https://example.com',
        languages: {
        'en-US': 'https://example.com/en-US',
        'de-DE': 'https://example.com/de-DE'
        }
    },
    openGraph: {
        title: 'My Site',
        description: 'Welcome to My Site',
        url: 'https://example.com',
        siteName: 'My Site',
        images: [{ url: 'https://example.com/og.png' }]
    }, */
};

export default function LayoutMenu({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}