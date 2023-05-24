"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";

import { toast } from "react-toastify";

const Add = () => {

  const router = useRouter();

  const [NocturnalFees, setNocturnalFees] = useState({});

  const setNocturnalFeesInfo = (e) => {
    setNocturnalFees({
      ...NocturnalFees,
      [e.target.name]: e.target.value,
    });
    console.log(NocturnalFees)
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/NMDTN", NocturnalFees);
      console.log(NocturnalFees)
      router.push("/finance/income/nocturnal-fees");
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
          فورم ثبت فیس محصلین برنامه های شبانه
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
                onChange={setNocturnalFeesInfo}
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
                onChange={setNocturnalFeesInfo}
                required
              />
            </div>

            {/* !! Hidden input */}
            <input type="hidden" name="type" value={"nocturnal_fees"} />

            <div className="w-[32%]">
              <label className="form-label">پوهنزی</label>
              <input
                type="text"
                name="faculty"
                className="form-control form-control-sm mb-3"
                placeholder="پوهنزی"
                onChange={setNocturnalFeesInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">دیپارتمنت</label>
              <input
                type="text"
                name="department"
                className="form-control form-control-sm mb-3"
                placeholder="دیپارتمنت"
                onChange={setNocturnalFeesInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">سال</label>
              <input
                type="date"
                name="year"
                className="form-control form-control-sm mb-3"
                onChange={setNocturnalFeesInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">سمستر</label>
              <input
                type="number"
                name="semester"
                className="form-control form-control-sm mb-3"
                placeholder="سمستر"
                onChange={setNocturnalFeesInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">داخله</label>
              <input
                type="number"
                name="interner_fees"
                className="form-control form-control-sm mb-3"
                placeholder="داخله"
                onChange={setNocturnalFeesInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">فیس</label>
              <input
                type="number"
                name="fees"
                className="form-control form-control-sm mb-3"
                placeholder="فیس"
                onChange={setNocturnalFeesInfo}
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
                onChange={setNocturnalFeesInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">تاریخ تعرفه</label>
              <input
                type="date"
                name="tariff_date"
                className="form-control form-control-sm mb-3"
                onChange={setNocturnalFeesInfo}
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
                onChange={setNocturnalFeesInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">تاریخ آویز</label>
              <input
                type="date"
                name="pendant_date"
                className="form-control form-control-sm mb-3"
                onChange={setNocturnalFeesInfo}
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
                onChange={setNocturnalFeesInfo}
                required
              ></textarea>
            </div>
            
          </section>

          <div className="flex">
            <button type="submit" className="btn btn-outline-success flex mr-10 ml-5">
              ثبت
              <FaPlus className="mx-1 bg-inherit" />
            </button>

            <Link href="./finance/income/nocturnal-fees" className="btn btn-outline-secondary flex">
              <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default Add;
