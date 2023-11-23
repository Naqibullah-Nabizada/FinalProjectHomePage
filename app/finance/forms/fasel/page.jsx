"use client";

import Header from "@/components/Header";
import ShamsiDate from "@/components/ShamsiDate";

import axios from "axios";
import Link from "next/link";

import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

import { FaEdit } from "react-icons/fa";
import { AuthContext } from "../../admin/context/context";


const Fasel = () => {

  const { admin } = useContext(AuthContext);

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

  const { totalMainBudget, totalBudget } = fasels.reduce((accumulator, item) => {
    return {
      totalMainBudget: accumulator.totalMainBudget + item.main_amount,
      totalBudget: accumulator.totalBudget + item.amount,
    };
  }, { totalMainBudget: 0, totalBudget: 0 });

  const totalSpendBudget = totalMainBudget - totalBudget;

  return (
    <>
      <header className="flex" id="header">
        <Header hrefAddBtn={admin == 1 ? ("/finance/forms/fasel/add") : ""} hrefBackBtn="/finance/forms" section="forms" pageName="fasel" />
      </header>
      <hr />
      <main className="w-[80%] mx-auto" id="main">
        <table className="table table-responsive table-bordered table-sm table-striped">
          <caption className="caption-top text-center text-dark">تخصیصات بودجه عادی پوهنتون کابل سال <ShamsiDate /></caption>
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>سال</th>
              <th>باب</th>
              <th>فصل</th>
              <th>توضیحات</th>
              <th>اصل بودجه</th>
              <th>بودجه باقی مانده</th>
              <th>بودجه مصرف شده</th>
              {
                admin == 1 ? (
                  <th className="flex justify-center" id="edit_label">ویرایش</th>
                ) : null
              }
            </tr>
          </thead>
          <tbody>
            {
              fasels.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.year}</td>
                  <td>{item.appropriation.code}</td>
                  <td>
                    <Link href={`/finance/forms/fasel/fasel-detail/${item.id}`}>
                      {item.code}
                    </Link>
                  </td>
                  <td>{item.desc}</td>
                  <td>{item.main_amount} افغانی</td>
                  <td>{item.amount} افغانی</td>
                  <td>{parseFloat(item.main_amount) - parseFloat(item.amount)} افغانی</td>
                  {
                    admin == 1 ? (
                      <td className="flex justify-around" id="edit_btn">
                        <Link href={`/finance/forms/fasel/update/${item.id}`} className="btn btn-sm btn-warning"><FaEdit className="bg-inherit" /></Link>
                      </td>
                    ) : null
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
        <div className="d-flex justify-around bg-gray-200 p-1">
          <span>مجموع اصل بودجه: {totalMainBudget} افغانی</span>
          <span>مجموع بودجه باقی مانده: {totalBudget} افغانی</span>
          <span>مجموع بودجه مصرف شده: {totalSpendBudget} افغانی</span>
        </div>
      </main>
      <div className="text-center my-3">
        <button onClick={print} className="btn btn-sm btn-dark">پرنت</button>
      </div>
    </>
  )
}

export default Fasel;