"use client";

import axios from "axios";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";

//! Shamsi Date
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import DatePicker, { DateObject } from "react-multi-date-picker";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Add = () => {

  const router = useRouter();
  const { id } = useParams();
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, // Add the setValue function from react-hook-form
  } = useForm({});
  const [selectedDate, setSelectedDate] = useState(null); // Selected date state

  const submitForm = async (data) => {
    const formData = { ...data, date: selectedDate };
    try {
      const res = await axios.put(`http://localhost:5000/TwelveSection/${id}`, formData);
      if (res.data.error) {
        setError(res.data.error)
      } else {
        router.push("/finance/income/ma-forms");
        toast('معلومات جدید با موفقیت اضافه شد',
          {
            hideProgressBar: false,
            autoClose: 5000,
            type: 'success',
            position: 'top-right'
          });
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Update the form's value for the date field
    setValue("pendant_date", date);
  };

  return (
    <>
      <header>
        <h3 className="my-4 text-center text-xl">
          فورم ثبت فیس محصلین برنامه های ماستری
        </h3>
      </header>
      <hr />
      <main>
        {
          error !== null ? (
            <div className="alert alert-danger text-center mt-2">{error}</div>
          ) : null
        }
        <form onSubmit={handleSubmit(submitForm)}>

          <section className="w-[95%] flex justify-between flex-wrap mx-auto my-3">

            <div className="w-[32%]">
              <label className="form-label">نمبر آویز</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.pendant_num ? 'is-invalid' : ''}`}
                {...register("pendant_num", { required: true, min: 1, pattern: /^[0-9]+$/i, minLength: 2, maxLength: 15 })}
                placeholder="نمبر آویز"
              />
              {errors.pendant_num && errors.pendant_num.type === "required" && <span className="invalid-feedback">نمبر آویز الزامی است.</span>}
              {errors.pendant_num && errors.pendant_num.type === "pattern" && <span className="invalid-feedback">نمبر آویز باید عدد باشد.</span>}
              {errors.pendant_num && errors.pendant_num.type === "min" && <span className="invalid-feedback">نمبر آویز باید یک عدد مثب باشد.</span>}
              {errors.pendant_num && errors.pendant_num.type === "minLength" && <span className="invalid-feedback">نمبر آویز حداقل باید 2 کارکتر باشد.</span>}
              {errors.pendant_num && errors.pendant_num.type === "maxLength" && <span className="invalid-feedback">نمبر آویز حداکثر باید 15 کارکتر باشد..</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label d-block">تاریخ آویز</label>
              <DatePicker
                months={["حمل", "ثور", "جوزا", "سرطان", "اسد", "سنبله", "میزان", "عقرب", "قوس", "جدی", "دلو", "حوت"]}
                hideOnScroll
                hideWeekDays
                editable={true}
                placeholder="تاریخ آویز"
                currentDate={
                  new DateObject({ calendar: persian })
                }
                animations={[transition()]}
                calendar={persian}
                locale={persian_fa}
                inputClass="custom-input"
                value={selectedDate} // Use the selectedDate state as the value
                onChange={handleDateChange} // Call the handleDateChange function
                name="pendant_date"
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">ملاحظات</label>
              <textarea
                rows="3"
                placeholder="ملاحظات"
                className={`form-control form-control-sm mb-2 ${errors.remark ? 'is-invalid' : ''}`}
                {...register("remark")}
              ></textarea>
            </div>

          </section>

          <div className="flex">
            <button type="submit" className="btn btn-outline-success flex mr-10 ml-5">
              ثبت
              <FaPlus className="mx-1 bg-inherit" />
            </button>

            <Link href="./finance/income/ma-forms" className="btn btn-outline-secondary flex">
              <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default Add;
