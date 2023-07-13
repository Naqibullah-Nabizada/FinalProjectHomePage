"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";

//! Shamsi Date
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import DatePicker, { DateObject } from "react-multi-date-picker";

import { toast } from "react-toastify";

const Add = () => {

  const router = useRouter();

  const [name, setName] = useState("");
  const [father_name, setFatherName] = useState("");
  const [count, setCount] = useState("");
  const [reference, setReference] = useState("");
  const [cost, setCost] = useState("");
  const [year, setYear] = useState();
  const [tariff_num, setTariff_num] = useState("");
  const [tariff_date, setTariff_date] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/IdCards", {
        name, father_name, cost, count, year, reference, tariff_date, tariff_num
      });
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
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setFatherName(e.target.value)}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">سال</label>
              <input
                type="number"
                name="year"
                className="form-control form-control-sm mb-3"
                placeholder="سال"
                onChange={(e) => setYear(e.target.value)}
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
                onChange={(e) => setCount(e.target.value)}
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
                onChange={(e) => setReference(e.target.value)}
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
                onChange={(e) => setCost(e.target.value)}
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
                onChange={(e) => setTariff_num(e.target.value)}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label d-block">تاریخ تعرفه</label>
              <DatePicker
                months={["حمل", "ثور", "جوزا", "سرطان", "اسد", "سنبله", "میزان", "عقرب", "قوس", "جدی", "دلو", "حوت"]}
                hideOnScroll
                hideWeekDays
                editable={false}
                placeholder="تاریخ تعرفه"
                currentDate={
                  new DateObject({ calendar: persian })
                }
                animations={[transition()]}
                calendar={persian}
                locale={persian_fa}
                inputClass="custom-input"
                value={tariff_date}
                onChange={setTariff_date}
                name="tariff_date"
                required
              />
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
