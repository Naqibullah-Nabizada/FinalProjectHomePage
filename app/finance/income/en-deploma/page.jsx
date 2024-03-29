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


const EnDeploma = () => {

  const { admin } = useContext(AuthContext);

  const [EnDeploma, SetEnDeploma] = useState([]);

  const search = useSearchParams();
  const searchQuery = search ? search.get("search") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const fetchData = async () => {
    const { data } = await axios.get(`http://localhost:5000/NMDTN/EnDeploma${encodedSearchQuery}`);
    SetEnDeploma(data);
  }

  const { totalAmount } = EnDeploma.reduce((accumulator, item) => {
    return {
      totalAmount: accumulator.totalAmount + (item.fees + item.internel_fees)
    };
  }, { totalAmount: 0 });

  return (
    <>
      <header className="flex" id="header">
        <Header hrefAddBtn={admin == 0 ? ("/finance/income/en-deploma/add") : ""} hrefBackBtn="/finance/income" section={"income"} pageName="en-deploma" />
      </header>
      <hr />
      <main className="w-[99%] mx-auto" id="main">
        <table className="table table-bordered table-sm table-striped">
          <caption className="caption-top text-center text-dark">عواید دیپلوم زبان انگلیسی پوهنتون کابل</caption>
          <thead className="table-dark">
            <tr>
              <th>شماره</th>
              <th>نام</th>
              <th>نام پدر</th>
              <th>پوهنځی</th>
              <th>دیپارتمنت</th>
              <th>سال</th>
              <th>سمستر</th>
              <th>داخله</th>
              <th>فیس</th>
              <th>فیس مجموعی</th>
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
              EnDeploma.map((item) => (
                <tr key={item.id} style={item.pendant_num == null || item.pendant_num == '' ? { background: "#F2BBA7" } : null}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.father_name}</td>
                  <td>{item.faculty}</td>
                  <td>{item.department}</td>
                  <td>{item.year}</td>
                  <td>{item.semester}</td>
                  <td>{item.internel_fees}</td>
                  <td>{item.fees}</td>
                  <td>{Number(item.fees) + Number(item.internel_fees)}</td>
                  <td>{item.tariff_num}</td>
                  <td>{shamsi.gregorianToJalali(item.tariff_date).join('-')}</td>
                  <td>{item.pendant_num ?? null}</td>
                  <td>{item.pendant_date != null ? shamsi.gregorianToJalali(item.pendant_date).join('-') : null}</td>
                  <td>{item.remark}</td>
                  {
                    admin == 0 ? (
                      <td className="flex justify-around" id="edit_btn">
                        <Link href={`/finance/income/en-deploma/update/${item.id}`} className="btn btn-sm btn-warning"><FaEdit className="bg-inherit" /></Link>
                        {
                          item.pendant_num == null || item.pendant_num == '' ?
                            <Link href={`/finance/income/en-deploma/add/${item.id}`} className="btn btn-sm btn-success"><FaCheck className="bg-inherit" /></Link>
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


export default EnDeploma;
