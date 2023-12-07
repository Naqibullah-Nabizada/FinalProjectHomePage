"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";

import { useForm } from "react-hook-form";

import { AuthContext } from "@/app/finance/admin/context/context";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Add = () => {

  const { admin, token } = useContext(AuthContext);
  const router = useRouter();

  const [error, setError] = useState(null);
  const [years, setYears] = useState([]);
  const [appropriations, setAppropriation] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  useEffect(() => {
    fetchData();
    fetchApproYears();
  }, [])

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:5000/Appropriations");
    setAppropriation(data);
  }

  const fetchApproYears = async () => {
    const { data } = await axios.get("http://localhost:5000/Appropriations/years");
    setYears(data);
  }


  const submitForm = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/Fasel", data);
      if (res.data.error) {
        setError(res.data.error);
      } else {
        router.push("/finance/forms/fasel");
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
      {
        token !== null && admin == 1 ? (
          <>
            <header>
              <h3 className="my-2 text-center text-xl">فورم ثبت فصل ها</h3>
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
                    <label className="form-label">سال</label>
                    <select
                      className={`form-control form-control-sm mb-3 ${errors.parentBabsId ? 'is-invalid' : ''}`}
                      {...register("year", { required: true })}
                      autoFocus
                    >
                      {
                        years.map((year) => (
                          <option value={year.year} key={year.id}>{year.year}</option>
                        ))
                      }
                    </select>
                    {errors.appropriation && <span className="invalid-feedback">سال الزامی است.</span>}
                  </div>

                  <div className="w-[32%]">
                    <label className="form-label">کود</label>
                    <select
                      className={`form-control form-control-sm mb-3 ${errors.parentBabsId ? 'is-invalid' : ''}`}
                      {...register("appropriationId", { required: true })}
                    >
                      {
                        appropriations.map((app) => (
                          <option value={app.id} key={app.id}>{app.code}</option>
                        ))
                      }
                    </select>
                    {errors.appropriation && <span className="invalid-feedback">کود الزامی است.</span>}
                  </div>

                  <div className="w-[32%]">
                    <label className="form-label">فصل</label>
                    <input
                      type="text"
                      className={`form-control form-control-sm mb-3 ${errors.code ? 'is-invalid' : ''}`}
                      placeholder="فصل"
                      {...register("code", { required: true, min: 0, pattern: /^[0-9]+$/i, minLength: 1, maxLength: 15, })}
                    />
                    {errors.code && errors.code.type === "required" && <span className="invalid-feedback">فصل الزامی است.</span>}
                    {errors.code && errors.code.type === "pattern" && <span className="invalid-feedback">فصل باید عدد باشد.</span>}
                    {errors.code && errors.code.type === "min" && <span className="invalid-feedback">فصل باید یک عدد مثب باشد.</span>}
                    {errors.code && errors.code.type === "minLength" && <span className="invalid-feedback">فصل حداقل باید 1 کارکتر باشد.</span>}
                    {errors.code && errors.code.type === "maxLength" && <span className="invalid-feedback">فصل حداکثر باید 15 کارکتر باشد..</span>}
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

                  <div className="w-[32%]">
                    <label className="form-label">مقدار تخصیص</label>
                    <input
                      type="text"
                      className={`form-control form-control-sm mb-3 ${errors.amount ? 'is-invalid' : ''}`}
                      placeholder="مقدار تخصیص"
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

                  <Link href="/finance/forms/fasel" className="btn btn-outline-secondary flex">
                    <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
                  </Link>
                </div>
              </form>
            </main>
          </>
        ) : (
          <>
            <section className="container col-8 flex justify-center align-items-center">
              <div>
                <p className="alert alert-info text-center">برای وارد شدن به پنل مدیریت ابتدا وارد حساب کاربری خود شوید!</p>
                <Link href="finance/admin/auth" className="block mx-auto btn btn-outline-primary col-6">ورود به پنل مدیریت</Link>
              </div>
              <div>
                <Image src={"/images/finance/register.svg"} alt='register' width={500} height={500} />
              </div>
            </section>
          </>
        )
      }
    </>
  );
};

export default Add;
