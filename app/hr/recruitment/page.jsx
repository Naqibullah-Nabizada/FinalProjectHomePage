import Header from "@/components/hr_components/header";
import Image from "next/image";
import Link from "next/link";
import { FaArrowAltCircleRight, FaCar, FaFileCsv, FaIdCardAlt } from "react-icons/fa";
import {BsPersonPlus} from "react-icons/bs";
import {GiArchiveRegister} from "react-icons/gi";
const Recruitment = () => {
    return (
            <section className='w-[95%] mx-auto flex my-4'>
              <div className='w-[40%]'>
                <div className='w-[60%] mt-36'>
                  <Link href='/hr/recruitment/add_employee' className='btn btn-outline-dark flex mb-2'>
                    <BsPersonPlus className='mx-1 bg-inherit' size={25} />ثبت کارمند جدید</Link>
        
                  <Link href='/hr/recruitment/form_karyabi' className='btn btn-outline-dark flex mb-2'>
                    <GiArchiveRegister className='mx-1 bg-inherit' size={25} />فورم کاریابی</Link>
        
                  <Link href='' className='btn btn-outline-dark flex mb-2'>
                    <FaCar className='mx-1 bg-inherit' />بخش</Link>
        
                  <Link href='/hr/recruitment' className='btn btn-outline-dark flex mb-2'>
                    <FaArrowAltCircleRight className='mx-1 bg-inherit' />بازگشت به صفحه اصلی</Link>
                </div>
              </div>
            </section>
          );
        }

export default Recruitment;