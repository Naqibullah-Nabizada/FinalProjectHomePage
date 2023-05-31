"use client";

// import axios from "axios";
import Link from "next/link";
// import { useState } from "react";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";


//! Shamsi Date
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import DatePicker, { DateObject } from "react-multi-date-picker";

// import { toast } from "react-toastify";

// import { useRouter } from 'next/router';
const AddDate = () => {

  // const [MAForm, setMAForm] = useState({});

  // const setMAFormInfo = (e) => {
  //   setMAForm({
  //     ...MAForm,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const submitForm = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:5000/MAForms", MAForm);
  //     // router.push("/income/ma_forms");
  //     toast('معلومات جدید با موفقیت اضافه شد',
  //       {
  //         hideProgressBar: true,
  //         autoClose: 5000,
  //         type: 'success',
  //         position: 'top-right'
  //       })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  return (
    <>
      <main>
        <form>
          <section className="w-[95%] flex justify-between flex-wrap mx-auto my-3">
          <div className="w-[32%]">
              <label className="form-label">تاریخ تولد</label>
              <DatePicker
                months={["حمل", "ثور", "جوزا", "سرطان", "اسد", "سنبله", "میزان", "عقرب", "قوس", "جدی", "دلو", "حوت"]}
                hideOnScroll
                hideWeekDays
                editable={false}
                placeholder="تاریخ تولد"
                currentDate={
                  new DateObject({ calendar: persian })
                }
                animations={[transition()]}
                calendar={persian}
                locale={persian_fa}
                inputClass="custom-input"
                // value={tariff_date}
                // onChange={setTariff_date}
                name="tariff_date"
                required
              />
            </div>

          </section>

          <div className="flex">
            <button
              type="submit"
              className="btn btn-outline-success flex mr-10 ml-5"
            >
              ثبت
              <FaPlus className="mx-1 bg-inherit" />
            </button>
            <Link
              href="/hr/recruitment"
              className="btn btn-outline-secondary flex"
            >
              <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default AddDate;
