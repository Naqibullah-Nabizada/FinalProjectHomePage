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
  const [type, setType] = useState("paper");
  const [maktub_num, setMaktub_num] = useState("");
  const [reference, setReference] = useState("");
  const [year, setYear] = useState("");
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [tariff_num, setTariffNum] = useState("");
  const [tariff_date, setTariffDate] = useState("");
  const [pendant_num, setPendantNum] = useState(null);
  const [pendant_date, setPendantDate] = useState(null);
  const [remark, setRemark] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      router.push("/finance/income/papers");
      await axios.put(`http://localhost:5000/TwelveSection/paper/update/${id}`, {
        name, father_name, type, maktub_num, year, reference, amount, desc, tariff_date, tariff_num, pendant_num, pendant_date, remark
      });
      toast('معلومات جدید با موفقیت اضافه شد',
        {
          hideProgressBar: false,
          autoClose: 5000,
          type: 'success',
          position: 'top-right'
        });
    } catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    getSingle();
  }, []);

  const getSingle = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/TwelveSection/paper/${id}`);
      setName(data.name);
      setFatherName(data.father_name);
      setMaktub_num(data.maktub_num);
      setReference(data.reference);
      setAmount(data.amount);
      setDesc(data.desc);
      setYear(data.year);
      setTariffNum(data.tariff_num);
      setTariffDate(data.tariff_date);
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
          فورم ویرایش فروش ضایعات کاغذ نشرات
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
                minLength={3}
                autoFocus
                value={name}
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
                minLength={3}
                required
                value={father_name}
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">نمبر مکتوب</label>
              <input
                type="number"
                name="maktub_num"
                className="form-control form-control-sm mb-3"
                placeholder="نمبر مکتوب"
                onChange={(e) => setMaktub_num(e.target.value)}
                required
                value={maktub_num}
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
                minLength={3}
                required
                value={reference}
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
                minLength={4}
                maxLength={4}
                required
                value={year}
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">مبلغ</label>
              <input
                type="number"
                name="amount"
                className="form-control form-control-sm mb-3"
                placeholder="مبلغ"
                onChange={(e) => setAmount(e.target.value)}
                required
                value={amount}
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">تفصیلات</label>
              <textarea type="text"
                name="reference"
                className="form-control form-control-sm mb-3"
                placeholder="تفصیلات"
                onChange={(e) => setDesc(e.target.value)}
                minLength={3}
                required
                value={desc}>
              </textarea>
            </div>

            <div className="w-[32%]">
              <label className="form-label">نمبر تعرفه</label>
              <input
                type="number"
                name="tariff_num"
                className="form-control form-control-sm mb-3"
                placeholder="نمبر تعرفه"
                onChange={(e) => setTariffNum(e.target.value)}
                required
                value={tariff_num}
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">تاریخ تعرفه</label>
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
                onChange={setTariffDate}
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
                    <label className="form-label">ملاحظات</label>
                    <textarea
                      rows="3"
                      name="remark"
                      className="form-control form-control-sm mb-3"
                      placeholder="ملاحظات"
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

            <Link href="./finance/income/papers" className="btn btn-outline-secondary flex">
              <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default Update;
