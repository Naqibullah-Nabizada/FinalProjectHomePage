"use client"

import axios from 'axios';
import { Inter } from 'next/font/google';

import '../styles/bootstrap/bootstrap.css';

import './globals.css';

import 'react-confirm-alert/src/react-confirm-alert.css';

import { AuthContextProvider } from './finance/admin/context/context';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.withCredentials = true;
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'پوهنتون کابل',
  description: 'Developed by ITCK Intershipts 1402',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={inter.className}>
        <AuthContextProvider>
        <ToastContainer /> 
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
