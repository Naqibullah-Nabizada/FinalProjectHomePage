import Link from 'next/link';
import { FaArrowAltCircleRight, FaPlus } from 'react-icons/fa';

const Button = ({ href, text }) => {
  return (
    <>
      <div className="flex mx-5 my-4">
        <Link href='/finance/income' className="btn btn-outline-secondary flex w-[50%]"><FaArrowAltCircleRight className="bg-transparent mx-2" />بازگشت</Link>
        <Link href={href} className="btn btn-outline-primary flex w-[70%] mx-4"><FaPlus className="bg-transparent mx-2" />{text}</Link>
      </div>
    </>
  )
}

export default Button