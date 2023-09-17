"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";

import { toast } from "react-toastify";

const Add = () => {

  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitForm = async (data) => {
    try {
      await axios.post("http://localhost:5000/Appropriation", data);
      router.push("/finance/forms/budget/appropriation");
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
          فورم ثبت تخصیصات
        </h3>
      </header>
      <hr />
      <main>
        <form onSubmit={handleSubmit(submitForm)}>
          <section className="w-[95%] flex justify-between flex-wrap mx-auto my-3">
            <div className="w-[32%]">
              <label className="form-label">کد</label>
              <input
                type="text"
                {...register("code", { required: true, min: 0, pattern: /^[0-9]+$/i, minLength: 3, maxLength: 15, })}
                className={`form-control form-control-sm mb-3 ${errors.code ? 'is-invalid' : ''}`}
                placeholder="کد"
                autoFocus
              />
              {errors.code && errors.code.type === "required" && <span className="invalid-feedback">کد الزامی است.</span>}
              {errors.code && errors.code.type === "pattern" && <span className="invalid-feedback">کد باید عدد باشد.</span>}
              {errors.code && errors.code.type === "min" && <span className="invalid-feedback">کد باید یک عدد مثب باشد.</span>}
              {errors.code && errors.code.type === "minLength" && <span className="invalid-feedback">کد حداقل باید سه کارکتر باشد.</span>}
              {errors.code && errors.code.type === "maxLength" && <span className="invalid-feedback">کد حداکثر باید 15 کارکتر باشد..</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">نام به دری</label>
              <input
                type="text"
                {...register("dari_name", { required: true, minLength: 3, maxLength: 15 })}
                className={`form-control form-control-sm mb-3 ${errors.dari_name ? 'is-invalid' : ''}`}
                placeholder="نام به دری"
              />
              {errors.dari_name && errors.dari_name.type === "required" && <span className="invalid-feedback">نام دری الزامی است.</span>}
              {errors.dari_name && errors.dari_name.type === "minLength" && <span className="invalid-feedback">نام دری باید حداقل سه کارکتر باشد.</span>}
              {errors.dari_name && errors.dari_name.type === "maxLength" && <span className="invalid-feedback">نام دری باید حداکثر 30 کارکتر باشد..</span>}
              {/* {errors.dari_name && errors.code.type === "pattern" && <span className="invalid-feedback">فیلد نام دری الزامی است.</span>} */}
            </div>

            <div className="w-[32%]">
              <label className="form-label">نام به پشتو</label>
              <input
                type="text"
                {...register("pashto_name", { required: true })}
                className={`form-control form-control-sm mb-3 ${errors.pashto_name ? 'is-invalid' : ''}`}
                placeholder="نام به پشتو"
              />
              {errors.pashto_name && <span className="invalid-feedback">فیلد نام پشتو الزامی است.</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">نام به انگلیسی</label>
              <input
                type="text"
                {...register("eng_name", { required: true })}
                className={`form-control form-control-sm mb-3 ${errors.eng_name ? 'is-invalid' : ''}`}
                placeholder="نام به انگلیسی"
              />
              {errors.eng_name && <span className="invalid-feedback">فیلد نام انگلیسی الزامی است.</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">مقدار بودجه</label>
              <input
                type="text"
                {...register("amount", { required: true })}
                className={`form-control form-control-sm mb-3 ${errors.amount ? 'is-invalid' : ''}`}
                placeholder="مقدار بودجه"
              />
              {errors.amount && <span className="invalid-feedback">فیلد مقدار بودجه الزامی است.</span>}
            </div>

          </section>

          <div className="flex">
            <button type="submit" className="btn btn-outline-success flex mr-10 ml-5">
              ثبت
              <FaPlus className="mx-1 bg-inherit" />
            </button>

            <Link href="./finance/forms/budget/appropriation" className="btn btn-outline-secondary flex">
              <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default Add;
