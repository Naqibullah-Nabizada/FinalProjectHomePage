"use client";

import Header from "@/components/Header";

import axios from "axios";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";



const IncomeReport = () => {

  const [incomeReport, setIncomeReport] = useState([]);

  const search = useSearchParams();
  const searchQuery = search ? search.get("search") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

const fetchData = async () => {
  try {
    const { data } = await axios.get(`http://localhost:5000/income/report/${encodedSearchQuery}`);
    setIncomeReport(data);

    let totalAmount = 0;

    // Iterate over each array within the main data array
    data.forEach((array) => {
      // Iterate over each object within the array
      array.forEach((item) => {
        // Check if the item has an "amount" property and add it to the total
        if (item.amount) {
          totalAmount += parseFloat(item.amount);
        }
      });
    });

    setIncomeReport(totalAmount);

  } catch (error) {
    console.log(error);
  }
};

  return (
    <>
      <header className="flex">
        <Header hrefAddBtn="/finance/reports/income" hrefBackBtn="/finance/reports" section={"report"} pageName="income" />
      </header>
      <hr />
      {/* <main className="w-[60%] mx-auto" id="main">
        <table className="table table-bordered table-sm table-striped">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>باب</th>
              <th>شرح</th>
              <th>تخصیص از</th>
              <th>کود تخصیص</th>
              <th>مقدار تخصیص</th>
              <th className="flex justify-center">ویرایش</th>
            </tr>
          </thead>
          <tbody>
            {
              parentBabs.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.desc}</td>
                  <td>{
                    item.kind_of === 'program' ? 'پروگرام' : 'تخصیصات'
                  }</td>
                  <td>{item.kind_of_budget}</td>
                  <td>{item.amount}</td>
                  <td className="flex justify-around">
                    <Link href={""} className="btn btn-sm btn-warning"><FaEdit className="bg-inherit" /></Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </main> */}
      <div className="d-flex justify-around bg-gray-200 p-1">
        <button onClick={print} className="btn btn-sm btn-dark">پرنت</button>
        <span>مجموع عواید: {incomeReport}</span>
      </div>
    </>
  )
}

export default IncomeReport;