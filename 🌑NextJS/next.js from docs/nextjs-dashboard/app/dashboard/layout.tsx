import SideNav from '@/app/ui/dashboard/sidenav';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard',
  icons: {
    icon: '/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#000000',
  other: {
    'msapplication-TileColor': '#000000',
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
  },
  category: 'technology',
  creator: 'John Doe',
  applicationName: 'Dashboard',
  referrer: 'no-referrer',
  keywords: ['dashboard', 'analytics', 'reports', 'statistics'],
  authors: [{ name: 'John Doe', url: 'https://example.com' }],
  colorScheme: 'light',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
     className={`${inter.className} flex h-screen flex-col md:flex-row md:overflow-hidden`}
    >
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}