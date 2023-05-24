"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";

import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker, { DateObject } from "react-multi-date-picker";


import { toast } from "react-toastify";

const Add = () => {

  const router = useRouter();

  const [IdCard, setIdCard] = useState({});

  const setIdCardInfo = (e) => {
    setIdCard({
      ...IdCard,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/IdCards", IdCard);
      router.push("/finance/income/id-cards");
      toast('معلومات جدید با موفقیت اضافه شد',
        {
          hideProgressBar: false,
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
          فورم ثبت عواید کارت ها
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
                onChange={setIdCardInfo}
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
                onChange={setIdCardInfo}
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
                onChange={setIdCardInfo}
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
                onChange={setIdCardInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">قیمت کارت</label>
              <input
                type="number"
                name="cost"
                className="form-control form-control-sm mb-3"
                placeholder="قیمت کارت"
                onChange={setIdCardInfo}
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
                onChange={setIdCardInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label d-block">تاریخ تعرفه</label>
              {/* <input
                type="date"
                name="tariff_date"
                className="form-control form-control-sm mb-3"
                onChange={setIdCardInfo}
                required
              /> */}
              {/* <Calendar


                calendar={persian}
                locale={persian_fa}

              /> */}
              <DatePicker
                months={[
                  "حمل",
                  "ثور",
                  "جوزا",
                  "سرطان",
                  "اسد",
                  "سنبله",
                  "میزان",
                  "عقرب",
                  "قوس",
                  "جدی",
                  "دلو",
                  "حوت"
                ]}
                hideOnScroll
                hideWeekDays 
                editable={false}
                placeholder="تاریخ تعرفه"
                currentDate={
                  new DateObject({ calendar: persian })
                }
                calendar={persian}
                locale={persian_fa}
                inputClass="custom-input"
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">نمبر آویز</label>
              <input
                type="number"
                name="pendant_num"
                className="form-control form-control-sm mb-3"
                placeholder="نمبر تعرفه"
                onChange={setIdCardInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">تاریخ آویز</label>
              <input
                type="date"
                name="pendant_date"
                className="form-control form-control-sm mb-3"
                onChange={setIdCardInfo}
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
                onChange={setIdCardInfo}
                required
              ></textarea>
            </div>
          </section>

          <div className="flex">
            <button type="submit" className="btn btn-outline-success flex mr-10 ml-5">
              ثبت
              <FaPlus className="mx-1 bg-inherit" />
            </button>

            <Link href="./finance/income/id-cards" className="btn btn-outline-secondary flex">
              <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default Add;
