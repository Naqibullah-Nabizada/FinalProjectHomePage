"use client";

import Header from "@/components/Header";

import axios from "axios";
import Link from "next/link";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { FaEdit } from "react-icons/fa";

const Program = () => {

  const [programs, setProgram] = useState([]);

  const search = useSearchParams();
  const searchQuery = search ? search.get("search") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const fetchData = async () => {
    const { data } = await axios.get(`http://localhost:5000/Programs/${encodedSearchQuery}`);
    setProgram(data);
  }

  const { totalMainBudget, totalBudget } = programs.reduce((accumulator, item) => {
    return {
      totalMainBudget: accumulator.totalMainBudget + (item.main_amount),
      totalBudget: accumulator.totalBudget + (item.amount)
    };
  }, {totalMainBudget: 0 ,totalBudget: 0 });

  return (
    <>
      <header className="flex">
        <Header hrefAddBtn="/finance/forms/budget/program/add" hrefBackBtn="/finance/forms/budget" section={"forms"} pageName="budget/program" />
      </header>
      <hr />
      <main className="w-[60%] mx-auto" id="main">
        <table className="table table-bordered table-sm table-striped">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>کد</th>
              <th>تفصیلات</th>
              <th>اصل بودجه</th>
              <th>بودجه باقی مانده</th>
              <th className="flex justify-center">ویرایش</th>
            </tr>
          </thead>
          <tbody>
            {
              programs.map((item, index) => (
                <tr key={index + 1}>
                  <td>{item.id}</td>
                  <td>{item.code}</td>
                  <td>{item.desc}</td>
                  <td>{item.main_amount}</td>
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
        <span>مجموع اصل بودجه: {totalMainBudget}</span>
        <span>مجموع بودجه باقی مانده: {totalBudget}</span>
      </div>
    </>
  )
}

export default Program;