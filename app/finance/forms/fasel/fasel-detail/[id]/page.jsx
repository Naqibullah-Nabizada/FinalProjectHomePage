"use client";

import Header from "@/components/Header";

import axios from "axios";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


//! Shamsi Date Converter 
import * as shamsi from "shamsi-date-converter";

const Fasel = () => {

  const { id } = useParams();

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

  // const { totalAmount } = Fasel.reduce((accumulator, item) => {
  //   return {
  //     totalAmount: accumulator.totalAmount + (item.amount)
  //   };
  // }, { totalAmount: 0 });

  return (
    <>
      <header className="flex" id="header">
        <Header hrefAddBtn="/finance/forms/fasel-detail/add" hrefBackBtn={`/finance/forms/fasel`} pageName="forms" />
      </header>
      <hr />
      <main className="w-[100%] table-responsive mx-auto" id="main">
        <table className="table table-bordered table-sm table-striped" id="fasel-detail-table">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>فصل</th>
              <th>تاریخ</th>
              <th>توضیحات</th>
              <th>مراجعه</th>
              <th>نمبر خصوصی</th>
              <th>مراجعه تصفیه</th>
              <th>تادیه بعدی</th>
              <th>تادیه پیشکی</th>
              <th>پیشکی محسوب شده</th>
              <th>تعهد تصفیه شده</th>
              <th>عاید</th>
              <th>حواله تخصیصات</th>
              <th>حواله تخصیصات تعهد شده</th>
              {/* <th className="flex justify-center">ویرایش</th> */}
            </tr>
          </thead>
          <tbody>
            {
              faselDetails.map((item) => (
                <tr key={item.id} style={item.befor_pay !== 0 && item.commitment === '' ? { background: "#F2BBA7" } : null}>
                  <td>{item.id}</td>
                  <td>{item.fasel.code}</td>
                  <td>{shamsi.gregorianToJalali(item.date).join('-')}</td>
                  <td>{item.desc}</td>
                  <td>{item.reference}</td>
                  <td>{item.private_num}</td>
                  <td>{item.refinement}</td>
                  <td>{item.after_pay}</td>
                  <td>{item.befor_pay}</td>
                  <td>{item.previous_considered}</td>
                  <td>{item.commitment}</td>
                  <td>{item.income}</td>
                  <td>{item.transfer}</td>
                  <td>{item.commitment_transfer}</td>
                  <td className="flex justify-around" id="edit_btn">
                    {/* <Link href={`/finance/forms/fasel-detail/${item.id}/update/${item.id}`} className="btn btn-sm btn-warning"><FaEdit className="bg-inherit" /></Link> */}
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