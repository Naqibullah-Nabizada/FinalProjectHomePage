import Image from "next/image";
import Link from "next/link";
import { FaArrowAltCircleRight, FaFileCsv, FaIdCardAlt, FaReceipt } from "react-icons/fa";

const Hero = () => {
  return (
    <section className='w-[95%] mx-auto flex my-4'>
      <div className='w-[40%]'>

        <div className='w-[60%] mt-36'>
          
          <Link href='./finance/income' className='btn btn-outline-dark flex mb-2'>
            <FaFileCsv className='mx-1 bg-inherit' />بخش عواید پوهنتون کابل</Link>

          <Link href='./finance/forms' className='btn btn-outline-dark flex mb-2'>
            <FaIdCardAlt className='mx-1 bg-inherit' />بخش فورم های میم پوهنتون کابل</Link>

            <Link href='./finance/reports' className='btn btn-outline-dark flex mb-2'>
            <FaReceipt className='mx-1 bg-inherit' />بخش گزارشات</Link>
            
          <Link href='/' className='btn btn-outline-dark flex mb-2'>
            <FaArrowAltCircleRight className='mx-1 bg-inherit' />بازگشت به صفحه اصلی</Link>
            
        </div>
      </div>
      <div className='w-[60%] mx-auto'>
        <Image src='/images/finance/1675576783.jpg' alt='background' className='img-thumbnail' width={700} height={100} />
      </div>
    </section>
  )
}

export default Hero;