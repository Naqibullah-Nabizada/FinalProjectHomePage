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
  const [type, setType] = useState("NationalNum");
  const [faculty, setFaculty] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [internel_fees, setInternelFees] = useState("");
  const [fees, setFees] = useState("");
  const [tariff_num, setTariffNum] = useState("");
  const [tariff_date, setTariffDate] = useState("");
  const [pendant_num, setPendantNum] = useState(null);
  const [pendant_date, setPendantDate] = useState(null);
  const [remark, setRemark] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/NMDTN", {
        name, father_name, type, faculty, department, year, semester, internel_fees, fees, tariff_date, tariff_num, pendant_date, pendant_num, remark
      });
      router.push("/finance/income/national-num-table");
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

  return (
    <>
      <header>
        <h3 className="my-4 text-center text-xl">
          فورم ثبت جدول نمرات ملی
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
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">پوهنځی</label>
              <input
                type="text"
                name="faculty"
                className="form-control form-control-sm mb-3"
                placeholder="پوهنځی"
                onChange={(e) => setFaculty(e.target.value)}
                minLength={3}
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
                onChange={(e) => setDepartment(e.target.value)}
                minLength={3}
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
                minLength={4}
                maxLength={4}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">سمستر</label>
              <select name="semester" className="form-control form-control-sm mb-3" onChange={(e) => setSemester(e.target.value)} >
                <option value={"1"}>اول</option>
                <option value={"2"}>دوم</option>
                <option value={"3"}>سوم</option>
                <option value={"4"}>چهارم</option>
                <option value={"5"}>پنجم</option>
                <option value={"6"}>ششم</option>
                <option value={"7"}>هفتم</option>
                <option value={"8"}>هشتم</option>
                <option value={"9"}>نهم</option>
                <option value={"10"}>دهم</option>
              </select>
            </div>

            <div className="w-[32%]">
              <label className="form-label">داخله</label>
              <input
                type="number"
                name="interner_fees"
                className="form-control form-control-sm mb-3"
                placeholder="داخله"
                onChange={(e) => setInternelFees(e.target.value)}
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
                onChange={(e) => setFees(e.target.value)}
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
                onChange={(e) => setTariffNum(e.target.value)}
                required
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
                value={tariff_date}
                onChange={setTariffDate}
                name="tariff_date"
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
                onChange={(e) => setPendantNum(e.target.value)}
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">تاریخ آویز</label>
              <DatePicker
                months={["حمل", "ثور", "جوزا", "سرطان", "اسد", "سنبله", "میزان", "عقرب", "قوس", "جدی", "دلو", "حوت"]}
                hideOnScroll
                hideWeekDays
                editable={false}
                placeholder="تاریخ آویز"
                currentDate={
                  new DateObject({ calendar: persian })
                }
                animations={[transition()]}
                calendar={persian}
                locale={persian_fa}
                inputClass="custom-input"
                value={pendant_date}
                onChange={setPendantDate}
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
              ></textarea>
            </div>

          </section>

          <div className="flex">
            <button type="submit" className="btn btn-outline-success flex mr-10 ml-5">
              ثبت
              <FaPlus className="mx-1 bg-inherit" />
            </button>

            <Link href="./finance/income/national-num-table" className="btn btn-outline-secondary flex">
              <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default Add;
