"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";

// import { useForm } from "react-hook-form";

import { toast } from "react-toastify";

const Add = () => {

  const router = useRouter();

  const [name, setName] = useState("");
  const [year, setYear] = useState("");

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   watch
  // } = useForm({});

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/ParentBab", {
        name,year
      });
      router.push("/finance/forms/parent");
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
        <form onSubmit={submitForm}>
          <section className="w-[95%] flex justify-between flex-wrap mx-auto my-3">
            <div className="w-[32%]">
              <label className="form-label">نام باب</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-sm mb-3"
                placeholder="نام باب"
                onChange={(e) => setName(e.target.value)}
                autoFocus
                required
                // {
                // ...register("name", {
                //   required: true
                // })
                // }
              />
              {/* {
                errors.name && errors.name.type == "required" &&
                (
                  <div className="text-danger mt-2">
                    فیلد نام الزامی است.
                  </div>
                )
              } */}
            </div>

            <div className="w-[32%]">
              <label className="form-label">سال</label>
              <input
                type="number"
                name="year"
                className="form-control form-control-sm mb-3"
                placeholder="سال"
                onChange={(e) => setYear(e.target.value)}
                required
                // {
                // ...register("year", {
                //   required: true
                // })
                // }
              />
              {/* {
                errors.year && errors.year.type == "required" &&
                (
                  <div className="text-danger mt-2">
                    فیلد سال الزامی است.
                  </div>
                )
              } */}
            </div>

          </section>

          <div className="flex">
            <button type="submit" className="btn btn-outline-success flex mr-10 ml-5">
              ثبت
              <FaPlus className="mx-1 bg-inherit" />
            </button>

            <Link href="./finance/forms/parent" className="btn btn-outline-secondary flex">
              <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default Add;
