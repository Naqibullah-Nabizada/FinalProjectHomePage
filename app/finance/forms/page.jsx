"use client"

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaArrowAltCircleRight, FaBuilding, FaIdCard, FaIdCardAlt } from "react-icons/fa";
import { AuthContext } from "../admin/context/context";

const Forms = () => {

  const { token } = useContext(AuthContext);

  return (
    <>
      <Navbar title={"معاونیت مالی و اداری"} />
      <hr />

      {
        token !== null ?
          (
            <section className='w-[95%] mx-auto flex my-4'>
              <div className='w-[40%] flex justify-center items-center'>

                <div className='w-[60%]'>

                  <Link href='/finance/forms/budget' className='btn btn-outline-dark flex mb-2'>
                    <FaBuilding className='mx-1 bg-inherit' />بودجه</Link>

                  {/* <Link href='/finance/forms/bab' className='btn btn-outline-dark flex mb-2'>
                  <FaBuilding className='mx-1 bg-inherit' />باب ها</Link> */}

                  <Link href='/finance/forms/fasel' className='btn btn-outline-dark flex mb-2'>
                    <FaIdCard className='mx-1 bg-inherit' />فصل ها</Link>

                  <Link href='/finance/forms/fasel-detail' className='btn btn-outline-dark flex mb-2'>
                    <FaIdCardAlt className='mx-1 bg-inherit' />جزئیات تمام فصل ها</Link>

                  <Link href='/finance' className='btn btn-outline-dark flex mb-2'>
                    <FaArrowAltCircleRight className='mx-1 bg-inherit' />بازگشت به صفحه اصلی</Link>
                </div>

              </div>

              <div className='w-[60%] mx-auto'>
                <Image src='/images/finance/1675576783.jpg' alt='background' className='img-thumbnail' width={700} height={100} />
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

export default Forms;