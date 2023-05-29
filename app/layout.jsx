'use client';

import { Inter } from 'next/font/google';
import '../styles/bootstrap/bootstrap.css';
import './globals.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'پوهنتون کابل',
  description: 'Developed by ITCK Intershipts 1402',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={inter.className}>
        <ToastContainer />
        {children}
      </body>
    </html>
  )
}
