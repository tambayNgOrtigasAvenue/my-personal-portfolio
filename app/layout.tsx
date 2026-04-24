import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Mark Kengie Aldabon',
  description: 'Portfolio of Mark Kengie Aldabon',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${montserrat.variable}`}>
      <body className="font-sans antialiased bg-[#FFFFFF] text-[#2B2B2B]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
