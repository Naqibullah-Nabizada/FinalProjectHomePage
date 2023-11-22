"use client"

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaAddressBook, FaArrowAltCircleRight, FaBicycle, FaBreadSlice, FaBuilding, FaCar, FaCat, FaCheck, FaHome, FaHospital, FaHouseUser, FaIdCard, FaIdCardAlt, FaMoneyCheckAlt, FaPager, FaRegMoneyBillAlt, FaTable } from "react-icons/fa";
import { AuthContext } from "../admin/context/context";

const Income = () => {

  const { token } = useContext(AuthContext);

  return (
    <>
      <Navbar title={"معاونیت مالی و اداری"} />
      <hr />

      {
        token !== null ?
          (
            <>
              <div className="flex justify-center mt-3">
                <span id="header">بخش عواید پوهنتون کابل</span>
              </div>
              <section className='w-[100%] flex justify-center my-[2rem]'>
                <div className='w-[20%] mx-3'>

                  <Link href='/finance/income/id-cards' className='btn btn-sm fw-bold btn-outline-dark flex align-items-center mb-2'>
                    <FaIdCard className='mx-1 bg-inherit' />کارت های هویت محصلان</Link>

                  <Link href='/finance/income/nocturnal-fees' className='btn btn-sm fw-bold btn-outline-dark flex align-items-center mb-2'>
                    <FaRegMoneyBillAlt className='mx-1 bg-inherit' />فیس محصلین برنامه های شبانه</Link>

                  <Link href='/finance/income/ma-fees' className='btn btn-sm fw-bold btn-outline-dark flex align-items-center mb-2'>
                    <FaMoneyCheckAlt className='mx-1 bg-inherit' />فیس محصلین برنامه های ماستری</Link>

                  <Link href='/finance/income/en-deploma' className='btn btn-sm fw-bold btn-outline-dark flex align-items-center mb-2'>
                    <FaPager className='mx-1 bg-inherit' />دیپلوم زبان انگلیسی</Link>

                  <Link href='/finance/income/en-transcript' className='btn btn-sm fw-bold btn-outline-dark flex align-items-center mb-2'>
                    <FaAddressBook className='mx-1 bg-inherit' />ترانسکریپت زبان انگلیسی</Link>

                  <Link href='/finance/income/national-num-table' className='btn btn-sm fw-bold btn-outline-dark flex align-items-center mb-2'>
                    <FaTable className='mx-1 bg-inherit' />جدول نمرات ملی</Link>

                  <Link href='/finance/income/buildings' className='btn btn-sm fw-bold btn-outline-dark flex align-items-center mb-2'>
                    <FaBuilding className='mx-1 bg-inherit' />کرایه اپارتمان های استادان</Link>

                  <Link href='/finance/income/vehicles' className='btn btn-sm fw-bold btn-outline-dark flex align-items-center mb-2'>
                    <FaCar className='mx-1 bg-inherit' />کارت های وسایط نقلیه</Link>

                  <Link href='/finance/income/farm-products' className='btn btn-sm fw-bold btn-outline-dark flex align-items-center mb-2'>
                    <FaIdCardAlt className='mx-1 bg-inherit' />محصولات تجزیه فارمسوتیکی</Link>

                  <Link href='/finance/income/guaranteed-recursive' className='btn btn-sm fw-bold btn-outline-dark flex align-items-center mb-2'>
                    <FaCheck className='mx-1 bg-inherit' />تضمین و بازگشتی</Link>

                </div>

                <div className='w-[20%] mx-5'>

                  <Link href='/finance/income/research-farm' className='btn btn-sm fw-bold btn-outline-dark flex align-items-center mb-2'>
                    <FaIdCardAlt className='mx-1 bg-inherit' />فارم تحقیقاتی پوهنځی زراعت</Link>

                  <Link href='/finance/income/bread' className='btn btn-sm fw-bold btn-outline-dark flex align-items-center mb-2'>
                    <FaBreadSlice className='mx-1 bg-inherit' />فروش نان قاق لیلیه</Link>

                  <Link href='/finance/income/bakery' className='btn btn-sm fw-bold btn-outline-dark flex align-items-center mb-2'>
                    <FaHouseUser className='mx-1 bg-inherit' />کرایه خبازی</Link>

                  <Link href='/finance/income/guesthouse' className='btn btn-sm fw-bold btn-outline-dark flex align-items-center mb-2'>
                    <FaHome className='mx-1 bg-inherit' />کرایه مهمانخانه آمریت خدمات</Link>

                  <Link href='/finance/income/ma-forms' className='btn btn-sm fw-bold btn-outline-dark flex align-items-center mb-2'>
                    <FaIdCard className='mx-1 bg-inherit' />فورم های ماستری</Link>

                  <Link href='/finance/income/papers' className='btn btn-sm fw-bold btn-outline-dark flex align-items-center mb-2'>
                    <FaPager className='mx-1 bg-inherit' />فروش ضایعات کاغذ آمریت نشرات</Link>

                  <Link href='/finance/income/animal-clinic' className='btn btn-sm fw-bold btn-outline-dark flex align-items-center mb-2'>
                    <FaCat className='mx-1 bg-inherit' />کلینک حیوانی پوهنځی وترنری</Link>

                  <Link href='/finance/income/kabul-bank' className='btn btn-sm fw-bold btn-outline-dark flex align-items-center mb-2'>
                    <FaHospital className='mx-1 bg-inherit' />کرایه نمایندگی کابل بانک</Link>

                  <Link href='/finance/income/bicycle' className='btn btn-sm fw-bold btn-outline-dark flex align-items-center mb-2'>
                    <FaBicycle className='mx-1 bg-inherit' />کرایه بایسکل نگهبانی</Link>


                  <Link href='/finance' className='btn btn-sm fw-bold btn-secondary flex align-items-center mb-2'>
                    <FaArrowAltCircleRight className='mx-1 bg-inherit' />بازگشت به صفحه اصلی</Link>
                </div>

                <div className="mx-3">
                  <Image src={"/images/finance/presentation.gif"} width={380} height={380} alt="Image" className="border rounded shadow-lg p-2" />
                </div>

              </section>
            </>
          ) : (
            <>
              <section className="container col-8 flex justify-center align-items-center">
                <div>
                  <p className="alert alert-info text-center">برای وارد شدن به پنل مدیریت ابتدا وارد حساب کاربری خود شوید!</p>
                  <Link href="finance/admin/auth" className="block mx-auto btn btn-outline-primary col-6">ورود به پنل مدیریت</Link>
                </div>
                <div>
                  <Image src={"/images/finance/register.svg"} alt='register' width={500} height={500} />
                </div>
              </section>
            </>
          )
      }


    </>
  )
}

export default Income;