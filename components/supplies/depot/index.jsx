"use client";
import { useState } from "react";
import StuffsDetails from "../form/Stuffs_details";

function Inserting() {
  const data = {
    document_No: 80000,
    content: "this is the second record that I am going to store in database",
    date: "2023/4/3",
    itemName: "book",
    amount: 100,
    unit: "number",
    price: 20,
  };
  const [message, setMessage] = useState("");

  async function AddProduct() {
    const insert = await InsertProduct(data);
    setMessage(insert);
  }

  return (
    <>
      <h1>{message}</h1>
      <form>
        <StuffsDetails />
      </form>
      <button onClick={AddProduct}>Submit</button>
    </>
  );
}

export default Inserting;
