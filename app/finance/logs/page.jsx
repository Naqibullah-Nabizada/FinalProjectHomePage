"use client";

import axios from "axios";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Image from "next/image";

import Header from "@/components/Header";

import Link from "next/link";
import { useContext } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { AuthContext } from "../admin/context/context";

const FormsReport = () => {

  const { token, admin } = useContext(AuthContext);

  const [userLog, setUserLog] = useState([]);

  const search = useSearchParams();
  const searchQuery = search ? search.get("search") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");


  function formatTimestamp(timestamp) {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };

    return new Date(timestamp).toLocaleString("fa-AF", options);
  }

  useEffect(() => {
    logs();
  }, [searchQuery]);

  const logs = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/logs/${encodedSearchQuery}`);
      setUserLog(data);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <Header hrefAddBtn={admin == 1 ? ("/finance/reports") : ""} hrefBackBtn="/finance" section={"logs"} pageName="logs" />
      </div>
      <hr />

      {
        token !== null && admin == 1 || admin == 2 ? (
          <section>
            <main className="w-[80%] mx-auto" id="main">
              <header className="my-3">
                <p className="h3 text-center border-bottom">لاگ ها</p>
              </header>
              <hr />
              <table className="table table-bordered table-sm table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>کاربر</th>
                    <th>زمان</th>
                    <th>عملیات</th>
                    <th>جدول</th>
                    <th>ریکارد</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    userLog.map((item, index) => (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.user.name}</td>
                        <td>{formatTimestamp(item.timestamp)}</td>
                        <td>{item.action}</td>
                        <td>
                          {
                            item.table_name == 'appropriations'
                              ? 'بودجه'
                              : item.table_name == 'bv_fees'
                                ? 'عواید'
                                : item.table_name === 'id_cards'
                                  ? 'عواید'
                                  : item.table_name === 'nmdtn_fees'
                                    ? 'عواید'
                                    : item.table_name === 'twelve_sections'
                                      ? 'عواید'
                                      : item.table_name === 'fasels'
                                        ? 'فصل ها'
                                        : item.table_name === 'faseldetails '
                                          ? 'جزئیات فصل ها'
                                          : item.type === 'users'
                                            ? 'کاربران'
                                            :
                                            item.table_name
                          }
                        </td>
                        <td>{item.recordId}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </main>
            <div className=" w-[100%] d-flex justify-around bg-gray-200 p-1 mb-5">
              <Link href="./finance" className="btn btn-sm btn-outline-secondary flex">
                <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
              </Link>
            </div>

          </section>
        ) : (
          <>
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

export default FormsReport;
