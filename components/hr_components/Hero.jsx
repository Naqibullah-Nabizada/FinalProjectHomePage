import Image from "next/image";
import Link from "next/link";
import { FaArrowAltCircleRight, FaCar, FaFileCsv, FaIdCardAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section className='w-[95%] mx-auto flex my-4'>
      <div className='w-[40%]'>

        <div className='w-[60%] mt-36'>
          
          <Link href='./hr/recruitment' className='btn btn-outline-dark flex mb-2'>
            <FaFileCsv className='mx-1 bg-inherit' />بخش استخدام پوهنتون کابل</Link>

          <Link href='./hr_components/l' className='btn btn-outline-dark flex mb-2'>
            <FaIdCardAlt className='mx-1 bg-inherit' />بحش سوانح پوهنتون کابل</Link>

          <Link href='' className='btn btn-outline-dark flex mb-2'>
            <FaCar className='mx-1 bg-inherit' />بخش آموزش و انگاشف پوهنتون کابل</Link>

          <Link href='/' className='btn btn-outline-dark flex mb-2'>
            <FaArrowAltCircleRight className='mx-1 bg-inherit' />بازگشت به صفحه اصلی</Link>
            
        </div>
      </div>
      </section> 
  )}

  export default Hero;
