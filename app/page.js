import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex justify-between text-2xl my-3">
        <div className="mx-3">
          <Image src={'/../public/images/logo-m.jpg'} alt="logo" width={100} height={100} />
        </div>
        <div className="flex flex-col text-3xl justify-center items-center">
          <h1>وزارت تحصیلات عالی</h1>
          <h1 className="mt-2">ریاست پوهنتون کابل</h1>
        </div>
        <div className="mx-3">
          <Image src={'/../public/images/logo-u.jpg'} alt="logo" width={100} height={100} />
        </div>
      </header>
      <hr />
      <main className="w-[100%]">
        <section className="flex justify-center my-5">

          <div className="card p-2 mx-3 w-[22%]">
            <Image src={'/../public/images/finance.jpg'} alt="logo" width={200} height={200}
              className="card-img-top h-[15rem]" />
            <hr />
            <h1 className='card-title text-center text-xl pt-3'>آمریت مالی و حسابی</h1>
          </div>
          <div className="card p-2 mx-3 w-[22%]">
            <Image src={'/../public/images/HR.webp'} alt="logo" width={200} height={200}
              className="card-img-top h-[15rem]" />
            <hr />
            <h1 className='card-title text-center text-xl pt-3'>آمریت منابع بشری</h1>
          </div>
          <div className="card p-2 mx-3 w-[22%]">
            <Image src={'/../public/images/S.png'} alt="logo" width={200} height={200}
              className="card-img-top h-[15rem]" />
            <hr />
            <h1 className='card-title text-center text-xl pt-3'>آمریت تهیه و تدارکات</h1>
          </div>
        </section>
      </main>
      <footer className="text-center">
        <h4>copyright {new Date().getFullYear()} &copy;</h4>
      </footer>
    </>
  )
}
