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

  const { totalMainBudget, totalBudget } = appropriations.reduce((accumulator, item) => {
    return {
      totalMainBudget: accumulator.totalMainBudget + item.main_amount,
      totalBudget: accumulator.totalBudget + item.amount,
    };
  }, { totalMainBudget: 0, totalBudget: 0 });

  const totalSpendBudget = totalMainBudget - totalBudget;

  return (
    <>
      <header className="flex" id="header">
        <Header hrefAddBtn="/finance/forms/budget/add" hrefBackBtn="/finance/forms" section={"forms"} pageName="budget" />
      </header>
      <hr />
      <main className="w-[80%] mx-auto" id="main">
        <h3 className="text-center my-2">لیست بودجه و مصارف پوهنتون کابل</h3>
        <hr />
        <table className="table table-bordered table-sm table-striped">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>کود</th>
              <th>نام دری</th>
              <th>نام پشتو</th>
              <th>نام انگلیسی</th>
              <th>اصل بودجه</th>
              <th>بودجه باقی مانده</th>
              <th className="flex justify-center" id="edit_label">ویرایش</th>
            </tr>
          </thead>
          <tbody>
            {
              appropriations.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.code}</td>
                  <td>{item.dari_name}</td>
                  <td>{item.pashto_name}</td>
                  <td>{item.eng_name}</td>
                  <td>{item.main_amount}</td>
                  <td>{item.amount}</td>
                  <td className="flex justify-around" id="edit_btn">
                    <Link href={`/finance/forms/budget/update/${item.id}`} className="btn btn-sm btn-warning"><FaEdit className="bg-inherit" /></Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <div className="d-flex justify-around bg-gray-200 p-1">
          <span>مجموع اصل بودجه: {totalMainBudget}</span>
          <span>مجموع بودجه باقی مانده: {totalBudget}</span>
          <span>مجموع بودجه مصرف شده: {totalSpendBudget}</span>
        </div>
      </main>
      <div className="text-center my-3">
        <button onClick={print} className="btn btn-sm btn-dark">پرنت</button>
      </div>
    </>
  )
}

export default Appropriation;