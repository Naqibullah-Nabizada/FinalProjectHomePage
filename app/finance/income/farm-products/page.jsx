import axios from "axios";
import { toast } from "react-toastify";

import Header from "@/components/Header";
import Link from "next/link";
import { FaCogs, FaEdit, FaTrash } from 'react-icons/fa';

const getMAForms = async () => {
  const data = await fetch("http://localhost:5000/MAForms", {cache: "no-cache"});
  return data.json();
}

const Home = async() => {

  const MAForms = await getMAForms();

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/MAForms/${id}`);
    toast('معلومات با موفقیت حذف شد',
      {
        hideProgressBar: true,
        autoClose: 5000,
        type: 'success',
        position: 'top-right',
      })
    getMAForms();
  }

  return (
    <>
      <header className="flex">
        <Header href="./income/ma_forms/add"/>
      </header>
      <hr />
      <main className="w-[98%] mx-auto">
        <table className="table table-sm table-responsive table-bordered table-striped">
          <thead>
            <tr>
              <th>شماره</th>
              <th>تحویل دهنده</th>
              <th>نمبر مکتوب</th>
              <th>تاریخ</th>
              <th>مرجع</th>
              <th>سال</th>
              <th>مبلغ</th>
              <th>تفصیلات</th>
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
              MAForms.map((MAForm) => (
                <tr key={MAForm.id}>
                  <td>{MAForm.id}</td>
                  <td>{MAForm.fullname}</td>
                  <td>{MAForm.maktub_num}</td>
                  <td>{MAForm.date.slice(0, 10)}</td>
                  <td>{MAForm.reference.slice(0, 15)}</td>
                  <td>{MAForm.year.slice(0, 4)}</td>
                  <td>{MAForm.amount}</td>
                  <td>{MAForm.desc.slice(0, 15)}</td>
                  <td>{MAForm.tariff_num}</td>
                  <td>{MAForm.tariff_date.slice(0, 10)}</td>
                  <td>{MAForm.pendant_num}</td>
                  <td>{MAForm.pendant_date.slice(0, 10)}</td>
                  <td>{MAForm.remark.slice(0, 15)}</td>
                  <td className="flex justify-around">
                    <Link href='' className="btn btn-sm btn-warning"><FaEdit className="bg-inherit" /></Link>
                    <button className="btn btn-sm btn-danger"><FaTrash className="bg-inherit" /></button>
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

export default Home;