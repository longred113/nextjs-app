import SideNav from '@/app/ui/dashboard/sidenav';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        template: "%s | Acme Dashboard",
        default: "Acme Dashboard",
    },
    description: "The Official Next.js Learn Dashboard built with App Router.",
    metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className={`${inter.className} antialiased`}>{children}</div>
        </div>
    );
}