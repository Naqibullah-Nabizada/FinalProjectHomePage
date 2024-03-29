"use client"

import axios from "axios";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

const Update = () => {

  const { id } = useParams();
  const router = useRouter();

  const [error, setError] = useState(null);
  const [appropriations, setAppropriation] = useState([]);
  const [fasel, setFasel] = useState([]);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  const { mainBudget, budget } = fasel.reduce(
    (accumulator, item) => {
      return {
        mainBudget: item.main_amount,
        budget: item.amount,
      };
    },
    { mainBudget: 0, budget: 0 }
  );


  // Fetch data for the selected item
  const fetchData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/single-Fasel/${id}`);

      setFasel(data);

      setValue("appropriationId", data[0].appropriationId);
      setValue("year", data[0].year);
      setValue("code", data[0].code);
      setValue("desc", data[0].desc);
      setValue("amount", data[0].amount);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch all appropriations
  const fetchAppropriations = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/Appropriations");
      setAppropriation(data);
    } catch (error) {
      console.log(error);
    }
  };


  // Fetch data on component mount
  useEffect(() => {
    fetchAppropriations();
    fetchData();
  }, []);

  // Handle form submission
  const submitForm = async (data) => {
    try {
      const res = await axios.put(`http://localhost:5000/Fasel/${id}`, data);
      if (res.data.error) {
        setError(res.data.error)
      } else {
        router.push("/finance/forms/fasel");
        toast.success('معلومات جدید با موفقیت اضافه شد', {
          hideProgressBar: false,
          autoClose: 5000,
          position: 'top-right'
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header>
        <h3 className="my-4 text-center text-xl">
          فورم ویرایش فصل ها
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
              <select
                className={`form-control form-control-sm mb-3 ${errors.parentBabsId ? 'is-invalid' : ''}`}
                {...register("appropriationId", { required: true })}
              >
                {appropriations.map((app) => (
                  <option value={app.id} key={app.id}>{app.code}</option>
                ))}
              </select>
              {errors.appropriationId && <span className="invalid-feedback">کود الزامی است.</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">فصل</label>
              <input
                type="text"
                className={`form-control form-control-sm mb-3 ${errors.code ? 'is-invalid' : ''}`}
                placeholder="فصل"
                autoFocus
                {...register("code", { required: true, min: 0, pattern: /^[0-9]+$/i, minLength: 1, maxLength: 15 })}
              />
              {errors.code && errors.code.type === "required" && <span className="invalid-feedback">فصل الزامی است.</span>}
              {errors.code && errors.code.type === "pattern" && <span className="invalid-feedback">فصل باید عدد باشد.</span>}
              {errors.code && errors.code.type === "min" && <span className="invalid-feedback">فصل باید یک عدد مثب باشد.</span>}
              {errors.code && errors.code.type === "minLength" && <span className="invalid-feedback">فصل حداقل باید 1 کارکتر باشد.</span>}
              {errors.code && errors.code.type === "maxLength" && <span className="invalid-feedback">فصل حداکثر باید 15 کارکتر باشد.</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">توضیحات</label>
              <textarea
                className={`form-control form-control-sm mb-3 ${errors.desc ? 'is-invalid' : ''}`}
                {...register("desc", { required: true })}
                rows={3}
                placeholder="توضیحات"
              > </textarea>
              {errors.desc && <span className="invalid-feedback">توضیحات الزامی است.</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">مبلغ</label>
              {
                budget === mainBudget ? (
                  <input
                    type="text"
                    className={`form-control form-control-sm mb-3 ${errors.amount ? 'is-invalid' : ''}`}
                    placeholder="مبلغ"
                    {...register("amount", { required: true, min: 0, pattern: /^[0-9]+$/i })}
                  />
                ) : (
                  <input
                    type="text"
                    className={`form-control form-control-sm mb-3 ${errors.amount ? 'is-invalid' : ''}`}
                    placeholder="مبلغ"
                    disabled
                    {...register("amount", { required: true, min: 0, pattern: /^[0-9]+$/i })}
                  />
                )
              }
              {errors.amount && errors.amount.type === "required" && <span className="invalid-feedback">مبلغ الزامی است.</span>}
              {errors.amount && errors.amount.type === "pattern" && <span className="invalid-feedback">مبلغ باید عدد باشد.</span>}
              {errors.amount && errors.amount.type === "min" && <span className="invalid-feedback">مبلغ باید عدد مثب باشد.</span>}
            </div>
          </section>
          <section className="flex">
            <button type="submit" className="btn btn-warning flex mr-10 ml-5">
              ویرایش
              <FaPlus className="mx-1 bg-inherit" />
            </button>
            <Link href="/finance/forms/fasel" className="btn btn-outline-secondary flex">
              <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
            </Link>
          </section>
        </form>
      </main>
    </>
  );
};

export default Update;