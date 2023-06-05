"use client";
import { AiOutlineEye } from "react-icons/ai";
import Link from "next/link";
import axios from "axios";

import TableData from "../table/td/tabelData";
async function getData() {
  try {
    const response = await axios.get("http://localhost:3001/supplies/main");
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
export default async function ListProducts() {
  const data = await getData();
  return (
    <tbody className="text-end">
      {data.map((items, index) => {
        return (
          <tr key={index}>
            {/* a column to show the number of records */}
            <TableData title={index + 1} />
            {/* column for document number */}
            <TableData title={items.document_No} />
            {/* column for the content of document */}
            <TableData title={items.content} />
            <td className="text-center">
              {/* this link redirect to another page to show the full details */}
              <Link
                href={`/supplies/depot-list/${items.document_No}`}
                className="btn bg-yellow-500"
              >
                <AiOutlineEye />
              </Link>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
