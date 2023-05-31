"use client";
import { useState } from "react";
import axios from "axios";
import StuffAmoutn from "../form/Stuff_amoutn";

async function SendData(value) {
  try {
    const request = await axios.post("http://localhost:3001/supplies", value);
    console.log(request);
  } catch (error) {
    console.log(error);
  }
}

function Inserting() {
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState();
  async function getData(e) {
    e.preventDefault();
    const array1 = {
      id: e.target["documentNo"].value,
      date: e.target["date"].value,
      details: e.target["details"].value,
    };
    const array2 = [];

    for (let x = 1; x <= amount; x++) {
      array2.push({
        itemName: e.target[`item${x}`].value,
        amount: e.target[`amount${x}`].value,
        unit: e.target[`unit${x}`].value,
        price: e.target[`price${x}`].value,
      });
    }
    const finalObject = { head: array1, body: array2 };
    SendData(finalObject);
  }
  return (
    <>
      <h1>{message}</h1>
      <div className="flex justify-start items-center gap-3 p-3 w-1/3">
        <label className="form-control دخ">تعداد اجناس</label>
        <input
          type="number"
          min={1}
          max={100}
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="تعداد جنس"
        />
      </div>
      <form className="" onSubmit={getData}>
        <StuffAmoutn amount={amount} />
      </form>
    </>
  );
}

export default Inserting;
