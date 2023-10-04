"use client";

import axios from "axios";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

const Add = () => {
  const router = useRouter();

  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, // Add the setValue function from react-hook-form
  } = useForm({});
  const [selectedDate, setSelectedDate] = useState(null); // Selected date state


  const submitForm = async (data) => {
    try {
      // Add the selected date to the form data
      const formData = { ...data, date: selectedDate };
      await axios.put(`http://localhost:5000/FaselDetails/${id}`, formData);
      router.push("/finance/forms");
      toast("معلومات جدید با موفقیت اضافه شد", {
        hideProgressBar: false,
        autoClose: 5000,
        type: "success",
        position: "top-right",
      });
    } catch (err) {
      console.log(err);
    }
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
        <form onSubmit={handleSubmit(submitForm)}>
          <section className="w-[95%] flex justify-between flex-wrap mx-auto my-3">

            {/* <div className="w-[32%]">
              <label className="form-label">مراجعه تصفیه</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.refinement ? 'is-invalid' : ''}`}
                {...register("refinement", { required: false })}
                placeholder="مراجعه تصفیه"
              />
              {errors.refinement && <span className="invalid-feedback">فیلد مراجعه تصفیه الزامی است.</span>}
            </div> */}

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