import Link from 'next/link';
import { FaArrowAltCircleRight, FaPlus } from 'react-icons/fa';

const Button = ({ hrefAddBtn, hrefBackBtn, text }) => {
  return (
    <>
      <div className="flex mx-5 my-4">
        <Link href={hrefBackBtn} className="btn btn-outline-secondary flex align-items-center"><FaArrowAltCircleRight className="bg-transparent mx-2" />بازگشت</Link>

        {
          hrefAddBtn != "" ? (
            <Link href={hrefAddBtn} className="btn btn-outline-primary flex align-items-center mx-4"><FaPlus className="bg-transparent mx-2" />{text}</Link>
          ) : null
        }
      </div>
    </>
  )
}

export default Button