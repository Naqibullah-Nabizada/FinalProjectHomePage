"use client";

//! Shamsi Date Converter 
import * as shamsi from "shamsi-date-converter";

import Header from "@/components/Header";

import axios from "axios";
import Link from "next/link";

import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

import { FaCheck, FaEdit } from "react-icons/fa";
import { AuthContext } from "../../admin/context/context";


const Noctunal = () => {

  const { admin } = useContext(AuthContext);

  const [buildings, setBuildings] = useState([]);

  const search = useSearchParams();
  const searchQuery = search ? search.get("search") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const fetchData = async () => {
    const { data } = await axios.get(`http://localhost:5000/BV/buildings${encodedSearchQuery}`);
    setBuildings(data);
  }

  const { totalAmount } = buildings.reduce((accumulator, item) => {
    return {
      totalAmount: accumulator.totalAmount + (item.amount)
    };
  }, { totalAmount: 0 });

  return (
    <>
      <header className="flex" id="header">
        <Header hrefAddBtn={admin == 0 ? ("/finance/income/buildings/add") : ""} hrefBackBtn="/finance/income" section={"income"} pageName="buildings" />
      </header>
      <hr />
      <main className="w-[99%] mx-auto" id="main">
        <table className="table table-bordered table-sm table-striped">
          <caption className="caption-top text-center text-dark">عواید کرایه اپارتمان های استادان پوهنتون کابل</caption>
          <thead className="table-dark">
            <tr>
              <th>شماره</th>
              <th>نام</th>
              <th>نام پدر</th>
              <th>مرجع</th>
              <th>سال</th>
              <th>مبلغ</th>
              <th>نمبر تعرفه</th>
              <th>تاریخ تعرفه</th>
              <th>نمبر آویز</th>
              <th>تاریخ آویز</th>
              <th>ملاحظات</th>
              {
                admin == 0 ? (
                  <th className="flex justify-center" id="edit_label">ویرایش</th>
                ) : null
              }
            </tr>
          </thead>
          <tbody>
            {
              buildings.map((item) => (
                <tr key={item.id} style={item.pendant_num == null || item.pendant_num == '' ? { background: "#F2BBA7" } : null}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.father_name}</td>
                  <td>{item.reference}</td>
                  <td>{item.year}</td>
                  <td>{item.amount}</td>
                  <td>{item.tariff_num}</td>
                  <td>{shamsi.gregorianToJalali(item.tariff_date).join('-')}</td>
                  <td>{item.pendant_num ?? null}</td>
                  <td>{item.pendant_date != null ? shamsi.gregorianToJalali(item.pendant_date).join('-') : null}</td>
                  <td>{item.remark}</td>
                  {
                    admin == 0 ? (
                      <td className="flex justify-around" id="edit_btn">
                        <Link href={`/finance/income/buildings/update/${item.id}`} className="btn btn-sm btn-warning"><FaEdit className="bg-inherit" /></Link>
                        {
                          item.pendant_num == null || item.pendant_num == '' ?
                            <Link href={`/finance/income/buildings/add/${item.id}`} className="btn btn-sm btn-success"><FaCheck className="bg-inherit" /></Link>
                            : null
                        }
                      </td>
                    ) : null
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
      </main>
      <div className="d-flex justify-around bg-gray-200 p-1">
        <button onClick={print} className="btn btn-sm btn-dark">پرنت</button>
        <span>قیمت مجموعی: {totalAmount}</span>
      </div>
    </>
  )
}

export default Noctunal;