"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";

//! Shamsi Date
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import DatePicker, { DateObject } from "react-multi-date-picker";

import { useState } from "react";
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
      await axios.post("http://localhost:5000/NMDTN", formData);
      router.push("/finance/income/en-deploma");
      toast('معلومات جدید با موفقیت اضافه شد',
        {
          hideProgressBar: false,
          autoClose: 5000,
          type: 'success',
          position: 'top-right'
        });
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
          فورم ثبت دیپلوم زبان انگلیسی
        </h3>
      </header>
      <hr />
      <main>
        <form onSubmit={handleSubmit(submitForm)}>

          <section className="w-[95%] flex justify-between flex-wrap mx-auto my-3">

              <input
                value={"EnDeploma"}
                {...register("type")}
                hidden
              />

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
              <label className="form-label">پوهنځی</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.faculty ? 'is-invalid' : ''}`}
                {...register("faculty", { required: true, minLength: 3, maxLength: 30, pattern: /^[آ-ی-آ-ي][آ-ی-آ-ي\s]*$/ })}
                placeholder="پوهنځی"
              />
              {errors.faculty && errors.faculty.type === "required" && <span className="invalid-feedback">پوهنځی الزامی است.</span>}
              {errors.faculty && errors.faculty.type === "pattern" && <span className="invalid-feedback">پوهنځی باید به حروف دری یا پشتو باشد.</span>}
              {errors.faculty && errors.faculty.type === "minLength" && <span className="invalid-feedback">پوهنځی باید حداقل سه کارکتر باشد.</span>}
              {errors.faculty && errors.faculty.type === "maxLength" && <span className="invalid-feedback">پوهنځی باید حداکثر 30 کارکتر باشد..</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">دیپارتمنت</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.department ? 'is-invalid' : ''}`}
                {...register("department", { required: true, minLength: 3, maxLength: 30, pattern: /^[آ-ی-آ-ي][آ-ی-آ-ي\s]*$/ })}
                placeholder="دیپارتمنت"
              />
              {errors.department && errors.department.type === "required" && <span className="invalid-feedback">دیپارتمنت الزامی است.</span>}
              {errors.department && errors.department.type === "pattern" && <span className="invalid-feedback">دیپارتمنت باید به حروف دری یا پشتو باشد.</span>}
              {errors.department && errors.department.type === "minLength" && <span className="invalid-feedback">دیپارتمنت باید حداقل سه کارکتر باشد.</span>}
              {errors.department && errors.department.type === "maxLength" && <span className="invalid-feedback">دیپارتمنت باید حداکثر 30 کارکتر باشد..</span>}
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
              <label className="form-label">سمستر</label>
              <select
                className={`form-control form-control-sm mb-2 ${errors.year ? 'is-invalid' : ''}`}
                {...register("semester")}
              >
                <option value={"1"}>اول</option>
                <option value={"2"}>دوم</option>
                <option value={"3"}>سوم</option>
                <option value={"4"}>چهارم</option>
              </select>
            </div>

            <div className="w-[32%]">
              <label className="form-label">داخله</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.internel_fees ? 'is-invalid' : ''}`}
                {...register("internel_fees", { required: true, min: 1, pattern: /^[0-9]+$/i, minLength: 3, maxLength: 10 })}
                placeholder="داخله"
              />
              {errors.internel_fees && errors.internel_fees.type === "required" && <span className="invalid-feedback">داخله الزامی است.</span>}
              {errors.internel_fees && errors.internel_fees.type === "pattern" && <span className="invalid-feedback">داخله باید عدد باشد.</span>}
              {errors.internel_fees && errors.internel_fees.type === "min" && <span className="invalid-feedback">داخله باید یک عدد مثب باشد.</span>}
              {errors.internel_fees && errors.internel_fees.type === "minLength" && <span className="invalid-feedback">داخله حداقل باید 3 کارکتر باشد.</span>}
              {errors.internel_fees && errors.internel_fees.type === "maxLength" && <span className="invalid-feedback">داخله حداکثر باید 10 کارکتر باشد..</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">فیس</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.fees ? 'is-invalid' : ''}`}
                {...register("fees", { required: true, min: 1, pattern: /^[0-9]+$/i, minLength: 4, maxLength: 10 })}
                placeholder="فیس"
              />
              {errors.fees && errors.fees.type === "required" && <span className="invalid-feedback">فیس الزامی است.</span>}
              {errors.fees && errors.fees.type === "pattern" && <span className="invalid-feedback">فیس باید عدد باشد.</span>}
              {errors.fees && errors.fees.type === "min" && <span className="invalid-feedback">فیس باید یک عدد مثب باشد.</span>}
              {errors.fees && errors.fees.type === "minLength" && <span className="invalid-feedback">فیس حداقل باید 4 کارکتر باشد.</span>}
              {errors.fees && errors.fees.type === "maxLength" && <span className="invalid-feedback">فیس حداکثر باید 10 کارکتر باشد..</span>}
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
                required
              />
            </div>

          </section>

          <div className="flex">
            <button type="submit" className="btn btn-outline-success flex mr-10 ml-5">
              ثبت
              <FaPlus className="mx-1 bg-inherit" />
            </button>

            <Link href="./finance/income/en-deploma" className="btn btn-outline-secondary flex">
              <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default Add;
