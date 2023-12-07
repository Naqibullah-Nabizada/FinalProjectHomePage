"use client";

//! Shamsi Date Converter 
import * as shamsi from "shamsi-date-converter";

import Header from "@/components/Header";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";

import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import { FaCheck, FaEdit } from "react-icons/fa";
import { AuthContext } from "../../admin/context/context";

const IdCard = () => {

  const { admin, token } = useContext(AuthContext);

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
      {
        token !== null ? (
          <>
            <header className="flex" id="header">
              <Header hrefAddBtn={admin == 0 ? ("/finance/income/id-cards/add") : ""} hrefBackBtn="/finance/income" section={"income"} pageName="id-cards" />
            </header>
            <hr />
            <main className="w-[99%] mx-auto" id="main">
              <table className="table table-bordered table-sm table-striped">
                <caption className="caption-top text-center text-dark">عواید آی دی کارت پوهنتون کابل</caption>
                <thead className="table-dark">
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
                        {
                          admin == 0 ? (
                            <td className="flex justify-around" id="edit_btn">
                              <Link href={`/finance/income/id-cards/update/${item.id}`} className="btn btn-sm btn-warning"><FaEdit className="bg-inherit" /></Link>
                              {item.pendant_num == null || item.pendant_num == '' ?
                                <Link href={`/finance/income/id-cards/add/${item.id}`} className="btn btn-sm btn-success"><FaCheck className="bg-inherit" /></Link>
                                : null
                              }
                            </td>
                          ) : null
                        }
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
        ) : (
          <>
            <Navbar title="مدیریت مالی و حسابی" />
            <hr />
            <section className="container col-8 flex justify-center align-items-center">
              <div>
                <p className="alert alert-info text-center">برای وارد شدن به پنل مدیریت ابتدا وارد حساب کاربری خود شوید!</p>
                <Link href="finance/admin/auth" className="block mx-auto btn btn-outline-primary col-6">ورود به پنل مدیریت</Link>
              </div>
              <div>
                <Image src={"/images/finance/register.svg"} alt='register' width={500} height={500} />
              </div>
            </section>
          </>
        )
      }
    </>
  )
}

export default IdCard;