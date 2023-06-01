// import Image from "next/image";
import Link from "next/link";
import { FaArrowAltCircleRight, FaCar, FaFileCsv, FaIdCardAlt } from "react-icons/fa";
import {BsPersonPlus} from "react-icons/bs";
import {GiArchiveRegister} from "react-icons/gi";
const Development = () => {
    return (
            <section className='w-[95%] mx-auto flex my-4'>
              <div className='w-[40%]'>
                <div className='w-[60%] mt-36'>
				
                  <Link href='/hr/development/train' className='btn btn-outline-dark flex mb-2'>
                    <BsPersonPlus className='mx-1 bg-inherit' size={25} />ثبت دوره آموزشی</Link>
                  
				<Link href='/hr/recruitment/add_employee' className='btn btn-outline-dark flex mb-2'>
                    <BsPersonPlus className='mx-1 bg-inherit' size={25} />other part</Link>
    
                  <Link href='/hr' className='btn btn-outline-dark flex mb-2'>
                    <FaArrowAltCircleRight className='mx-1 bg-inherit' />بازگشت به صفحه اصلی</Link>
                </div>
              </div>
            </section>
          );
        }

export default Development;