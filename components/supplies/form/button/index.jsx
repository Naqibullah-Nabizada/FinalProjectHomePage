import { FaPlus, FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import Link from "next/link";
const Buttons = () => {
  return (
    <div className="container mx-auto flex m-4 justify-end gap-2">
      <button className="btn btn-outline-success btn-sm flex justify-center items-center">
        ثبت
        <FaPlus className="m-2 bg-inherit" />
      </button>
      <Link href="./supplies" className="btn btn-sm btn-outline-secondary flex justify-center items-center">
      بازگشت
        <FaArrowCircleLeft className="m-2 bg-inherit" />
      </Link>
    </div>
  );
};

export default Buttons;
