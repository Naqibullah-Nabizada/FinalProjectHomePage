"use Client";
import React, { useState } from "react";

import StuffAmoutn from "./Stuff_amoutn";
const StuffsDetails = () => {
  const [amount, setAmount] = useState();
  return (
    <>
      <section className="w-[95%] flex justify-between flex-wrap mx-auto my-3">
        <div className="w-[20%]">
          <label className="form-label h3">نمبر مکتوب</label>
          <input
            type="number"
            min={1}
            className="form-control form-control-xl mb-3"
            placeholder="نمبر مکتوب"
          />
        </div>
        <div className="w-[20%]">
          <label className="form-label h3"> تاریخ</label>
          <input
            type="date"
            className="form-control form-control-xl mb-3"
            placeholder="تاریخ "
          />
        </div>
        <div className="w-[20%]">
          <label className="form-label h3">تشریحات</label>
          <textarea className="form-control form-control-xl" cols="30" rows="1"></textarea>
        </div>
        <div className="w-[20%]">
          <label className="form-label h3">تعداد جنس</label>
          <input
            type="number"
            min={1}
            max={100}
            className="form-control form-control-xl mb-3"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="تعداد جنس"
          />
        </div>
      </section>
      <section className="w-[100%]">
        <StuffAmoutn amount={amount} />
      </section>    
    </>
  );
};

export default StuffsDetails;
