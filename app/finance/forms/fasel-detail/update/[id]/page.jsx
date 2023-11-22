"use client";

import axios from "axios";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";

//! Shamsi Date
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import DatePicker, { DateObject } from "react-multi-date-picker";

const Update = () => {

  const { id } = useParams();
  const router = useRouter();

  const [error, setError] = useState(null);
  const [fasels, setFasel] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, // Add the setValue function from react-hook-form
  } = useForm({});
  const [selectedDate, setSelectedDate] = useState(null); // Selected date state

  useEffect(() => {
    fetchFaselData();
    fetchFaselDetailData();
  }, []);

  const fetchFaselData = async () => {
    const { data } = await axios.get("http://localhost:5000/Fasel");
    setFasel(data);
  };

  const fetchFaselDetailData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/FaselDetails/${id}`);
      setValue("faselId", data[0].faselId);
      setValue("desc", data[0].desc);
      setValue("reference", data[0].reference);
      setValue("private_num", data[0].private_num);
      setValue("refinement", data[0].refinement);
      setValue("after_pay", data[0].after_pay);
      setValue("befor_pay", data[0].befor_pay);
      setValue("previous_considered", data[0].previous_considered);
      setValue("commitment", data[0].commitment);
      setValue("income", data[0].income);
      setValue("transfer", data[0].transfer);
      setValue("commitment_transfer", data[0].commitment_transfer);

      const fetchedDate = new Date(data[0].date);
      setSelectedDate(fetchedDate);
    } catch (err) {
      console.log(err);
    }
  };

  const submitForm = async (data) => {
    try {
      const formData = { ...data, date: selectedDate };
      const res = await axios.put(`http://localhost:5000/FaselDetail/${id}`, formData);
      if (res.data.error) {
        setError(res.data.error)
      } else {
        router.push("/finance/forms/fasel-detail");
        toast("معلومات جدید با موفقیت اضافه شد", {
          hideProgressBar: false,
          autoClose: 5000,
          type: "success",
          position: "top-right",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };


  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Update the form's value for the date field
    setValue("date", date);
  };

  return (
    <>
      <header>
        <h3 className="my-4 text-center text-xl">
          فورم ثبت فصل ها
        </h3>
      </header>
      <hr />
      <main>
        {
          error !== null ? (
            <div className="text-center alert alert-danger mt-3">{error}</div>
          ) : null
        }
        <form onSubmit={handleSubmit(submitForm)}>
          <section className="w-[95%] flex justify-between flex-wrap mx-auto my-3">

            <div className="w-[32%]">
              <label className="form-label">فصل</label>
              <select
                className={`form-control form-control-sm mb-2 ${errors.faselId ? 'is-invalid' : ''}`}
                {...register("faselId", { required: true })}
              >
                {
                  fasels.map((fasel) => (
                    <option value={fasel.id} key={fasel.id}>{fasel.code}</option>
                  ))
                }
              </select>
              {errors.faselId && <span className="invalid-feedback">فیلد فصل الزامی است.</span>}

            </div>

            <div className="w-[32%]">
              <label className="form-label">تاریخ</label>
              <DatePicker
                months={["حمل", "ثور", "جوزا", "سرطان", "اسد", "سنبله", "میزان", "عقرب", "قوس", "جدی", "دلو", "حوت"]}
                hideOnScroll
                hideWeekDays
                editable={true}
                placeholder="تاریخ"
                currentDate={
                  new DateObject({ calendar: persian })
                }
                animations={[transition()]}
                calendar={persian}
                locale={persian_fa}
                inputClass="custom-input"
                value={selectedDate} // Use the selectedDate state as the value
                defaultValue={selectedDate}
                onChange={handleDateChange}
                name="date"
              />
              {errors.date && <span className="invalid-feedback">فیلد تاریخ الزامی است.</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">توضیحات</label>
              <textarea
                className={`form-control form-control-sm mb-2 ${errors.desc ? 'is-invalid' : ''}`}
                {...register("desc", { required: true })}
                col="3"
                placeholder="توضیحات"
              >
              </textarea>
              {errors.desc && <span className="invalid-feedback">فیلد توضیحات الزامی است.</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">مراجعه</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.reference ? 'is-invalid' : ''}`}
                {...register("reference", { required: true })}
                placeholder="مراجعه"
              />
              {errors.reference && <span className="invalid-feedback">فیلد مراجعه الزامی است.</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">نمبر خصوصی</label>
              <input
                type="number"
                className={`form-control form-control-sm mb-2 ${errors.private_num ? 'is-invalid' : ''}`}
                {...register("private_num", { required: true })}
                placeholder="نمبر خصوصی"
              />
              {errors.private_num && <span className="invalid-feedback">فیلد نمبر خصوصی الزامی است.</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">مراجعه تصفیه</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.refinement ? 'is-invalid' : ''}`}
                {...register("refinement", { required: false })}
                placeholder="مراجعه تصفیه"
              />
              {errors.refinement && <span className="invalid-feedback">فیلد مراجعه تصفیه الزامی است.</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">تادیه بعدی</label>
              <input
                type="number"
                className={`form-control form-control-sm mb-2 ${errors.after_pay ? 'is-invalid' : ''}`}
                {...register("after_pay", { required: false })}
                placeholder="تادیه بعدی"
              />
              {errors.after_pay && <span className="invalid-feedback">فیلد تادیه بعدی الزامی است.</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">تادیه پیشکی</label>
              <input
                type="number"
                className={`form-control form-control-sm mb-2 ${errors.befor_pay ? 'is-invalid' : ''}`}
                {...register("befor_pay", { required: false })}
                placeholder="تادیه پیشکی"
              />
              {errors.befor_pay && <span className="invalid-feedback">فیلد تادیه پیشکی الزامی است.</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">پیشکی محسوب شده</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.previous_considered ? 'is-invalid' : ''}`}
                {...register("previous_considered", { required: false })}
                placeholder="پیشکی محسوب شده"
              />
              {errors.previous_considered && <span className="invalid-feedback">فیلد پیشکی محسوب شده الزامی است.</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">تعهد تصفیه شده</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.commitment ? 'is-invalid' : ''}`}
                {...register("commitment", { required: false })}
                placeholder="تعهد تصفیه شده"
              />
              {errors.commitment && <span className="invalid-feedback">فیلد تعهد تصفیه شده الزامی است.</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">عاید</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.income ? 'is-invalid' : ''}`}
                {...register("income", { required: false })}
                placeholder="عاید"
              />
              {errors.income && <span className="invalid-feedback">فیلد عاید الزامی است.</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">حواله تخصیصات</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.transfer ? 'is-invalid' : ''}`}
                {...register("transfer", { required: false })}
                placeholder="حواله تخصیصات"
              />
              {errors.transfer && <span className="invalid-feedback">فیلد حواله تخصیصات الزامی است.</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">حواله تخصیصات تعهد شده</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.commitment_transfer ? 'is-invalid' : ''}`}
                {...register("commitment_transfer", { required: false })}
                placeholder="حواله تخصیصات تعهد شده"
              />
              {errors.commitment_transfer && <span className="invalid-feedback">فیلد حواله تخصیصات تعهد شده الزامی است.</span>}
            </div>

          </section>

          <div className="flex">
            <button type="submit" className="btn btn-warning flex mr-10 ml-5">
              ویرایش
              <FaPlus className="mx-1 bg-inherit" />
            </button>

            <Link href="./finance/forms/fasel-detail" className="btn btn-outline-secondary flex">
              <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default Update;