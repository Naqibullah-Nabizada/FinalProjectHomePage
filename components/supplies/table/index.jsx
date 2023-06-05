"use client";
import Backward from "../Buttons/Backward";
import TableData from "./td/tabelData";
import TableHead from "./th/tableHead";

import { BsFillPrinterFill } from "react-icons/bs";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

export default function Table({ data }) {
  const reference = useRef();

  const [style, setStyle] = useState(true);

  const handlePrint = useReactToPrint({
    content: () => {
      setStyle(false);
      setTimeout(()=>setStyle(true),1000)
      return reference.current;
    },
  });

  return (
    <>
      <main className="w-[99%] mx-auto" >
      <div className={`${style?"hidden":"visible"}`} ref={reference}>
      <div className={`px-3 flex-col mb-2`}>
        <div className="flex justify-start items-center text-xl">
          م-۷ راپور رسید اجناس/خدمات
        </div>

        <div className="flex-col justify-center items-center text-center text-xl">
          <p>وزارت مالیه ریاست خزاین</p>
          <p>فورم م-۷ راپور رسید اجناس/خدمات</p>
        </div>
      </div>
      <div
        className={`flex justify-start items-center border px-3 py-2 text-justify`}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        mollitia illum quidem, dignissimos tempore eum sit, est aperiam modi
        consequatur asperiores corrupti totam veniam natus ex rerum. Iusto,
        necessitatibus possimus.
      </div>
    </div>
        <table className="table table-bordered table-sm table-striped">
          <thead className="table-dark text-white">
            <tr>
              <TableHead title={"شماره"} />
              <TableHead title={"نام جنس"} />
              <TableHead title={"واحد جنس"} />
              <TableHead title={"مقدار"} />
              <TableHead title={"قیمت فی واحد"} />
              <TableHead title={"قیمت مجموعی"} />
            </tr>
          </thead>
          <tbody>
            {data.map((items, index) => {
              return (
                <tr key={index}>
                  <TableData title={index + 1} />
                  <TableData title={items.itemName} />
                  <TableData title={items.unit} />
                  <TableData title={items.amount} />
                  <TableData title={items.price} />
                  <TableData title={items.amount * items.price} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
      <div className={`w-full p-2 flex justify-end gap-2`}>
        <button
          className={`btn flex justify-center items-center gap-1 text-white btn-dark`}
          onClick={handlePrint}
        >
          {"چاپ کردن"}
          <BsFillPrinterFill />
        </button>
        <Backward to={"/supplies/depot-list/"} title={"بازگشت"} />
      </div>
    </>
  );
}
