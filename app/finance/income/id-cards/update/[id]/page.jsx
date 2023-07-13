"use client";

import axios from "axios";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";

//! Shamsi date converter
import * as shamsi from "shamsi-date-converter";

//! Shamsi Date
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import DatePicker, { DateObject } from "react-multi-date-picker";

import { toast } from "react-toastify";

const Update = () => {

  const router = useRouter();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [father_name, setFatherName] = useState("");
  const [count, setCount] = useState("");
  const [reference, setReference] = useState("");
  const [cost, setCost] = useState("");
  const [year, setYear] = useState();
  const [tariff_num, setTariff_num] = useState("");
  const [tariff_date, setTariff_date] = useState("");
  const [pendant_num, setPendantNum] = useState(null);
  const [pendant_date, setPendantDate] = useState(null);
  const [remark, setRemark] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      router.push("/finance/income/id-cards");
      await axios.put(`http://localhost:5000/IdCard/${id}`, {
        name, father_name, cost, count, year, reference, tariff_date, tariff_num, pendant_date, pendant_num, remark
      });
      toast('معلومات  با موفقیت ویرایش شد',
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

  useEffect(() => {
    getIdCard();
  }, []);

  const getIdCard = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/IdCard/${id}`);
      setName(data.name);
      setFatherName(data.father_name);
      setCount(data.count);
      setCost(data.cost);
      setReference(data.reference);
      setYear(data.year);
      setTariff_num(data.tariff_num);
      setTariff_date(data.tariff_date);
      setPendantNum(data.pendant_num);
      setPendantDate(data.pendant_date);
      setRemark(data.remark);
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
                value={name}
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
                value={father_name}
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
                value={year}
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
                value={count}
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
                value={reference}
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
                value={cost}
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
                value={tariff_num}
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
                value={shamsi.gregorianToJalali(tariff_date).join("-")}
                onChange={setTariff_date}
                name="tariff_date"
                required
              />
            </div>

            {
              pendant_num == null ? null :
                <>
                  <div className="w-[32%]">
                    <label className="form-label">نمبر آویز</label>
                    <input
                      type="number"
                      name="pendant_num"
                      className="form-control form-control-sm mb-3"
                      placeholder="نمبر آویز"
                      value={pendant_num}
                      onChange={(e) => setPendantNum(e.target.value)}
                    />
                  </div>

                  <div className="w-[32%]">
                    <label className="form-label">تاریخ آویز</label>
                    <DatePicker
                      months={["حمل", "ثور", "جوزا", "سرطان", "اسد", "سنبله", "میزان", "عقرب", "قوس", "جدی", "دلو", "حوت"]}
                      hideOnScroll
                      hideWeekDays
                      editable={true}
                      placeholder="تاریخ آویز"
                      currentDate={
                        new DateObject({ calendar: persian })
                      }
                      animations={[transition()]}
                      calendar={persian}
                      locale={persian_fa}
                      inputClass="custom-input"
                      onChange={setPendantDate}
                      value={shamsi.gregorianToJalali(pendant_date).join("-")}
                      name="tariff_date"
                    />
                  </div>

                  <div className="w-[32%]">
                    <label className="form-label">ملاحضات</label>
                    <textarea
                      rows="3"
                      name="remark"
                      className="form-control form-control-sm mb-3"
                      placeholder="ملاحضات"
                      onChange={(e) => setRemark(e.target.value)}
                      value={remark}
                    ></textarea>
                  </div>
                </>
            }

          </section>

          <div className="flex">
            <button type="submit" className="btn btn-warning flex mr-10 ml-5">
              ویرایش
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

export default Update;
