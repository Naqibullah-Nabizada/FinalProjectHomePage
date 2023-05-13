"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";

import { toast } from "react-toastify";

const Add = () => {

  const router = useRouter();

  const [MAFees, setMAFees] = useState({});

  const setMAFeesInfo = (e) => {
    setMAFees({
      ...MAFees,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/MAFees", MAFees);
      router.push("/income/ma-fees");
      toast('معلومات جدید با موفقیت اضافه شد',
        {
          hideProgressBar: true,
          autoClose: 5000,
          type: 'success',
          position: 'top-right'
        })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <header>
        <h3 className="my-4 text-center text-xl">
          فورم ثبت محلصین برنامه های ماستری
        </h3>
      </header>
      <hr />
      <main>
        <form onSubmit={submitForm}>
          <section className="w-[95%] flex justify-between flex-wrap mx-auto my-3">
            <div className="w-[32%]">
              <label className="form-label">نام تحویل دهنده</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-sm mb-3"
                placeholder="نام تحویل دهنده"
                onChange={setMAFeesInfo}
                required
                autoFocus
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">نام پدر تحویل دهنده</label>
              <input
                type="text"
                name="father_name"
                className="form-control form-control-sm mb-3"
                placeholder="نام پدر تحویل دهنده"
                onChange={setMAFeesInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">تعداد محصلین</label>
              <input
                type="number"
                name="count"
                className="form-control form-control-sm mb-3"
                placeholder="تعداد محصلین"
                onChange={setMAFeesInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">مرجع</label>
              <input
                type="text"
                name="reference"
                className="form-control form-control-sm mb-3"
                placeholder="مرجع"
                onChange={setMAFeesInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">فیس</label>
              <input
                type="number"
                name="cost"
                className="form-control form-control-sm mb-3"
                placeholder="فیس"
                onChange={setMAFeesInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">نمبر تعرفه</label>
              <input
                type="number"
                name="tariff_num"
                className="form-control form-control-sm mb-3"
                placeholder="نمبر تعرفه"
                onChange={setMAFeesInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">تاریخ تعرفه</label>
              <input
                type="date"
                name="tariff_date"
                className="form-control form-control-sm mb-3"
                onChange={setMAFeesInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">نمبر آویز</label>
              <input
                type="number"
                name="pendant_num"
                className="form-control form-control-sm mb-3"
                placeholder="نمبر تعرفه"
                onChange={setMAFeesInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">تاریخ آویز</label>
              <input
                type="date"
                name="pendant_date"
                className="form-control form-control-sm mb-3"
                onChange={setMAFeesInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">ملاحضات</label>
              <textarea
                rows="3"
                name="remark"
                className="form-control form-control-sm mb-3"
                placeholder="ملاحضات"
                onChange={setMAFeesInfo}
                required
              ></textarea>
            </div>
          </section>

          <div className="flex">
            <button type="submit" className="btn btn-outline-success flex mr-10 ml-5">
              ثبت
              <FaPlus className="mx-1 bg-inherit" />
            </button>

            <Link href="./income/ma-fees" className="btn btn-outline-secondary flex">
              <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default Add;
