"use client";

import axios from "axios";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Image from "next/image";

import Header from "@/components/Header";

import moment from "jalali-moment";
import Link from "next/link";
import { useContext } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { AuthContext } from "../../admin/context/context";

const FormsReport = () => {

  const { token, admin } = useContext(AuthContext);

  const [formYearlyReport, setformYearlyReport] = useState([]);

  const search = useSearchParams();
  const searchQuery = search ? search.get("search") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");

  const date = new Date();
  const option = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }

  useEffect(() => {
    fetchYearlyReprot();
  }, [searchQuery]);

  const fetchYearlyReprot = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/forms/yearly-report/${encodedSearchQuery}`);
      setformYearlyReport(data);
    } catch (error) {
      console.log(error)
    }
  }

  const { totalAfterPay, totalBeforPay } = formYearlyReport.reduce((accumulator, item) => {
    return {
      totalAfterPay: parseFloat(accumulator.totalAfterPay) + parseFloat(item.after_pay),
      totalBeforPay: parseFloat(accumulator.totalBeforPay) + parseFloat(item.befor_pay),
    };
  }, { totalAfterPay: 0, totalBeforPay: 0 });

  const totalOfBoth = totalAfterPay - totalBeforPay;

  const print = () => {
    window.print();
  }

  return (
    <>
      <div className="flex justify-center">
        <Header hrefAddBtn={admin == 1 ? ("/finance/reports") : ""} hrefBackBtn="/finance/reports" section={"reports"} pageName="forms" />
      </div>
      <hr />

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
                    formYearlyReport.map((item, index) => (
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
