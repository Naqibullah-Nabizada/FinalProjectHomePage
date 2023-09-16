"use client";

import Header from "@/components/Header";

import axios from "axios";
import Link from "next/link";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { FaEdit } from "react-icons/fa";


const Fasel = () => {

  const [fasels, setFasel] = useState([]);

  const search = useSearchParams();
  const searchQuery = search ? search.get("search") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const fetchData = async () => {
    const { data } = await axios.get(`http://localhost:5000/Fasel/${encodedSearchQuery}`);
    setFasel(data);
  }

  // const { totalBudget } = childBabs.reduce((accumulator, item) => {
  //   return {
  //     totalBudget: accumulator.totalBudget + (item.amount)
  //   };
  // }, { totalBudget: 0 });

  return (
    <>
      <header className="flex">
        <Header hrefAddBtn="/finance/forms/fasel/add" hrefBackBtn="/finance/forms" pageName="forms" />
      </header>
      <hr />
      <main className="w-[60%] mx-auto" id="main">
        <table className="table table-responsive table-bordered table-sm table-striped">
          <thead className="table-dark">
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
              fasels.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.parentbab.name}</td>
                  <td>
                    <Link href={`/finance/forms/fasel/fasel-detail/${item.id}`}>
                      {item.code}
                    </Link>
                  </td>
                  <td>{item.desc}</td>
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
        {/* <span>مجموع بودجه تخصیص داده شده: {totalBudget}</span> */}
      </div>
    </>
  )
}

export default Fasel;