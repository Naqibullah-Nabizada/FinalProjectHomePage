"use client";

import Header from "@/components/Header";

import axios from "axios";
import Link from "next/link";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { FaEdit } from "react-icons/fa";


const Fasel = () => {

  const [parentBabs, setParentBab] = useState([]);

  const search = useSearchParams();
  const searchQuery = search ? search.get("search") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const fetchData = async () => {
    const { data } = await axios.get(`http://localhost:5000/Fasel/${encodedSearchQuery}`);
    setParentBab(data);
  }

  // const { totalAmount } = Fasel.reduce((accumulator, item) => {
  //   return {
  //     totalAmount: accumulator.totalAmount + (item.amount)
  //   };
  // }, { totalAmount: 0 });

  return (
    <>
      <header className="flex">
        <Header hrefAddBtn="/finance/forms/fasel/add" hrefBackBtn="/finance/forms" pageName="forms" />
      </header>
      <hr />
      <main className="w-[25%] mx-auto" id="main">
        <table className="table table-bordered table-sm table-striped">
          <thead>
            <tr>
              <th>شماره</th>
              <th>باب</th>
              <th>فصل</th>
              <th>توضیحات</th>
              <th className="flex justify-center">ویرایش</th>
            </tr>
          </thead>
          <tbody>
            {
              parentBabs.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.childbab.name}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
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
        {/* <span>قیمت مجموعی: {totalAmount}</span> */}
      </div>
    </>
  )
}

export default Fasel;