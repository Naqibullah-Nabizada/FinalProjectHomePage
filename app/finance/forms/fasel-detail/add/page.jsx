"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";

import { useForm } from "react-hook-form";

import { toast } from "react-toastify";

const Add = () => {

  const router = useRouter();

  const [fasels, setFasel] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:5000/Fasel");
    setFasel(data);
  }


  const submitForm = async (data) => {
    try {
      await axios.post("http://localhost:5000/FaselDetail", data);
      router.push("/finance/forms/fasel-detail");
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

  return (
    <>
      <header>
        <h3 className="my-4 text-center text-xl">
          فورم ثبت فصل ها
        </h3>
      </header>
      <hr />
      <main>
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
              <input
                type="date"
                className={`form-control form-control-sm mb-2 ${errors.date ? 'is-invalid' : ''}`}
                {...register("date", { required: true })}
                placeholder="تاریخ"
              />
              {errors.date && <span className="invalid-feedback">فیلد تاریخ الزامی است.</span>}
            </div>

            {/* <div className="w-[32%]">
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
                value={date}
                onChange={setDate}
                name="date"
              />
              {errors.date && <span className="invalid-feedback">فیلد تاریخ الزامی است.</span>}
            </div> */}


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
                {...register("refinement", { required: true })}
                placeholder="مراجعه تصفیه"
              />
              {errors.refinement && <span className="invalid-feedback">فیلد مراجعه تصفیه الزامی است.</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">تادیه بعدی</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.after_pay ? 'is-invalid' : ''}`}
                {...register("after_pay", { required: true })}
                placeholder="تادیه بعدی"
              />
              {errors.after_pay && <span className="invalid-feedback">فیلد تادیه بعدی الزامی است.</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">تادیه پیشکی</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.befor_pay ? 'is-invalid' : ''}`}
                {...register("befor_pay", { required: true })}
                placeholder="تادیه پیشکی"
              />
              {errors.befor_pay && <span className="invalid-feedback">فیلد تادیه پیشکی الزامی است.</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">پیشکی محسوب شده</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.previous_considered ? 'is-invalid' : ''}`}
                {...register("previous_considered", { required: true })}
                placeholder="پیشکی محسوب شده"
              />
              {errors.previous_considered && <span className="invalid-feedback">فیلد پیشکی محسوب شده الزامی است.</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">تعهد تصفیه شده</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.commitment ? 'is-invalid' : ''}`}
                {...register("commitment", { required: true })}
                placeholder="تعهد تصفیه شده"
              />
              {errors.commitment && <span className="invalid-feedback">فیلد تعهد تصفیه شده الزامی است.</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">عاید</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.income ? 'is-invalid' : ''}`}
                {...register("income", { required: true })}
                placeholder="عاید"
              />
              {errors.income && <span className="invalid-feedback">فیلد عاید الزامی است.</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">حواله تخصیصات</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.transfer ? 'is-invalid' : ''}`}
                {...register("transfer", { required: true })}
                placeholder="حواله تخصیصات"
              />
              {errors.transfer && <span className="invalid-feedback">فیلد حواله تخصیصات الزامی است.</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">حواله تخصیصات تعهد شده</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.commitment_transfer ? 'is-invalid' : ''}`}
                {...register("commitment_transfer", { required: true })}
                placeholder="حواله تخصیصات تعهد شده"
              />
              {errors.commitment_transfer && <span className="invalid-feedback">فیلد حواله تخصیصات تعهد شده الزامی است.</span>}
            </div>

          </section>

          <div className="flex">
            <button type="submit" className="btn btn-outline-success flex mr-10 ml-5">
              ثبت
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

export default Add;
