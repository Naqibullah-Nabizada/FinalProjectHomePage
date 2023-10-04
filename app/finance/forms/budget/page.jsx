import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { FaArrowAltCircleRight, FaBuilding } from "react-icons/fa";

const Budget = () => {
  return (
    <>
      <Navbar title={"معاونیت مالی و اداری"} />
      <hr />
      <section className='w-[95%] mx-auto flex my-4'>
        <div className='w-[40%] flex justify-center items-center'>

          <div className='w-[60%]'>

          <Link href='/finance/forms/budget/appropriation' className='btn btn-outline-dark flex mb-2'>
              <FaBuilding className='mx-1 bg-inherit' />تخصیصات و پروگرام</Link>
{/* 
            <Link href='/finance/forms/budget/program' className='btn btn-outline-dark flex mb-2'>
              <FaBuilding className='mx-1 bg-inherit' />پروگرام</Link> */}

            <Link href='finance/forms' className='btn btn-outline-dark flex mb-2'>
              <FaArrowAltCircleRight className='mx-1 bg-inherit' />بازگشت به صفحه اصلی</Link>
          </div>

        </div>
        
        <div className='w-[60%] mx-auto'>
            <Image src='/images/finance/1675576783.jpg' alt='background' className='img-thumbnail' width={700} height={100} />
        </div>

      </section>
    </>
  )
}

export default Budget;