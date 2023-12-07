"use client";

import Header from "@/components/Header";

import axios from "axios";
import Link from "next/link";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { FaEdit } from "react-icons/fa";


const ParentBob = () => {

  const [parentBabs, setParentBab] = useState([]);

  const search = useSearchParams();
  const searchQuery = search ? search.get("search") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const fetchData = async () => {
    const { data } = await axios.get(`http://localhost:5000/ParentBab/${encodedSearchQuery}`);
    setParentBab(data);
  }

  const { totalBudget } = parentBabs.reduce((accumulator, item) => {
    return {
      totalBudget: accumulator.totalBudget + (item.amount)
    };
  }, { totalBudget: 0 });

  return (
    <>
      <header className="flex" id="header">
        <Header hrefAddBtn="/finance/forms/bab/add" hrefBackBtn="/finance/forms" section={"forms"} pageName="bab" />
      </header>
      <hr />
      <main className="w-[60%] mx-auto" id="main">
        <table className="table table-bordered table-sm table-striped">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>باب</th>
              <th>شرح</th>
              <th>تخصیص از</th>
              <th>کود تخصیص</th>
              <th>مقدار تخصیص</th>
              <th className="flex justify-center" id="edit_label">ویرایش</th>
            </tr>
          </thead>
          <tbody>
            {
              parentBabs.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.desc}</td>
                  <td>{
                    item.kind_of === 'program' ? 'پروگرام' : 'تخصیصات'
                  }</td>
                  <td>{item.kind_of_budget}</td>
                  <td>{item.amount}</td>
                  <td className="flex justify-around" id="edit_btn">
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
        <span>مجموع بودجه تخصیص داده شده: {totalBudget}</span>
      </div>
    </>
  )
}

export default ParentBob;