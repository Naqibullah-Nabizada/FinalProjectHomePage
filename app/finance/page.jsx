import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] })

import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';


export default function Home() {
  return (
    <>
      <Navbar />
      <hr />
      <main>
        <Hero />
      </main>
    </>
  )
}
