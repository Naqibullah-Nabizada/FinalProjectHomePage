"use client";

//! Shamsi Date Converter 
import * as shamsi from "shamsi-date-converter";

import Header from "@/components/Header";

import axios from "axios";
import Link from "next/link";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { FaCheck, FaEdit } from "react-icons/fa";


const ResearchFarm = () => {

  const [researchFarm, setResearchFarm] = useState([]);

  const search = useSearchParams();
  const searchQuery = search ? search.get("search") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const fetchData = async () => {
    const { data } = await axios.get(`http://localhost:5000/TwelveSection/agriculterFarm${encodedSearchQuery}`);
    setResearchFarm(data);
  }

  return (
    <>
      <header className="flex">
        <Header hrefAddBtn="/finance/income/research-farm/add" hrefBackBtn="/finance/income" pageName="research-farm" />
      </header>
      <hr />
      <main className="w-[99%] mx-auto">
        <table className="table table-bordered table-sm table-striped">
          <thead>
            <tr>
              <th>شماره</th>
              <th>نام</th>
              <th>نام پدر</th>
              <th>نمبر مکتوب</th>
              <th>مرجع</th>
              <th>سال</th>
              <th>مبلغ</th>
              <th>تفصیلات</th>
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
              researchFarm.map((item) => (
                <tr key={item.id} style={item.pendant_num == null || item.pendant_num == '' ? { background: "#F2BBA7" } : null}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.father_name}</td>
                  <td>{item.maktub_num}</td>
                  <td>{item.reference}</td>
                  <td>{item.year}</td>
                  <td>{item.amount}</td>
                  <td>{item.desc}</td>
                  <td>{item.tariff_num}</td>
                  <td>{shamsi.gregorianToJalali(item.tariff_date).join('-')}</td>
                  <td>{item.pendant_num}</td>
                  <td>{item.pendant_date != null ? shamsi.gregorianToJalali(item.pendant_date).join('-') : null}</td>
                  <td>{item.remark}</td>
                  <td className="flex justify-around">
                    <Link href='' className="btn btn-sm btn-warning"><FaEdit className="bg-inherit" /></Link>
                    {
                      item.pendant_num == null || item.pendant_num == ''?
                        <Link href={`/finance/income/research-farm/add/${item.id}`} className="btn btn-sm btn-success"><FaCheck className="bg-inherit" /></Link>
                        : null
                    }
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

export default ResearchFarm;