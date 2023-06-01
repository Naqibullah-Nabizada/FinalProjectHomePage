"use client";
import { useState } from "react";
import axios from "axios";
import StuffAmoutn from "../form/Stuff_amoutn";

async function SendData(value) {
  try {
    const res = await axios.post("http://localhost:3001/supplies", value);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

function Inserting() {
  // amount is use to understand how much stuffes there are to generate for them input field
  const [amount, setAmount] = useState();
  // get information from form
  async function getData(e) {
    e.preventDefault();
    // the main data like document No , content, and date. these data are common becase of that seperate from others
    const head = {
      id: e.target["documentNo"].value,
      date: e.target["date"].value,
      details: e.target["details"].value,
    };
    const body = [];
    // get data for form by use of amount
    for (let x = 1; x <= amount; x++) {
      body.push({
        itemName: e.target[`item${x}`].value,
        amount: e.target[`amount${x}`].value,
        unit: e.target[`unit${x}`].value,
        price: e.target[`price${x}`].value,
      });
    }
    // join both array, and object. head ,and body
    const finalObject = { head, body };
    SendData(finalObject);
  }
  return (
    <>
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
