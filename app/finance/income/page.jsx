import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FaArrowAltCircleRight, FaBuilding, FaCar, FaIdCard, FaIdCardAlt } from "react-icons/fa";

const Income = () => {
  return (
    <>
      <Navbar />
      <hr />
      <section className='w-[95%] mx-auto flex my-4'>
        <div className='w-[100%] flex justify-center items-center'>

          <div className='w-[25%] mx-5'>

            <Link href='/finance/income/nocturnal-fees' className='btn btn-outline-dark flex mb-2'>
              <FaIdCard className='mx-1 bg-inherit' />فیس محصلین برنامه های شبانه</Link>

            <Link href='/finance/income/ma-fees' className='btn btn-outline-dark flex mb-2'>
              <FaIdCardAlt className='mx-1 bg-inherit' />فیس محصلین برنامه های ماستری</Link>

            <Link href='/finance/income/en-deploma' className='btn btn-outline-dark flex mb-2'>
              <FaBuilding className='mx-1 bg-inherit' />دیپلوم زبان انگلیسی</Link>

            <Link href='/finance/income/en-transcript' className='btn btn-outline-dark flex mb-2'>
              <FaCar className='mx-1 bg-inherit' />ترانسکریپت زبان انگلیسی</Link>

            <Link href='/finance/income/national-num-table' className='btn btn-outline-dark flex mb-2'>
              <FaCar className='mx-1 bg-inherit' />جدول نمرات ملی</Link>

            <Link href='/finance/income/buildings' className='btn btn-outline-dark flex mb-2'>
              <FaIdCard className='mx-1 bg-inherit' />کرایه اپارتمان های استادان</Link>

            <Link href='/finance/income/farm-products' className='btn btn-outline-dark flex mb-2'>
              <FaIdCardAlt className='mx-1 bg-inherit' />محصولات تجزیه فارمسوتیکی</Link>

            <Link href='/finance/income/guaranteed-recursive' className='btn btn-outline-dark flex mb-2'>
              <FaBuilding className='mx-1 bg-inherit' />تضمین و بازگشتی</Link>

            <Link href='/finance/income/research-farm' className='btn btn-outline-dark flex mb-2'>
              <FaCar className='mx-1 bg-inherit' />فارم تحقیقاتی پوهنځی زراعت</Link>

            <Link href='/finance/income/ma-forms' className='btn btn-outline-dark flex mb-2'>
              <FaIdCard className='mx-1 bg-inherit' />فورم های ماستری</Link>

          </div>

          <div className='w-[25%] mx-5'>

            <Link href='/finance/income/bread' className='btn btn-outline-dark flex mb-2'>
              <FaIdCardAlt className='mx-1 bg-inherit' />فروش نان قاق لیلیه</Link>

            <Link href='/finance/income/bakery' className='btn btn-outline-dark flex mb-2'>
              <FaCar className='mx-1 bg-inherit' />کرایه خبازی</Link>

            <Link href='/finance/income/guesthouse' className='btn btn-outline-dark flex mb-2'>
              <FaIdCard className='mx-1 bg-inherit' />کرایه مهمانخانه آمریت خدمات</Link>

            <Link href='/finance/income/vehicles' className='btn btn-outline-dark flex mb-2'>
              <FaIdCardAlt className='mx-1 bg-inherit' />کارت های وسایط نقلیه</Link>

            <Link href='/finance/income/id-cards' className='btn btn-outline-dark flex mb-2'>
              <FaBuilding className='mx-1 bg-inherit' />کارت های هویت محصلان</Link>

            <Link href='/finance/income/papers' className='btn btn-outline-dark flex mb-2'>
              <FaCar className='mx-1 bg-inherit' />فروش ضایعات کاغذ نشرات</Link>

            <Link href='/finance/income/animal-clinic' className='btn btn-outline-dark flex mb-2'>
              <FaIdCard className='mx-1 bg-inherit' />کلینک حیوانی پوهنځی وترنری</Link>

            <Link href='/finance/income/kabul-bank' className='btn btn-outline-dark flex mb-2'>
              <FaIdCardAlt className='mx-1 bg-inherit' />کرایه نمایندگی کابل بانک</Link>

            <Link href='/finance/income/bike' className='btn btn-outline-dark flex mb-2'>
              <FaBuilding className='mx-1 bg-inherit' />کرایه بایسکل نگهبانی</Link>


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