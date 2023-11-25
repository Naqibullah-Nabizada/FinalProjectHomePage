"use client"

import { AuthContext } from "@/app/finance/admin/context/context";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaArrowAltCircleRight, FaIdCardAlt, FaMoneyBill, FaMoneyCheckAlt, FaReceipt, FaUser } from "react-icons/fa";

const Hero = () => {

  const { Logout, admin } = useContext(AuthContext)

  return (
    <section className='w-[95%] flex justify-center align-items-center  mx-auto flex my-5'>
      <div className='w-[40%]'>

        <div className='w-[60%] mr-[5rem]'>

          {
            admin == 0 ? (
              <Link href='./finance/income' className='btn btn-outline-dark flex align-items-center mb-2'>
                <FaMoneyBill className='mx-1 bg-inherit' />بخش عواید پوهنتون کابل</Link>
            ) : null
          }

          {
            admin == 1 ? (
              <Link href='./finance/forms' className='btn btn-outline-dark flex align-items-center mb-2'>
                <FaIdCardAlt className='mx-1 bg-inherit' />بخش فورم های میم پوهنتون کابل</Link>
            ) : null
          }

          {
            admin == 2 ? (
              <>
                <Link href='./finance/income' className='btn btn-outline-dark flex align-items-center mb-2'>
                  <FaMoneyCheckAlt className='mx-1 bg-inherit' />بخش عواید پوهنتون کابل</Link>

                <Link href='./finance/forms' className='btn btn-outline-dark flex align-items-center mb-2'>
                  <FaIdCardAlt className='mx-1 bg-inherit' />بخش فورم های میم پوهنتون کابل</Link>

                <Link href='./finance/admin/users' className='btn btn-outline-dark align-items-center flex mb-2'>
                  <FaUser className='mx-1 bg-inherit' />بخش کاربران</Link>
              </>
            ) : null
          }

          <Link href='./finance/reports' className='btn btn-outline-dark align-items-center flex mb-2'>
            <FaReceipt className='mx-1 bg-inherit' />بخش گزارشات</Link>

          <a href="/" onClick={Logout} className="btn btn-sm btn-outline-danger flex col-3 align-items-center"><FaArrowAltCircleRight className='mx-1 bg-inherit' />خروج</a>

        </div>
      </div>
      <div className='w-[60%] mx-auto'>
        <Image src='/images/finance/undraw_finance_re_gnv2.svg' alt='background' className='img-thumbnail shadow-lg' width={700} height={700} />
      </div>
    </section>
  )
}

export default Hero;