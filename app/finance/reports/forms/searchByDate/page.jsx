"use client";

import axios from "axios";

import { useEffect, useState } from "react";

//! Shamsi Date
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import DatePicker, { DateObject } from "react-multi-date-picker";

import Image from "next/image";
import { MdLockReset } from "react-icons/md";

import { AuthContext } from "@/app/finance/admin/context/context";
import moment from "jalali-moment";
import Link from "next/link";
import { useContext } from "react";
import { FaArrowCircleRight, FaSearch } from "react-icons/fa";

const FormsReport = () => {

  const { token, admin } = useContext(AuthContext);

  const date = new Date();
  const option = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }

  const print = () => {
    window.print();
  }


  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (value) => {
    setStartDate(value);
  };

  const handleEndDateChange = (value) => {
    setEndDate(value);
  };

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/search?startDate=${startDate}&endDate=${endDate}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const { totalAfterPay, totalBeforPay } = searchResults.reduce((accumulator, item) => {
    return {
      totalAfterPay: parseFloat(accumulator.totalAfterPay) + parseFloat(item.after_pay),
      totalBeforPay: parseFloat(accumulator.totalBeforPay) + parseFloat(item.befor_pay),
    };
  }, { totalAfterPay: 0, totalBeforPay: 0 });

  const totalOfBoth = totalAfterPay + totalBeforPay;

  useEffect(() => {
    handleSearch();
  }, [startDate, endDate]);

  const Reset = () => {
    setStartDate("")
    setEndDate("");
  }

  return (
    <>

      <div className="flex justify-center w-[100%] mx-auto mt-2">

        <div className="mx-[1rem]">
          <DatePicker
            months={["حمل", "ثور", "جوزا", "سرطان", "اسد", "سنبله", "میزان", "عقرب", "قوس", "جدی", "دلو", "حوت"]}
            hideOnScroll
            hideWeekDays
            editable={false}
            placeholder="تاریخ شروع"
            currentDate={
              new DateObject({ calendar: persian })
            }
            animations={[transition()]}
            calendar={persian}
            locale={persian_fa}
            inputClass="startDate"
            value={startDate}
            onChange={handleStartDateChange}
            name="startDate"
          />
        </div>

        <div>
          <DatePicker
            months={["حمل", "ثور", "جوزا", "سرطان", "اسد", "سنبله", "میزان", "عقرب", "قوس", "جدی", "دلو", "حوت"]}
            hideOnScroll
            hideWeekDays
            editable={false}
            placeholder="تاریخ ختم"
            currentDate={
              new DateObject({ calendar: persian })
            }
            animations={[transition()]}
            calendar={persian}
            locale={persian_fa}
            inputClass="endDate"
            value={endDate}
            onChange={handleEndDateChange}
            name="endDate"
          />
        </div>

        <button className="btn btn-sm btn-outline-success mx-2" onClick={handleSearch}>
          <FaSearch />
        </button>
        <button type="reset" className="border rounded p-2 bg-secondary text-white" onClick={() => Reset()}><MdLockReset /></button>

      </div>

      {
        token !== null && admin == 1 || admin == 2 ? (
          <section>
            <main className="w-[80%] mx-auto" id="main">
              <header className="flex justify-between my-3">
                <span className="text-center">گزارش تخصیصات و مصارفات پوهنتون کابل</span>
                <span>{date.toLocaleDateString("fa-AF", option)}</span>
              </header>
              <hr />
              <table className="table table-bordered table-sm table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>سال</th>
                    <th>توضیحات</th>
                    <th>فصل</th>
                    <th>تادیه بعدی</th>
                    <th>تادیه پیشکی</th>
                    <th>مجموع</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    searchResults.map((item, index) => (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{moment(item.date).locale("fa").format("jYYYY")}</td>
                        <td>{item.fasel.desc}</td>
                        <td title={item.fasel.id}>{item.fasel.code || null}</td>
                        <td>{item.after_pay || 0} افغانی</td>
                        <td>{item.befor_pay || 0} افغانی</td>
                        <td>{parseFloat(item.befor_pay) + parseFloat(item.after_pay)} افغانی</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              <div className="d-flex justify-around bg-gray-300 p-1 mb-3">
                <span>مجموع تادیه بعدی: {totalAfterPay} افغانی</span>
                <span>مجموع تادیه پیشکی: {totalBeforPay} افغانی</span>
                <span>مجموع کلی: {totalOfBoth} افغانی</span>
              </div>
            </main>
            <div className=" w-[100%] d-flex justify-around bg-gray-200 p-1 mb-5">
              <Link href="./finance/reports" className="btn btn-sm btn-outline-secondary flex">
                <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
              </Link>
              <button onClick={print} className="btn btn-sm btn-dark">پرنت</button>
            </div>

          </section>
        ) : (
          <>
            <section className="container col-8 flex justify-center align-items-center">
              <div>
                <p className="alert alert-info text-center">برای وارد شدن به پنل مدیریت ابتدا وارد حساب کاربری خود شوید!</p>
                <Link href="finance/admin/auth" className="block mx-auto btn btn-outline-primary col-6">ورود به پنل مدیریت</Link>
              </div>
              <div>
                <Image src={"/images/finance/register.svg"} alt='register' width={500} height={500} />
              </div>
            </section>
          </>
        )
      }

    </>
  )
}

export default FormsReport;
