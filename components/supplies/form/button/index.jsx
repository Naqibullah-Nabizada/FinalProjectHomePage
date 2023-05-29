import { FaPlus, FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import Link from "next/link";
const Buttons = () => {
  return (
    <div className="container mx-auto flex m-4 justify-end">
      <button className="btn btn-outline-success btn-sm flex mr-10 ml-5">
        ثبت
        <FaPlus className="m-2 bg-inherit" />
      </button>
      <Link href="./supplies" className="btn btn-sm btn-outline-secondary flex">
      بازگشت
        <FaArrowCircleLeft className="m-2 bg-inherit" />
      </Link>
    </div>
  );
};

export default Buttons;
