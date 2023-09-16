"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";

import { useForm } from "react-hook-form";

import { useEffect } from "react";
import { toast } from "react-toastify";

const Add = () => {

  const router = useRouter();

  const [parentBabs, setParentBabs] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:5000/ParentBab");
    setParentBabs(data);
  }

  const submitForm = async (data) => {
    try {
      await axios.post("http://localhost:5000/Fasel", data);
      router.push("/finance/forms/fasel");
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
              <label className="form-label">باب</label>
              <select
                className={`form-control form-control-sm mb-3 ${errors.parentBabsId ? 'is-invalid' : ''}`}
                {...register("parentBabsId", { required: true })}
              >
                {
                  parentBabs.map((bab) => (
                    <option value={bab.id} key={bab.id}>{bab.name}</option>
                  ))
                }
              </select>
              {errors.parentBabsId && <span className="invalid-feedback">فیلد باب الزامی است.</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">فصل</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-3 ${errors.code ? 'is-invalid' : ''}`}
                placeholder="فصل"
                autoFocus
                {...register("code", { required: true })}
              />
              {errors.code && <span className="invalid-feedback">فیلد فصل الزامی است.</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">توضیحات</label>
              <textarea
                className={`form-control form-control-sm mb-3 ${errors.desc ? 'is-invalid' : ''}`}
                {...register("desc", { required: true })}
                col="3"
                placeholder="توضیحات"
              >
              </textarea>
              {errors.desc && <span className="invalid-feedback">فیلد توضیحات الزامی است.</span>}
            </div>

          </section>

          <div className="flex">
            <button type="submit" className="btn btn-outline-success flex mr-10 ml-5">
              ثبت
              <FaPlus className="mx-1 bg-inherit" />
            </button>

            <Link href="/finance/forms/fasel" className="btn btn-outline-secondary flex">
              <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default Add;
