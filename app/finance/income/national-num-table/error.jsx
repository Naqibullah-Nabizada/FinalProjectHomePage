"use client";

import Link from "next/link";

const Error = () => {
  return (
    <div className="text-center mt-[8rem] text-red-700">
      <h1 className="text-6xl">خطا!</h1>
      <h2 className="text-3xl mt-3 mb-5">مشکلی پیش آمده، دوباره کوشش کنید.</h2>
      <Link href="/" className="btn btn-outline-primary">برگشت به خانه</Link>
    </div>
  )
}

export default Error;