// import Image from "next/image";
import Link from "next/link";
import { FaArrowAltCircleRight, FaCar, FaFileCsv, FaIdCardAlt } from "react-icons/fa";
import {BsPersonPlus} from "react-icons/bs";
import {GiArchiveRegister} from "react-icons/gi";
const Archive = () => {
    return (
            <section className='w-[95%] mx-auto flex my-4'>
              <div className='w-[40%]'>
                  <Link href='/hr' className='btn btn-outline-dark flex mb-2'>
                    <BsPersonPlus className='mx-1 bg-inherit' size={25} />archive part</Link>
    
                  <Link href='/hr' className='btn btn-outline-dark flex mb-2'>
                    <FaArrowAltCircleRight className='mx-1 bg-inherit' />بازگشت به صفحه اصلی</Link>
              </div>
            </section>
          );
        }

export default Archive;