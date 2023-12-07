"use client";

import axios from "axios";
import Image from "next/image";
import { useState } from "react";

import { AuthContext } from "@/app/finance/admin/context/context";
import Link from "next/link";
import { useContext } from "react";
import { FaArrowCircleRight, FaSearch } from "react-icons/fa";
import { MdLockReset } from "react-icons/md";

import { useEffect } from 'react';

//! Shamsi Date
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import DatePicker, { DateObject } from "react-multi-date-picker";

//! Shamsi Date Converter 
import * as shamsi from "shamsi-date-converter";

const IncomeReport = () => {

  const { token, admin } = useContext(AuthContext);

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
      const { data } = await axios.get(`http://localhost:5000/api/income/search?startDate=${startDate}&endDate=${endDate}`);
      setSearchResults(data);
    } catch (error) {
      console.error(error);
    }
  }

  const { totalAmount } = searchResults.reduce((accumulator, item) => {
    return {
      totalAmount: parseFloat(accumulator.totalAmount) + parseFloat(item.amount)
    };
  }, { totalAmount: 0 });

  useEffect(() => {
    handleSearch();
  }, [startDate, endDate]);

  const Reset = () => {
    setStartDate("");
    setEndDate("");
  }

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

  return (
    <>
      <div className="flex justify-center w-[25%] mx-auto mt-2">

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
        token !== null && admin == 0 || admin == 2 ? (
          <section>
            <main className="w-[99.5%] mx-auto" id="main">
              <header className="flex justify-between my-2 w-[90%] mx-auto">
                <span className="text-center">راپور قطعیه عواید تحصیل شده ریاست پوهنتون کابل</span>
                <span>{date.toLocaleDateString("fa-AF", option)}</span>
              </header>
              <hr />
              <table className="table table-bordered table-sm table-striped">
                <caption className="caption-top text-center text-dark">{`راپور قطعیه عواید پوهنتون کابل`}</caption>
                <thead className="table-dark">
                  <tr>
                    <th>عواید</th>
                    <th>نام</th>
                    <th>نام پدر</th>
                    {/* <th>نمبر مکتوب</th> */}
                    <th>مرجع</th>
                    <th>سال</th>
                    <th>تعداد</th>
                    <th>مبلغ</th>
                    {/* <th>تفصیلات</th> */}
                    <th>نمبر تعرفه</th>
                    <th>تاریخ تعرفه</th>
                    <th>نمبر آویز</th>
                    <th>تاریخ آویز</th>
                    <th>ملاحظات</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    searchResults.flat().map((item, index) => (
                      <tr key={index}>

                        <td>
                          {
                            item.type == null
                              ? 'آی دی کارت'
                              : item.type == 'nocturnalFees'
                                ? 'فیس محصلین برنامه های شبانه'
                                : item.type === 'paper'
                                  ? 'فروش ضایعات کاغذ آمریت نشرات'
                                  : item.type === 'vehicle'
                                    ? 'کارت های وسایط نقلیه'
                                    : item.type === 'buildings'
                                      ? 'کرایه آپارتمان های استادان'
                                      : item.type === 'animalClinic'
                                        ? 'کلینیک حیوانی پوهنزی وترنری'
                                        : item.type === 'bakery'
                                          ? 'کرایه خبازی'
                                          : item.type === 'bicycle'
                                            ? 'کرایه بایسکل نگهبانی'
                                            : item.type === 'hostelBread'
                                              ? 'فروش نان قاق لیله'
                                              : item.type === 'enDeploma'
                                                ? 'دیپلوم زبان انگلیسی'
                                                : item.type === 'EnTranscript'
                                                  ? 'ترانسکریپت زبان انگلیسی'
                                                  : item.type === 'farmaticProducts'
                                                    ? 'محصولات تجزیه فارمسوتیکی'
                                                    : item.type === 'guaranteedRecursive'
                                                      ? 'تضمین و بازگشتی'
                                                      : item.type === 'guestHouse'
                                                        ? 'کرایه مهمانخانه آمریت خدمات'
                                                        : item.type === 'kabulBank'
                                                          ? 'کرایه نمایندگی کابل بانک'
                                                          : item.type === 'mafees'
                                                            ? 'فیس محصلین برنامه های ماستری'
                                                            : item.type === 'maforms'
                                                              ? 'فورم های ماستری'
                                                              : item.type === 'nationalNum'
                                                                ? 'جدول نمرات ملی'
                                                                :
                                                                'فارم تحقیقانی پوهنزی زراعت'


                          }
                        </td>

                        <td>{item.name ?? null}</td>
                        <td>{item.father_name ?? null}</td>
                        {/* <td>{item.maktub_num ?? null}</td> */}
                        <td>{item.reference ?? item.faculty}</td>
                        <td>{item.year ?? null}</td>
                        <td>{item.count ?? '1'}</td>
                        <td>{item.amount ?? item.fees ?? parseFloat(item.cost) * parseFloat(item.count)}</td>
                        {/* <td>{item.desc ?? null}</td> */}
                        <td>{item.tariff_num ?? null}</td>
                        <td>{shamsi.gregorianToJalali(item.tariff_date).join('-') ?? null}</td>
                        <td>{item.pendant_num ?? null}</td>
                        <td>{item.pendant_date != null ? shamsi.gregorianToJalali(item.pendant_date).join('-') : null}</td>
                        <td>{item.remark ?? null}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </main >
            {/* <div className="text-center my-2 bg-gray-200">مجموع: {totalAmount}</div> */}
            <div className="flex justify-around align-items-center bg-gray-200 p-1 mb-5">

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

export default IncomeReport