"use client";

import Header from "@/components/Header";

import axios from "axios";
import Link from "next/link";

import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

import { FaCheck, FaEdit } from "react-icons/fa";

//! Shamsi Date Converter 
import * as shamsi from "shamsi-date-converter";
import { AuthContext } from "../../admin/context/context";

const FaselDetail = () => {

  const { admin } = useContext(AuthContext);

  const [faselDetails, setFaselDetail] = useState([]);

  const search = useSearchParams();
  const searchQuery = search ? search.get("search") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const fetchData = async () => {
    const { data } = await axios.get(`http://localhost:5000/FaselDetail/${encodedSearchQuery}`);
    setFaselDetail(data);
  }

  return (
    <>
      <header className="flex" id="header">
        <Header hrefAddBtn={admin == 1 ? ("/finance/forms/fasel-detail/add") : ""} hrefBackBtn="/finance/forms" section={"forms"} pageName="fasel-detail" />
      </header>
      <hr />
      <main className="w-[100%] table-responsive mx-auto" id="main">
        <div className="table-responsive">
          <table className="table table-bordered align-middle table-sm table-striped" id="fasel-detail-table">
            <thead className="table-dark">
              <tr>
                <th className="text-center text-nowrap">فصل</th>
                <th className="text-center text-nowrap">تاریخ</th>
                <th className="text-center text-nowrap">توضیحات</th>
                <th className="text-center text-nowrap">مراجعه</th>
                <th className="text-center text-nowrap">نمبر خصوصی</th>
                {/* <th>مراجعه تصفیه</th> */}
                <th className="text-center text-nowrap">تادیه بعدی</th>
                <th className="text-center text-nowrap">تادیه پیشکی</th>
                <th className="text-center text-nowrap">پیشکی محسوب شده</th>
                <th className="text-center text-nowrap">تعهد تصفیه شده</th>
                <th className="text-center text-nowrap">عاید</th>
                <th className="text-center text-nowrap">حواله تخصیصات</th>
                <th className="text-center text-nowrap">حواله تخصیصات تعهد شده</th>
                {
                  admin == 1 ? (
                    <th className="flex justify-center" id="edit_label">ویرایش</th>
                  ) : null
                }
              </tr>
            </thead>
            <tbody>
              {
                faselDetails.map((item, index) => (
                  <tr key={item.id} style={item.befor_pay != 0 && item.commitment === '' ? { background: "#F2BBA7" } : null}>
                    <td>{item.fasel.code}</td>
                    <td className="text-center text-nowrap">{shamsi.gregorianToJalali(item.date).join('-')}</td>
                    <td className="text-center text-nowrap">{item.desc}</td>
                    <td className="text-center text-nowrap">{item.reference}</td>
                    <td className="text-center text-nowrap">{item.private_num}</td>
                    {/* <td>{item.refinement}</td> */}
                    <td className="text-center text-nowrap">{item.after_pay}</td>
                    <td className="text-center text-nowrap">{item.befor_pay}</td>
                    <td className="text-center text-nowrap">{item.previous_considered}</td>
                    <td className="text-center text-nowrap">{item.commitment}</td>
                    <td className="text-center text-nowrap">{item.income}</td>
                    <td className="text-center text-nowrap">{item.transfer}</td>
                    <td className="text-center text-nowrap">{item.commitment_transfer}</td>
                    {
                      admin == 1 ? (
                        <td className="flex justify-around" id="edit_btn">
                          <Link href={`/finance/forms/fasel-detail/update/${item.id}`} className="btn btn-sm btn-warning"><FaEdit className="bg-inherit" /></Link>
                          {
                            item.befor_pay > 0 && item.commitment == "" ?
                              <Link href={`/finance/forms/fasel-detail/add/${item.id}`} className="btn btn-sm btn-success"><FaCheck className="bg-inherit" /></Link>
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
        </div>
      </main>
      <div className="d-flex justify-around bg-gray-200 p-1">
        <button onClick={print} className="btn btn-sm btn-dark">پرنت</button>
        {/* <span>قیمت مجموعی: {totalAmount}</span> */}
      </div>
    </>
  )
}

export default FaselDetail;