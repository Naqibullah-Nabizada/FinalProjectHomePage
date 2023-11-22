"use client"

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] })


import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import { redirect } from 'next/navigation';
import { useContext } from 'react';
import { AuthContext } from './admin/context/context';


export default function Home() {

  const { token } = useContext(AuthContext);

  return (
    <>
      <Navbar title="معاونیت مالی و اداری" />
      <hr />
      <main>
        {
          token !== null ?
            <Hero /> : (
              <>
                {
                  redirect("/finance/admin/auth")
                }
              </>
            )
        }
      </main>
    </>
  )
}

