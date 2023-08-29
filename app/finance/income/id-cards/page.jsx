"use client";

//! Shamsi Date Converter 
import * as shamsi from "shamsi-date-converter";

import Header from "@/components/Header";

import axios from "axios";
import Link from "next/link";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { FaCheck, FaEdit } from "react-icons/fa";

const IdCard = () => {

  const [IdCards, setIdCards] = useState([]);

  const search = useSearchParams();
  const searchQuery = search ? search.get("search") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const fetchData = async () => {
    const { data } = await axios.get(`http://localhost:5000/IdCards/${encodedSearchQuery}`);
    setIdCards(data);
  }

  const { totalCount, totalAmount } = IdCards.reduce((accumulator, item) => {
    return {
      totalCount: accumulator.totalCount + item.count,
      totalAmount: accumulator.totalAmount + (item.cost * item.count)
    };
  }, { totalCount: 0, totalAmount: 0 });

  return (
    <>

      <header className="flex">
        <Header hrefAddBtn="/finance/income/id-cards/add" hrefBackBtn="/finance/income" pageName="id-cards" />
      </header>
      <hr />
      <main className="w-[99%] mx-auto" id="main">
        <table className="table table-bordered table-sm table-striped">
          <thead>
            <tr>
              <th>شماره</th>
              <th>نام</th>
              <th>نام پدر</th>
              <th>تعداد محصل</th>
              <th>سال</th>
              <th>مرجع</th>
              <th>قیمت کارت</th>
              <th>قیمت مجموعی</th>
              <th>نمبر تعرفه</th>
              <th>تاریخ تعرفه</th>
              <th>نمبر آویز</th>
              <th>تاریخ آویز</th>
              <th>ملاحضات</th>
              <th className="flex justify-center">ویرایش</th>
            </tr>
          </thead>
          <tbody>
            {
              IdCards.length > 0 ? IdCards.map((item) => (
                <tr key={item.id} style={item.pendant_num == null || item.pendant_num == '' ? { background: "#F2BBA7" } : null}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.father_name}</td>
                  <td>{item.count}</td>
                  <td>{item.year}</td>
                  <td>{item.reference}</td>
                  <td>{item.cost}</td>
                  <td>{item.cost * item.count}</td>
                  <td>{item.tariff_num}</td>
                  <td>{shamsi.gregorianToJalali(item.tariff_date).join("-")}</td>
                  <td>{item.pendant_num ?? null}</td>
                  <td>{item.pendant_date != null ? shamsi.gregorianToJalali(item.pendant_date).join("-") : null}</td>
                  <td>{item.remark}</td>
                  <td className="flex justify-around">
                    <Link href={`/finance/income/id-cards/update/${item.id}`} className="btn btn-sm btn-warning"><FaEdit className="bg-inherit" /></Link>
                    {item.pendant_num == null || item.pendant_num == '' ?
                      <Link href={`/finance/income/id-cards/add/${item.id}`} className="btn btn-sm btn-success"><FaCheck className="bg-inherit" /></Link>
                      : null
                    }
                  </td>
                </tr>
              )) : null
            }
          </tbody>

        </table>
      </main>
      <div className="d-flex justify-around bg-gray-200 p-1">
        <button onClick={print} className="btn btn-sm btn-dark">پرنت</button>
        <span>قیمت مجموعی: {totalAmount}</span>
        <span>تعداد مجموعی: {totalCount}</span>
      </div>
    </>
  )
}

export default IdCard;