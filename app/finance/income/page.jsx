import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FaArrowAltCircleRight, FaBuilding } from "react-icons/fa";

const Income = () => {
  return (
    <>
      <Navbar />
      <hr />
      <section className='w-[95%] mx-auto flex my-4'>
        <div className='w-[100%] flex justify-center items-center'>

          <div className='w-[25%] mx-5'>

            <Link href='./finance/income/id-cards' className='btn btn-outline-dark flex mb-2'>
              <FaBuilding className='mx-1 bg-inherit' />کارت های هویت محصلان</Link>


            <Link href='/finance' className='btn btn-outline-dark flex mb-2'>
              <FaArrowAltCircleRight className='mx-1 bg-inherit' />بازگشت به صفحه اصلی</Link>
          </div>
        </div>
        {/* <div className='w-[60%] mx-auto'>
          <Image src='/img/1675576783.jpg' alt='background' className='img-thumbnail' width={700} height={100} />
        </div> */}
      </section>
    </>
  )
}

export default Income;