"use client"

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] })

import Link from "next/link";

import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
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
                <section className="container col-8 flex justify-center align-items-center">
                  <div>
                    <p className="alert alert-info text-center">برای وارد شدن به پنل مدیریت ابتدا وارد حساب کاربری خود شوید!</p>
                    <Link href="finance/admin/auth" className="block mx-auto btn btn-outline-primary col-6">ورود به پنل مدیریت</Link>
                  </div>
                  <div>
                    <Image src={"/images/finance/register.svg"} alt='register' width={500} height={500} />
                  </div>
                </section>
              </>
            )
        }
      </main>
    </>
  )
}

