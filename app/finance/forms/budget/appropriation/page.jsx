"use client";

import Header from "@/components/Header";

import axios from "axios";
import Link from "next/link";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { FaEdit } from "react-icons/fa";

const Appropriation = () => {

  const [appropriations, setAppropriation] = useState([]);

  const search = useSearchParams();
  const searchQuery = search ? search.get("search") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const fetchData = async () => {
    const { data } = await axios.get(`http://localhost:5000/Appropriations/${encodedSearchQuery}`);
    setAppropriation(data);
  }

  const { totalBudget } = appropriations.reduce((accumulator, item) => {
    return {
      totalBudget: accumulator.totalBudget + (item.amount)
    };
  }, { totalBudget: 0 });

  return (
    <>
      <header className="flex">
        <Header hrefAddBtn="/finance/forms/budget/appropriation/add" hrefBackBtn="/finance/forms/budget" pageName="forms" />
      </header>
      <hr />
      <main className="w-[60%] mx-auto" id="main">
        <table className="table table-bordered table-sm table-striped">
          <thead className="table-dark">
            <tr>
              <th>شماره</th>
              <th>کد</th>
              <th>نام دری</th>
              <th>نام پشتو</th>
              <th>نام انگلیسی</th>
              <th>مقدار بودجه</th>
              <th className="flex justify-center">ویرایش</th>
            </tr>
          </thead>
          <tbody>
            {
              appropriations.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.code}</td>
                  <td>{item.dari_name}</td>
                  <td>{item.pashto_name}</td>
                  <td>{item.eng_name}</td>
                  <td>{item.amount}</td>
                  <td className="flex justify-around">
                    <Link href={""} className="btn btn-sm btn-warning"><FaEdit className="bg-inherit" /></Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </main>
      <div className="d-flex justify-around bg-gray-200 p-1">
        <button onClick={print} className="btn btn-sm btn-dark">پرنت</button>
        <span>مجموع بودجه: {totalBudget}</span>
      </div>
    </>
  )
}

export default Appropriation;