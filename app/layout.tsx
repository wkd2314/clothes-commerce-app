import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import GlobalNavigator from '@/components/layout/global-navigator';
import Providers from '@/components/layout/providers';
import GlobalFooter from '@/components/layout/global-footer';
import GlobalSidebar from '@/components/layout/global-sidebar';
import { cookies } from 'next/headers';
import { createClient } from '@/lib/supabase/server';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by checkout next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data : { user } } = await supabase.auth.getUser()
  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  return (
    <html lang="en">
      <body className={inter.className}>
          <Providers
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <div className="sticky top-0 z-10">
                <GlobalNavigator isLoggedIn={!!user} isAdmin={isAdmin}/>
              </div>
              <div className="flex flex-grow">
                <GlobalSidebar />
                <main className="flex-grow">{children}</main>
              </div>
              <GlobalFooter />
            </div>
          </Providers>
      </body>
    </html>
  );
}
