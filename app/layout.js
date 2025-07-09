"use client";
import '../styles/globals.css';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          <div className="flex">
            <Sidebar />
            <div className="flex-1 min-h-screen bg-gray-100 dark:bg-gray-900">
              <Navbar />
              <main className="p-6">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}