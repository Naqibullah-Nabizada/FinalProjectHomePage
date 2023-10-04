"use client";

import axios from "axios";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

const Update = () => {
  const router = useRouter();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/Appropriation/${id}`);
      setValue("code", data[0].code);
      setValue("dari_name", data[0].dari_name);
      setValue("pashto_name", data[0].pashto_name);
      setValue("eng_name", data[0].eng_name);
      setValue("amount", data[0].amount);
    } catch (error) {
      console.log(error);
    }
  };

  const submitForm = async (data) => {
    try {
      await axios.put(`http://localhost:5000/Appropriation/${id}`, data);
      router.push("/finance/forms/budget/appropriation");
      toast('معلومات جدید با موفقیت اضافه شد', {
        hideProgressBar: false,
        autoClose: 5000,
        type: 'success',
        position: 'top-right'
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <header>
        <h3 className="my-4 text-center text-xl">فورم ویرایش تخصیصات</h3>
      </header>
      <hr />
      <main>
        <form onSubmit={handleSubmit(submitForm)}>
          <section className="w-[95%] flex justify-between flex-wrap mx-auto my-3">
            <div className="w-[32%]">
              <label className="form-label">کد</label>
              <input
                type="text"
                {...register("code", {
                  required: true,
                  min: 0,
                  pattern: /^[0-9]+$/i,
                  minLength: 1,
                  maxLength: 15,
                })}
                className={`form-control form-control-sm mb-3 ${errors.code ? "is-invalid" : ""
                  }`}
                placeholder="کد"
                autoFocus
              />
              {errors.code && errors.code.type === "required" && (
                <span className="invalid-feedback">کد الزامی است.</span>
              )}
              {errors.code && errors.code.type === "pattern" && (
                <span className="invalid-feedback">
                  کد باید عدد باشد.
                </span>
              )}
              {errors.code && errors.code.type === "min" && (
                <span className="invalid-feedback">
                  کد باید یک عدد مثب باشد.
                </span>
              )}
              {errors.code && errors.code.type === "minLength" && (
                <span className="invalid-feedback">
                  کد حداقل باید 1 کارکتر باشد.
                </span>
              )}
              {errors.code && errors.code.type === "maxLength" && (
                <span className="invalid-feedback">
                  کد حداکثر باید 15 کارکتر باشد..
                </span>
              )}
            </div>

            <div className="w-[32%]">
              <label className="form-label">نام به دری</label>
              <input
                type="text"
                {...register("dari_name", {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                  pattern: /^[آ-ی][آ-ی\s]*$/,
                })}
                className={`form-control form-control-sm mb-3 ${errors.dari_name ? "is-invalid" : ""
                  }`}
                placeholder="نام به دری"
              />
              {errors.dari_name && errors.dari_name.type === "required" && (
                <span className="invalid-feedback">نام دری الزامی است.</span>
              )}
              {errors.dari_name && errors.dari_name.type === "pattern" && (
                <span className="invalid-feedback">
                  نام باید به حروف دری باشد.
                </span>
              )}
              {errors.dari_name && errors.dari_name.type === "minLength" && (
                <span className="invalid-feedback">
                  نام به دری باید حداقل 3 کاراکتر باشد.
                </span>
              )}
              {errors.dari_name && errors.dari_name.type === "maxLength" && (
                <span className="invalid-feedback">
                  نام به دری باید حداکثر 30 کاراکتر باشد.
                </span>
              )}
            </div>

            <div className="w-[32%]">
              <label className="form-label">نام به پشتو</label>
              <input
                type="text"
                {...register("pashto_name", {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                  pattern: /^[آ-ی][آ-ی\s]*$/,
                })}
                className={`form-control form-control-sm mb-3 ${errors.pashto_name ? "is-invalid" : ""
                  }`}
                placeholder="نام به پشتو"
              />
              {errors.pashto_name && errors.pashto_name.type === "required" && (
                <span className="invalid-feedback">
                  نام به پشتو الزامی است.
                </span>
              )}
              {errors.pashto_name && errors.pashto_name.type === "pattern" && (
                <span className="invalid-feedback">
                  نام باید به حروف پشتو باشد.
                </span>
              )}
              {errors.pashto_name && errors.pashto_name.type === "minLength" && (
                <span className="invalid-feedback">
                  نام به پشتو باید حداقل 3 کاراکتر باشد.
                </span>
              )}
              {errors.pashto_name && errors.pashto_name.type === "maxLength" && (
                <span className="invalid-feedback">
                  نام به پشتو باید حداکثر 30 کاراکتر باشد.
                </span>
              )}
            </div>

            <div className="w-[32%]">
              <label className="form-label">نام به انگلیسی</label>
              <input
                type="text"
                {...register("eng_name", {
                  required: true,
                  minLength: 3,
                  maxLength: 50,
                  pattern: /^[a-zA-Z][a-zA-Z\s]*$/,
                })}
                className={`form-control form-control-sm mb-3 ${errors.eng_name ? "is-invalid" : ""
                  }`}
                placeholder="نام به انگلیسی"
              />
              {errors.eng_name && errors.eng_name.type === "required" && (
                <span className="invalid-feedback">
                  نام انگلیسی الزامی است.
                </span>
              )}
              {errors.eng_name && errors.eng_name.type === "pattern" && (
                <span className="invalid-feedback">
                  نام باید به حروف انگلیسی باشد.
                </span>
              )}
              {errors.eng_name && errors.eng_name.type === "minLength" && (
                <span className="invalid-feedback">
                  نام به انگلیسی باید حداقل 3 کاراکتر باشد.
                </span>
              )}
              {errors.eng_name && errors.eng_name.type === "maxLength" && (
                <span className="invalid-feedback">
                  نام به انگلیسی باید حداکثر 50 کاراکتر باشد.
                </span>
              )}
            </div>

            <div className="w-[32%]">
              <label className="form-label">مقدار</label>
              <input
                type="text"
                {...register("amount", {
                  required: true,
                  min: 0,
                  pattern: /^[0-9]+$/i,
                })}
                className={`form-control form-control-sm mb-3 ${errors.amount ? "is-invalid" : ""
                  }`}
                placeholder="مقدار"
              />
              {errors.amount && errors.amount.type === "required" && (
                <span className="invalid-feedback">مقدار الزامی است.</span>
              )}
              {errors.amount && errors.amount.type === "pattern" && (
                <span className="invalid-feedback">
                  مقدار باید عدد باشد.
                </span>
              )}
              {errors.amount && errors.amount.type === "min" && (
                <span className="invalid-feedback">
                  مقدار باید ی
                </span>
              )}
            </div>

          </section>

          <div className="flex">
            <button type="submit" className="btn btn-warning flex mr-10 ml-5">
              ویرایش
              <FaPlus className="mx-1 bg-inherit" />
            </button>

            <Link href="./finance/forms/budget/appropriation" className="btn btn-outline-secondary flex">
              <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
            </Link>
          </div>
        </form>
      </main >
    </>
  );
};

export default Update;
