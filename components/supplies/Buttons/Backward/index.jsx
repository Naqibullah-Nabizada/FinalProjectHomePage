import Link from "next/link";
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
export default function Backward(props) {
  return <button className="btn text-white btn-dark">
    <Link href={props.to} className="flex gap-1 justify-center items-center">
        {props.title}
        <BsFillArrowLeftCircleFill/>
    </Link>
  </button>;
}
