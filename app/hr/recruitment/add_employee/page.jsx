"use client"

import axios from "axios";
import Link from "next/link";
// import { useState } from "react";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";

import { toast } from "react-toastify";

// import { useRouter } from 'next/router';
const AddEmployee = () => {

  // const [MAForm, setMAForm] = useState({});

  // const setMAFormInfo = (e) => {
  //   setMAForm({
  //     ...MAForm,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const submitForm = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:5000/MAForms", MAForm);
  //     // router.push("/income/ma_forms");
  //     toast('معلومات جدید با موفقیت اضافه شد',
  //       {
  //         hideProgressBar: true,
  //         autoClose: 5000,
  //         type: 'success',
  //         position: 'top-right'
  //       })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  return (
    <>
      <main>
        <form >
          <section className="w-[95%] flex justify-between flex-wrap mx-auto my-3">
            <div  className="w-[95%] flex justify-center items-center">
            <h3>شهرت کارمند</h3>
            <span className="w-1 h-1 "></span>
            </div>
            <div className="w-[32%]">
              <label className="form-label">نام</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-sm mb-3"
                placeholder="نام"
                // onChange={setMAFormInfo}
                autoFocus
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">نام پدر</label>
              <input
                type="text"
                name="fname"
                className="form-control form-control-sm mb-3"
                placeholder="نام پدر"
                // onChange={setMAFormInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">تخلص</label>
              <input
                type="text"
                name="lastname"
                className="form-control form-control-sm mb-3"
                // onChange={setMAFormInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">نام پدر کلان</label>
              <input
                type="text"
                name="grandfather"
                className="form-control form-control-sm mb-3"
                placeholder="نام پدر کلان"
                // onChange={setMAFormInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">سال</label>
              <input
                type="date"
                name="year"
                className="form-control form-control-sm mb-3"
                // onChange={setMAFormInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">مبلغ</label>
              <input
                type="number"
                name="amount"
                className="form-control form-control-sm mb-3"
                placeholder="مبلغ"
                // onChange={setMAFormInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">تفصیلات</label>
              <textarea
                rows="3"
                name="desc"
                className="form-control form-control-sm mb-3"
                placeholder="تفصیلات"
                // onChange={setMAFormInfo}
                required
              ></textarea>
            </div>

            <div className="w-[32%]">
              <label className="form-label">نمبر تعرفه</label>
              <input
                type="number"
                name="tariff_num"
                className="form-control form-control-sm mb-3"
                placeholder="نمبر تعرفه"
                // onChange={setMAFormInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">تاریخ تعرفه</label>
              <input
                type="date"
                name="tariff_date"
                className="form-control form-control-sm mb-3"
                // onChange={setMAFormInfo}
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
                // onChange={setMAFormInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">تاریخ آویز</label>
              <input
                type="date"
                name="pendant_date"
                className="form-control form-control-sm mb-3"
                // onChange={setMAFormInfo}
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
                // onChange={setMAFormInfo}
                required
              ></textarea>
            </div>
          </section>

          <div className="flex">
            <button
              type="submit"
              className="btn btn-outline-success flex mr-10 ml-5"
            >
              ثبت
              <FaPlus className="mx-1 bg-inherit" />
            </button>
            <Link href="./hr/recruitment" className="btn btn-outline-secondary flex">
              <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default AddEmployee;
