"use client";
import Link from "next/link";
import { AiOutlineEye } from "react-icons/ai";
import axios from "axios";

async function getData() {
  try {
    const response = await axios.get("http://localhost:3001/supplies/main");
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
import Link from "next/link";
import { AiOutlineEye } from "react-icons/ai";

export default async function ListProducts() {
  const data = await getData();
  return (
    <tbody className="text-end">
      {data.map((items, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{items.document_No}</td>
            <td>{items.content}</td>
            <td className="text-center">
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
