"use client";

import { AuthContext } from "@/app/finance/admin/context/context";
import Header from "@/components/Header";

import axios from "axios";

import { useParams, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";


//! Shamsi Date Converter 
import * as shamsi from "shamsi-date-converter";

const Fasel = () => {

  const { id } = useParams();

  const { admin } = useContext(AuthContext);

  const [faselDetails, setFaselDetail] = useState([]);

  const search = useSearchParams();
  const searchQuery = search ? search.get("search") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const fetchData = async () => {
    const { data } = await axios.get(`http://localhost:5000/FaselDetailss/${id}/${encodedSearchQuery}`);
    setFaselDetail(data);
  }

  return (
    <>
      <header className="flex" id="header">
        <Header hrefAddBtn={admin == 1 ? ("/finance/forms/fasel-detail/add") : ""} hrefBackBtn={`/finance/forms/fasel`} pageName="forms" />
      </header>
      <hr />
      <main className="w-[100%] mx-auto" id="main">
        <div className="table-responsive">
          <table className="table table-bordered table-sm table-striped" id="fasel-detail-table">
            <thead className="table-dark">
              <tr>
                <th className="text-center text-nowrap">فصل</th>
                <th className="text-center text-nowrap">تاریخ</th>
                <th className="text-center text-nowrap">توضیحات</th>
                <th className="text-center text-nowrap">مراجعه</th>
                <th className="text-center text-nowrap">نمبر خصوصی</th>
                <th className="text-center text-nowrap">مراجعه تصفیه</th>
                <th className="text-center text-nowrap">تادیه بعدی</th>
                <th className="text-center text-nowrap">تادیه پیشکی</th>
                <th className="text-center text-nowrap">پیشکی محسوب شده</th>
                <th className="text-center text-nowrap">تعهد تصفیه شده</th>
                <th className="text-center text-nowrap">عاید</th>
                <th className="text-center text-nowrap">حواله تخصیصات</th>
                <th className="text-center text-nowrap">حواله تخصیصات تعهد شده</th>
                {/* <th className="flex justify-center">ویرایش</th> */}
              </tr>
            </thead>
            <tbody>
              {
                faselDetails.map((item) => (
                  <tr key={item.id} style={item.befor_pay !== 0 && item.commitment === '' ? { background: "#F2BBA7" } : null}>
                    <td className="text-center text-nowrap">{item.fasel.code}</td>
                    <td className="text-center text-nowrap">{shamsi.gregorianToJalali(item.date).join('-')}</td>
                    <td className="text-center text-nowrap">{item.desc}</td>
                    <td className="text-center text-nowrap">{item.reference}</td>
                    <td className="text-center text-nowrap">{item.private_num}</td>
                    <td className="text-center text-nowrap">{item.refinement}</td>
                    <td className="text-center text-nowrap">{item.after_pay}</td>
                    <td className="text-center text-nowrap">{item.befor_pay}</td>
                    <td className="text-center text-nowrap">{item.previous_considered}</td>
                    <td className="text-center text-nowrap">{item.commitment}</td>
                    <td className="text-center text-nowrap">{item.income}</td>
                    <td className="text-center text-nowrap">{item.transfer}</td>
                    <td className="text-center text-nowrap">{item.commitment_transfer}</td>
                    {/* <td className="flex justify-around" id="edit_btn">
                    <Link href={`/finance/forms/fasel-detail/${item.id}/update/${item.id}`} className="btn btn-sm btn-warning"><FaEdit className="bg-inherit" /></Link>
                  </td> */}
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

export default Fasel;