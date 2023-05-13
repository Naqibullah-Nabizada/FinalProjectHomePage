import axios from "axios";
import Link from "next/link";
import { FaCogs, FaEdit, FaTrash } from "react-icons/fa";

import { toast } from "react-toastify";

const getAllitem = async () => {
  const data = await fetch("http://localhost:5000/EnTranscript", { cache: "no-cache" });
  return data.json();
}

const EnTranscript = async () => {

  const EnTranscript = await getAllitem();

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/EnTranscript/${id}`)
    toast('معلومات با موفقیت حذف شد',
      {
        hideProgressBar: true,
        autoClose: 5000,
        type: 'success',
        position: 'top-right'
      });
    getAllitem();
  }

  return (
    <table className="table table-bordered table-sm table-striped">
      <thead>
        <tr>
          <th>شماره</th>
          <th>نام</th>
          <th>نام پدر</th>
          <th>تعداد محصل</th>
          <th>مرجع</th>
          <th>قیمت</th>
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
          EnTranscript.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.father_name}</td>
              <td>{item.count}</td>
              <td>{item.reference}</td>
              <td>{item.cost}</td>
              <td>{item.cost * item.count}</td>
              <td>{item.tariff_num}</td>
              <td>{item.tariff_date.slice(0, 10)}</td>
              <td>{item.pendant_num}</td>
              <td>{item.pendant_date.slice(0, 10)}</td>
              <td>{item.remark}</td>
              <td className="flex justify-around">
                <Link href='' className="btn btn-sm btn-warning"><FaEdit className="bg-inherit" /></Link>
                <button className="btn btn-sm btn-danger"><FaTrash className="bg-inherit" /></button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default EnTranscript;