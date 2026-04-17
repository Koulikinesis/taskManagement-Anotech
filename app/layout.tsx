import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anotech Task Manager',
  description: 'Team task manager built with Next.js and Express',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-slate-50 text-slate-900">{children}</div>
      </body>
    </html>
  );
}
