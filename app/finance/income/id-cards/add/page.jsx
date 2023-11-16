"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
      await axios.post("http://localhost:5000/IdCards", formData);
      router.push("/finance/income/id-cards");
      toast('معلومات جدید با موفقیت اضافه شد',
        {
          hideProgressBar: false,
          autoClose: 5000,
          type: 'success',
          position: 'top-right'
        })
    } catch (err) {
      console.log(err)
    }
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Update the form's value for the date field
    setValue("tariff_date", date);
  };


  return (
    <>
      <header>
        <h3 className="my-4 text-center text-xl">
          فورم ثبت عواید کارت ها
        </h3>
      </header>
      <hr />
      <main>
        <form onSubmit={handleSubmit(submitForm)}>
          <section className="w-[95%] flex justify-between flex-wrap mx-auto my-3">
            
            <div className="w-[32%]">
              <label className="form-label">نام تحویل دهنده</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.name ? 'is-invalid' : ''}`}
                {...register("name", { required: true, minLength: 3, maxLength: 30, pattern: /^[آ-ی-آ-ي][آ-ی-آ-ي\s]*$/ })}
                placeholder="نام تحویل دهنده"
              />
              {errors.name && errors.name.type === "required" && <span className="invalid-feedback">نام تحویل دهنده الزامی است.</span>}
              {errors.name && errors.name.type === "pattern" && <span className="invalid-feedback">نام باید به حروف دری یا پشتو باشد.</span>}
              {errors.name && errors.name.type === "minLength" && <span className="invalid-feedback">نام باید حداقل سه کارکتر باشد.</span>}
              {errors.name && errors.name.type === "maxLength" && <span className="invalid-feedback">نام باید حداکثر 30 کارکتر باشد..</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">نام پدر تحویل دهنده</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.father_name ? 'is-invalid' : ''}`}
                {...register("father_name", { required: true, minLength: 3, maxLength: 30, pattern: /^[آ-ی-آ-ي][آ-ی-آ-ي\s]*$/ })}
                placeholder="نام پدر تحویل دهنده"
              />
              {errors.father_name && errors.father_name.type === "required" && <span className="invalid-feedback">نام پدر تحویل دهنده دهنده الزامی است.</span>}
              {errors.father_name && errors.father_name.type === "pattern" && <span className="invalid-feedback">نام پدر باید به حروف دری یا پشتو باشد.</span>}
              {errors.father_name && errors.father_name.type === "minLength" && <span className="invalid-feedback">نام پدر باید حداقل سه کارکتر باشد.</span>}
              {errors.father_name && errors.father_name.type === "maxLength" && <span className="invalid-feedback">نام پدر باید حداکثر 30 کارکتر باشد..</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">سال</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.year ? 'is-invalid' : ''}`}
                {...register("year", { required: true, min: 1, pattern: /^(139[0-9]|14[0-4][0-9]|1450)*$/, minLength: 4, maxLength: 4 })}
                placeholder="سال"
              />
              {errors.year && errors.year.type === "required" && <span className="invalid-feedback">سال الزامی است.</span>}
              {errors.year && errors.year.type === "pattern" && <span className="invalid-feedback">فرمت سال معتبر نیست.</span>}
              {errors.year && errors.year.type === "min" && <span className="invalid-feedback">فرمت سال معتبر نیست.</span>}
              {errors.year && errors.year.type === "minLength" && <span className="invalid-feedback">فرمت سال معتبر نیست.</span>}
              {errors.year && errors.year.type === "maxLength" && <span className="invalid-feedback">فرمت سال معتبر نیست..</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">تعداد محصلین</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.count ? 'is-invalid' : ''}`}
                {...register("count", { required: true, min: 1, pattern: /^[0-9]+$/i, minLength: 1, maxLength: 10 })}
                placeholder="تعداد محصلین"
              />
              {errors.count && errors.count.type === "required" && <span className="invalid-feedback">تعداد محصلین الزامی است.</span>}
              {errors.count && errors.count.type === "pattern" && <span className="invalid-feedback">تعداد محصلین باید عدد باشد.</span>}
              {errors.count && errors.count.type === "min" && <span className="invalid-feedback">تعداد محصلین باید یک عدد مثب باشد.</span>}
              {errors.count && errors.count.type === "minLength" && <span className="invalid-feedback">تعداد محصلین حداقل باید 1 کارکتر باشد.</span>}
              {errors.count && errors.count.type === "maxLength" && <span className="invalid-feedback">تعداد محصلین حداکثر باید 10 کارکتر باشد..</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">مرجع</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.reference ? 'is-invalid' : ''}`}
                {...register("reference", { required: true, minLength: 3, maxLength: 30, pattern: /^[آ-ی-آ-ي][آ-ی-آ-ي\s]*$/ })}
                placeholder="مرجع"
              />
              {errors.reference && errors.reference.type === "required" && <span className="invalid-feedback">مرجع الزامی است.</span>}
              {errors.reference && errors.reference.type === "pattern" && <span className="invalid-feedback">مرجع باید به حروف دری یا پشتو باشد.</span>}
              {errors.reference && errors.reference.type === "minLength" && <span className="invalid-feedback">مرجع باید حداقل سه کارکتر باشد.</span>}
              {errors.reference && errors.reference.type === "maxLength" && <span className="invalid-feedback">مرجع باید حداکثر 30 کارکتر باشد..</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">قیمت کارت</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.cost ? 'is-invalid' : ''}`}
                {...register("cost", { required: true, min: 1, pattern: /^[0-9]+$/i, minLength: 3, maxLength: 4 })}
                placeholder="قیمت کارت"
              />
              {errors.cost && errors.cost.type === "required" && <span className="invalid-feedback">قیمت کارت الزامی است.</span>}
              {errors.cost && errors.cost.type === "pattern" && <span className="invalid-feedback">قیمت کارت باید عدد باشد.</span>}
              {errors.cost && errors.cost.type === "min" && <span className="invalid-feedback">قیمت کارت باید یک عدد مثب باشد.</span>}
              {errors.cost && errors.cost.type === "minLength" && <span className="invalid-feedback">قیمت کارت حداقل باید 3 کارکتر باشد.</span>}
              {errors.cost && errors.cost.type === "maxLength" && <span className="invalid-feedback">قیمت کارت حداکثر باید 4 کارکتر باشد..</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">نمبر تعرفه</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.tariff_num ? 'is-invalid' : ''}`}
                {...register("tariff_num", { required: true, min: 1, pattern: /^[0-9]+$/i, minLength: 2, maxLength: 15 })}
                placeholder="نمبر تعرفه"
              />
              {errors.tariff_num && errors.tariff_num.type === "required" && <span className="invalid-feedback">نمبر تعرفه الزامی است.</span>}
              {errors.tariff_num && errors.tariff_num.type === "pattern" && <span className="invalid-feedback">نمبر تعرفه باید عدد باشد.</span>}
              {errors.tariff_num && errors.tariff_num.type === "min" && <span className="invalid-feedback">نمبر تعرفه باید یک عدد مثب باشد.</span>}
              {errors.tariff_num && errors.tariff_num.type === "minLength" && <span className="invalid-feedback">نمبر تعرفه حداقل باید 2 کارکتر باشد.</span>}
              {errors.tariff_num && errors.tariff_num.type === "maxLength" && <span className="invalid-feedback">نمبر تعرفه حداکثر باید 15 کارکتر باشد..</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label d-block">تاریخ تعرفه</label>
              <DatePicker
                months={["حمل", "ثور", "جوزا", "سرطان", "اسد", "سنبله", "میزان", "عقرب", "قوس", "جدی", "دلو", "حوت"]}
                hideOnScroll
                hideWeekDays
                editable={true}
                placeholder="تاریخ تعرفه"
                currentDate={
                  new DateObject({ calendar: persian })
                }
                animations={[transition()]}
                calendar={persian}
                locale={persian_fa}
                inputClass="custom-input"
                value={selectedDate} // Use the selectedDate state as the value
                onChange={handleDateChange} // Call the handleDateChange function
                name="tariff_date"
              />
            </div>

          </section>

          <div className="flex">
            <button type="submit" className="btn btn-outline-success flex mr-10 ml-5">
              ثبت
              <FaPlus className="mx-1 bg-inherit" />
            </button>

            <Link href="./finance/income/id-cards" className="btn btn-outline-secondary flex">
              <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default Add;
