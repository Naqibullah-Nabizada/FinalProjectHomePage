import Link from "next/link";
const index = () => {
    return (
        <header className="bg-slate-500 h-[14vh] flex justify-center rounded-b-md">
            <div className="container mx-auto">
                <nav>
                <ul className="flex pt-[30px] gap-2">
                    <li>
                        <Link className="bg-white text-gray-950 rounded-md px-6 py-2" href={"/"}>منو</Link>
                    </li>
                    <li>
                        <Link className="bg-white text-gray-950 rounded-md px-6 py-2" href={"/"}>ثبت کارمندان جدید</Link>
                    </li>
                    <li>
                        <Link className="bg-white text-gray-950 rounded-md px-6 py-2" href={"/"}>فورم کاریابی</Link>
                    </li>
                    <li>
                        <Link className="bg-white text-gray-950 rounded-md px-6 py-2" href={"/"}>ثبت استادان خارجی</Link>
                    </li>
                </ul>
                </nav>
            </div>
        </header>
    );
}

export default index;