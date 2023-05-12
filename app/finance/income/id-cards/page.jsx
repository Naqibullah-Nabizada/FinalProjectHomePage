"use client";

import Header from "@/components/Header";

import axios from "axios";
import Link from "next/link";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { FaCogs, FaEdit, FaTrash } from "react-icons/fa";

const IdCard = () => {

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

  const deleteIdCard = async (id) => {
    await axios.delete(`http://localhost:5000/IdCards/${id}`);
    fetchData();
  }


  return (
    <>
      <header className="flex">
        <Header href="./finance/income/id-cards/add" pageName="id-cards" />
      </header>
      <hr />
      <main className="w-[99%] mx-auto">
        <table className="table table-bordered table-sm table-striped">
          <thead>
            <tr>
              <th>شماره</th>
              <th>نام</th>
              <th>نام پدر</th>
              <th>تعداد محصل</th>
              <th>مرجع</th>
              <th>سال</th>
              <th>قیمت کارت</th>
              <th>قیمت مجموعی</th>
              <th>نمبر تعرفه</th>
              <th>تاریخ تعرفه</th>
              <th>نمبر آویز</th>
              <th>تاریخ آویز</th>
              <th>ملاحضات</th>
              <th className="flex justify-center"><FaCogs className="mx-1" />تنظیمات</th>
            </tr>
          </thead>
          <tbody>
            {
              IdCards.length > 0 ? IdCards.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.father_name}</td>
                  <td>{item.count}</td>
                  <td>{item.reference}</td>
                  <td>{item.year.slice(0, 4)}</td>
                  <td>{item.cost}</td>
                  <td>{item.cost * item.count}</td>
                  <td>{item.tariff_num}</td>
                  <td>{item.tariff_date.slice(0, 10)}</td>
                  <td>{item.pendant_num ?? null}</td>
                  <td>{item.pendant_date != null ? item.pendant_date.slice(0, 10) : null}</td>
                  <td>{item.remark}</td>
                  <td className="flex justify-around">
                    <Link href='' className="btn btn-sm btn-warning"><FaEdit className="bg-inherit" /></Link>
                    <button onClick={() => deleteIdCard(item.id)} className="btn btn-sm btn-danger"><FaTrash className="bg-inherit" /></button>
                  </td>
                </tr>
              )) : null
            }
          </tbody>
        </table>
      </main>
    </>
  )
}

export default IdCard;