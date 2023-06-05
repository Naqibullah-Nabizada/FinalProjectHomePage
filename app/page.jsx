import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex justify-between text-2xl my-3">
        <div className="mx-4">
          <Image src={'/images/logo-m.jpg'} alt="logo" width={100} height={100} />
        </div>
        <div className="flex flex-col text-2xl justify-center items-center">
          <h1>وزارت تحصیلات عالی</h1>
          <h1 className="mt-2">ریاست پوهنتون کابل</h1>
        </div>
        <div className="mx-4">
          <Image src={'/images/logo-u.jpg'} alt="logo" width={100} height={100} />
        </div>
      </header>
      <hr />
      <main className="w-[100%]">
        <section className="flex justify-center my-5">

          <Link href={"./finance"} className="card p-2 mx-3 w-[22%]">
            <Image src={'/images/finance.jpg'} alt="logo" width={200} height={200}
              className="card-img-top h-[15rem]" />
            <hr />
            <p className='card-title text-center text-xl pt-3'>آمریت مالی و حسابی</p>
          </Link>

          <Link href={"./hr"} className="card p-2 mx-3 w-[22%]">
            <Image src={'/images/hr.png'} alt="logo" width={200} height={200}
              className="card-img-top h-[15rem]" />
            <hr />
            <h1 className='card-title text-center text-xl pt-3'>آمریت منابع بشری</h1>
          </Link>

          <Link href={"./supplies"} className="card p-2 mx-3 w-[22%]">
            <Image src={'/images/suplies.png'} alt="logo" width={200} height={200}
              className="card-img-top h-[15rem]" />
            <hr />
            <p className='card-title text-center text-xl pt-3'>آمریت تهیه و تدارکات</p>
          </Link>

        </section>
      </main>
      <footer className="text-center mt-[5rem] mb-3">
        <h4 className="text-zinc-500">copyright {new Date().getFullYear()} &copy;</h4>
      </footer>
    </>
  )
}
