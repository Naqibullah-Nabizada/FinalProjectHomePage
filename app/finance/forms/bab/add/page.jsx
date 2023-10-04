"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";

import { useForm } from "react-hook-form";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Add = () => {

  const router = useRouter();

  const [kind_of, setKindOf] = useState("appropriations");

  const [appropriations, setAppropriation] = useState([]);
  const [programs, setProgram] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  useEffect(() => {
    getAppropriations();
    getPrograms();
  }, [])

  const getAppropriations = async () => {
    const { data } = await axios.get("http://localhost:5000/Appropriations");
    setAppropriation(data);
  }

  const getPrograms = async () => {
    const { data } = await axios.get("http://localhost:5000/Programs");
    setProgram(data);
  }

  const submitForm = async (data) => {
    try {
      console.log(register)
      await axios.post("http://localhost:5000/ParentBab", data);
      router.push("/finance/forms/bab");
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
          فورم ثبت باب های اصلی
        </h3>
      </header>
      <hr />
      <main>
        <form onSubmit={handleSubmit(submitForm)}>
          <section className="w-[95%] flex justify-between flex-wrap mx-auto my-3">

            <div className="w-[32%]">
              <label className="form-label">باب</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-3 ${errors.name ? 'is-invalid' : ''}`}
                placeholder="باب"
                autoFocus
                {...register("name", { required: true, min: 0, minLength: 1, maxLength: 6, pattern: /^(?:\d+(?:\.\d*)?|\.\d*)$/ })}
              />
              {errors.name && errors.name.type === "required" && <span className="invalid-feedback">باب الزامی است.</span>}
              {errors.name && errors.name.type === "min" && <span className="invalid-feedback">باب باید عدد مثبت باشد.</span>}
              {errors.name && errors.name.type === "minLength" && <span className="invalid-feedback">باب حداقل باید 1 کارکتر باشد.</span>}
              {errors.name && errors.name.type === "maxLength" && <span className="invalid-feedback">باب حداکثر میتواند با 6 کارکتر باشد.</span>}
              {errors.name && errors.name.type === "pattern" && <span className="invalid-feedback">باب باید به عدد باشد.</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">توضیحات</label>
              <textarea
                className={`form-control form-control-sm mb-3 ${errors.desc ? 'is-invalid' : ''}`}
                {...register("desc", { required: true, minLength: 3 })}
                col="3"
                placeholder="توضیحات"
              >
              </textarea>
              {errors.desc && errors.desc.type === "required" && <span className="invalid-feedback">فیلد توضیحات الزامی است.</span>}
              {errors.desc && errors.desc.type === "minLength" && <span className="invalid-feedback">فیلد توضیحات باید حداقل 3 کارکتر باشد.</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">تخصیص از</label>
              <select className="form-select form-select-sm mb-3"
                {...register("kind_of", { required: true })}
                onChange={(e) => setKindOf(e.target.value)}
              >
                <option value={"appropriations"}>تخصیصات</option>
                <option value={"program"}>پروگرام</option>
              </select>
            </div>

            <div className="w-[32%]">
              <label className="form-label">انتخاب نوع تخصیص</label>
              <select
                className={`form-control form-control-sm mb-3`}
                {...register("kind_of_budget", { required: true })}
              >
                {
                  kind_of === "appropriations" ?
                    appropriations.map((app) => (
                      <option value={app.code} key={app.id}>{app.code}</option>
                    )) :
                    programs.map((program) => (
                      <option value={program.code} key={program.id}>{program.code}</option>
                    ))
                }
              </select>
            </div>

            <div className="w-[32%]">
              <label className="form-label">مقدار بودجه</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-3 ${errors.amount ? 'is-invalid' : ''}`}
                placeholder="مقدار بودجه"
                {...register("amount", { required: true, min: 0, minLength: 1, pattern: /^(?:\d+(?:\.\d*)?|\.\d*)$/ })}
              />
              {errors.amount && errors.amount.type === "required" && <span className="invalid-feedback">مقدار بودجه الزامی است.</span>}
              {errors.amount && errors.amount.type === "min" && <span className="invalid-feedback">مقدار بودجه باید یک عدد مثبت باشد.</span>}
              {errors.amount && errors.amount.type === "minLength" && <span className="invalid-feedback">مقدار بودجه حداقل باید یک کارکتر باشد.</span>}
              {errors.amount && errors.amount.type === "pattern" && <span className="invalid-feedback">مقدار بودجه باید به عدد باشد.</span>}
            </div>

          </section>

          <div className="flex">
            <button type="submit" className="btn btn-outline-success flex mr-10 ml-5">
              ثبت
              <FaPlus className="mx-1 bg-inherit" />
            </button>

            <Link href="/finance/forms/bab" className="btn btn-outline-secondary flex">
              <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default Add;
