"use client";

import Navbar from "@/components/Navbar";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";

import { toast } from "react-toastify";

const Add = () => {

  const router = useRouter();

  const [error, setError] = useState();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitForm = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/Appropriation", data);
      if (res.data.error) {
        setError(res.data.error)
      } else {
        router.push("/finance/forms/budget");
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

  return (
    <>
      <Navbar title="مدیریت مالی و حسابی" />
      <hr />
      <header>
        <h3 className="my-2 text-center text-xl">
          فورم ثبت تخصیصات
        </h3>
      </header>
      <hr />
      <main>
        <div>{error}</div>
        <form onSubmit={handleSubmit(submitForm)}>
          <section className="w-[95%] flex justify-between flex-wrap mx-auto my-3">

            <div className="w-[32%]">
              <label className="form-label">سال</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-2 ${errors.year ? 'is-invalid' : ''}`}
                {...register("year", { required: true, min: 1, pattern: /^(139[0-9]|14[0-4][0-9]|1450)*$/, minLength: 4, maxLength: 4 })}
                placeholder="سال"
                autoFocus
              />
              {errors.year && errors.year.type === "required" && <span className="invalid-feedback">سال الزامی است.</span>}
              {errors.year && errors.year.type === "pattern" && <span className="invalid-feedback">فرمت سال معتبر نیست.</span>}
              {errors.year && errors.year.type === "min" && <span className="invalid-feedback">فرمت سال معتبر نیست.</span>}
              {errors.year && errors.year.type === "minLength" && <span className="invalid-feedback">فرمت سال معتبر نیست.</span>}
              {errors.year && errors.year.type === "maxLength" && <span className="invalid-feedback">فرمت سال معتبر نیست..</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">کود</label>
              <input
                type="text"
                {...register("code", { required: true, min: 0, pattern: /^[0-9]+$/i, minLength: 1, maxLength: 15, })}
                className={`form-control form-control-sm mb-3 ${errors.code ? 'is-invalid' : ''}`}
                placeholder="کود"
              />
              {errors.code && errors.code.type === "required" && <span className="invalid-feedback">کود الزامی است.</span>}
              {errors.code && errors.code.type === "pattern" && <span className="invalid-feedback">کود باید عدد باشد.</span>}
              {errors.code && errors.code.type === "min" && <span className="invalid-feedback">کود باید یک عدد مثب باشد.</span>}
              {errors.code && errors.code.type === "minLength" && <span className="invalid-feedback">کود حداقل باید 1 کارکتر باشد.</span>}
              {errors.code && errors.code.type === "maxLength" && <span className="invalid-feedback">کود حداکثر باید 15 کارکتر باشد..</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">نام به دری</label>
              <input
                type="text"
                {...register("dari_name", { required: true, minLength: 3, maxLength: 30, pattern: /^[آ-ی][آ-ی\s]*$/ })}
                className={`form-control form-control-sm mb-3 ${errors.dari_name ? 'is-invalid' : ''}`}
                placeholder="نام به دری"
              />
              {errors.dari_name && errors.dari_name.type === "required" && <span className="invalid-feedback">نام دری الزامی است.</span>}
              {errors.dari_name && errors.dari_name.type === "pattern" && <span className="invalid-feedback">نام باید به حروف دری باشد.</span>}
              {errors.dari_name && errors.dari_name.type === "minLength" && <span className="invalid-feedback">نام دری باید حداقل سه کارکتر باشد.</span>}
              {errors.dari_name && errors.dari_name.type === "maxLength" && <span className="invalid-feedback">نام دری باید حداکثر 30 کارکتر باشد..</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">نام به پشتو</label>
              <input
                type="text"
                {...register("pashto_name", { required: true, minLength: 3, maxLength: 30, pattern: /^[آ-ی-آ-ي][آ-ی-آ-ي\s]*$/ })}
                className={`form-control form-control-sm mb-3 ${errors.pashto_name ? 'is-invalid' : ''}`}
                placeholder="نام به پشتو"
              />
              {errors.pashto_name && errors.pashto_name.type === "required" && <span className="invalid-feedback">نام پشتو الزامی است.</span>}
              {errors.pashto_name && errors.pashto_name.type === "pattern" && <span className="invalid-feedback">نام باید به حروف پشتو باشد.</span>}
              {errors.pashto_name && errors.pashto_name.type === "minLength" && <span className="invalid-feedback">نام پشتو باید حداقل سه کارکتر باشد.</span>}
              {errors.pashto_name && errors.pashto_name.type === "maxLength" && <span className="invalid-feedback">نام پشتو باید حداکثر 30 کارکتر باشد..</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">نام به انگلیسی</label>
              <input
                type="text"
                {...register("eng_name", { required: true, minLength: 3, maxLength: 30, pattern: /^[A-Za-z][A-Za-z\s]*$/ })}
                className={`form-control form-control-sm mb-3 ${errors.eng_name ? 'is-invalid' : ''}`}
                placeholder="نام به انگلیسی"
              />
              {errors.eng_name && errors.eng_name.type === "required" && <span className="invalid-feedback">نام انگلیسی الزامی است.</span>}
              {errors.eng_name && errors.eng_name.type === "pattern" && <span className="invalid-feedback">نام باید به حروف انگلیسی باشد.</span>}
              {errors.eng_name && errors.eng_name.type === "minLength" && <span className="invalid-feedback">نام انگلیسی باید حداقل سه کارکتر باشد.</span>}
              {errors.eng_name && errors.eng_name.type === "maxLength" && <span className="invalid-feedback">نام انگلیسی باید حداکثر 30 کارکتر باشد..</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">مقدار بودجه</label>
              <input
                type="text"
                {...register("amount", { required: true, min: 0, pattern: /^(?:\d+(?:\.\d*)?|\.\d*)$/ })}

                className={`form-control form-control-sm mb-3 ${errors.amount ? 'is-invalid' : ''}`}
                placeholder="مقدار بودجه"
              />
              {errors.amount && errors.amount.type === "required" && <span className="invalid-feedback">فیلد مقدار بودجه الزامی است.</span>}
              {errors.amount && errors.amount.type === "pattern" && <span className="invalid-feedback">مقدار بودجه باید به عدد باشد.</span>}
              {errors.amount && errors.amount.type === "minLength" && <span className="invalid-feedback">مقدار بودجه باید حداقل سه کارکتر باشد.</span>}
            </div>

          </section>

          <div className="flex">
            <button type="submit" className="btn btn-outline-success flex mr-10 ml-5">
              ثبت
              <FaPlus className="mx-1 bg-inherit" />
            </button>

            <Link href="./finance/forms/budget" className="btn btn-outline-secondary flex">
              <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default Add;
