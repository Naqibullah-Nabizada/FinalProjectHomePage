import Link from "next/link";
import {
  FaArrowAltCircleRight,
  FaArchive,
} from "react-icons/fa";
import {
  MdOutlineDeveloperBoard
} from "react-icons/md";
import {
  IoIosPeople
} from "react-icons/io";

const Hero = () => {
  return (
    <section className="w-[95%] mx-auto flex my-4">
      <div className="w-[40%]">
        <div className="w-[60%] mt-36">
          <Link
            href="/hr/recruitment"
            className="btn btn-outline-dark flex mb-2"
          >
            <IoIosPeople className="mx-1 bg-inherit" size={30} />
            بخش استخدام پوهنتون کابل
          </Link>

          <Link href="/hr/archive" className="btn btn-outline-dark flex mb-2">
            <FaArchive className="mx-1 bg-inherit" size={25} />
            بخش سوانح پوهنتون کابل
          </Link>

          <Link href="/hr/development" className="btn btn-outline-dark flex mb-2">
            <MdOutlineDeveloperBoard className="mx-1 bg-inherit" size={30} />
            بخش آموزش و انکشاف پوهنتون کابل
          </Link>

          <Link href="/" className="btn btn-outline-dark flex mb-2">
            <FaArrowAltCircleRight className="mx-1 bg-inherit" size={25} />
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
