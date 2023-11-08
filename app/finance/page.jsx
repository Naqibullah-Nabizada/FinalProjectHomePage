import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] })

import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';


export default function Home() {

  return (
    <>
      <Navbar title="معاونیت مالی و اداری" />
      <hr />
      <main>
        <Hero />
      </main>
    </>
  )
}

