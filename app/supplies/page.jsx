import Main from '@/components/supplies/Main/listMenu';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className='flex'>
        <Main />
        </section>
      </main>
    </>
  )
}