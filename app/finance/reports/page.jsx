"use client"

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaArrowAltCircleRight, FaIdCard } from "react-icons/fa";
import { AuthContext } from "../admin/context/context";

const Report = () => {

  const { token, admin } = useContext(AuthContext);

  return (
    <>
      <Navbar title={"معاونیت مالی و اداری"} />
      <hr />

      {
        token !== null ?
          (
            <section className='w-[95%] mx-auto flex my-5'>
              <div className='w-[40%] flex justify-center items-center'>

                <div className='w-[60%] mx-5'>

                  {
                    token !== null && admin == 0 ? (
                      <>
                        <Link href='/finance/reports/income' className='btn btn-outline-dark flex align-items-center mb-2'>
                          <FaIdCard className='mx-1 bg-inherit' />گزارش بخش عواید</Link>

                        <Link href='/finance/reports/income/searchByDate' className='btn btn-outline-dark flex align-items-center mb-2'>
                          <FaIdCard className='mx-1 bg-inherit' />گزارش بخش عواید نظر به تاریخ</Link>
                      </>
                    ) : null
                  }

                  {
                    token !== null && admin == 1 ? (
                      <>
                        <Link href='/finance/reports/forms' className='btn btn-outline-dark flex align-items-center mb-2'>
                          <FaIdCard className='mx-1 bg-inherit' />گزارش بخش فورم های میم</Link>

                        <Link href='/finance/reports/forms/searchByDate' className='btn btn-outline-dark flex align-items-center mb-2'>
                          <FaIdCard className='mx-1 bg-inherit' />گزارش فورم های میم نظر به تاریخ</Link>
                      </>
                    ) : null
                  }

                  {
                    token !== null && admin == 2 ? (
                      <>
                        <Link href='/finance/reports/income' className='btn btn-outline-dark flex align-items-center mb-2'>
                          <FaIdCard className='mx-1 bg-inherit' />گزارش بخش عواید</Link>


                        <Link href='/finance/reports/income/searchByDate' className='btn btn-outline-dark flex align-items-center mb-2'>
                          <FaIdCard className='mx-1 bg-inherit' />گزارش بخش عواید نظر به تاریخ</Link>

                        <Link href='/finance/reports/forms' className='btn btn-outline-dark flex align-items-center mb-2'>
                          <FaIdCard className='mx-1 bg-inherit' />گزارش بخش فورم های میم</Link>

                        <Link href='/finance/reports/forms/searchByDate' className='btn btn-outline-dark flex align-items-center mb-2'>
                          <FaIdCard className='mx-1 bg-inherit' />گزارش فورم های میم نظر به تاریخ</Link>
                      </>
                    ) : null
                  }

                  <Link href='/finance' className='btn btn-outline-dark flex align-items-center mb-2'>
                    <FaArrowAltCircleRight className='mx-1 bg-inherit' />بازگشت به صفحه اصلی</Link>

                </div>

              </div>
              <div className='w-[60%] mx-auto'>
                <Image src='/images/finance/undraw_growth_analytics_re_pyxf.svg' alt='background' className='img-thumbnail shadow-lg' width={700} height={700} />
              </div>
            </section>
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

export default Report;