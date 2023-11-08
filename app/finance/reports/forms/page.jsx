"use client";


import axios from "axios";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

const FormsReport = () => {

  const [formReport, setformReport] = useState([]);
  const [formYearlyReport, setformYearlyReport] = useState([]);

  const search = useSearchParams();
  const searchQuery = search ? search.get("search") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");

  useEffect(() => {
    fetchData();
    fetchYearlyReprot();
  }, [searchQuery]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/forms/report/${encodedSearchQuery}`);
      setformReport(data);

      let total_main_amount = 0;

      data.forEach((item) => {
        if (item.amount) {
          total_main_amount += parseFloat(item.main_amount);
        }
      });

      setformReport(total_main_amount);

    } catch (error) {
      console.log(error);
    }
  };

  const fetchYearlyReprot = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/forms/yearly-report/${encodedSearchQuery}`);
      setformYearlyReport(data);
    } catch (error) {
      console.log(error)
    }
  }

  const print = () => {
    window.print();
  }

  return (
    <>
      <main className="w-[80%] mx-auto" id="main">
        <header>
          <h2 className="my-3 text-center">گزارش عواید پوهنتون کابل</h2>
        </header>
        <hr />
        <table className="table table-bordered table-sm table-striped">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>فصل</th>
              <th>شرح</th>
              <th>تادیه بعدی</th>
              <th>تادیه پیشکی</th>
              {/* <th>باب</th>
              <th>کود فعالیت</th>
              <th>کود کتگوری</th> */}
              <th>ماه</th>
              <th>حواله تخصیصات</th>
              <th>حواله تخصیصات تعهد شده</th>
            </tr>
          </thead>
          <tbody>
            {
              formYearlyReport.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.fasel.code || null}</td>
                  <td>{item.desc}</td>
                  <td>{item.befor_pay || 0}</td>
                  <td>{item.after_pay || 0}</td>
                  {/* <td></td>
                  <td></td>
                  <td></td> */}
                  <td>{item.income}</td>
                  <td>{item.commitment}</td>
                  <td>{item.commitment_transfer}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </main>
      <div className=" w-[100%] d-flex justify-around bg-gray-200 p-1 mb-5">
        <Link href="./finance/reports" className="btn btn-sm btn-outline-secondary flex">
          <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
        </Link>
        <button onClick={print} className="btn btn-sm btn-dark">پرنت</button>
      </div>
    </>
  )
}

export default FormsReport;