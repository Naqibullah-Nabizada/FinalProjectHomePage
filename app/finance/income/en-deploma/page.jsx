"use client";

//! Shamsi Date Converter 
import * as shamsi from "shamsi-date-converter";

import Header from "@/components/Header";

import axios from "axios";
import Link from "next/link";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { FaEdit } from "react-icons/fa";


const Noctunal = async() => {

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

  return (
    <>
      <header className="flex">
        <Header hrefAddBtn="/finance/income/en-deploma/add" hrefBackBtn="/finance/income" pageName="en-deploma"/>
      </header>
      <hr />
      <main className="w-[99%] mx-auto">
      <table className="table table-bordered table-sm table-striped">
      <thead>
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
          <th>ملاحضات</th>
          <th className="flex justify-center">ویرایش</th>
        </tr>
      </thead>
      <tbody>
        {
          EnDeploma.map((item) => (
            <tr key={item.id}>
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
              <td>{item.pendant_num}</td>
              <td>{shamsi.gregorianToJalali(item.pendant_date).join('-')}</td>
              <td>{item.remark}</td>
              <td className="flex justify-around">
                <Link href='' className="btn btn-sm btn-warning"><FaEdit className="bg-inherit" /></Link>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
      </main>
    </>
  )
}

export default Noctunal;