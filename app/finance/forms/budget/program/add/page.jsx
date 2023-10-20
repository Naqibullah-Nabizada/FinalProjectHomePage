// "use client";

// import axios from "axios";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { FaArrowCircleRight, FaPlus } from "react-icons/fa";

// import { toast } from "react-toastify";

// const Add = () => {

//   const router = useRouter();

//   const [code, setCode] = useState("");
//   const [desc, setDesc] = useState("");
//   const [amount, setAmount] = useState("");

//   const submitForm = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/Program", {
//         code, desc, amount
//       });
//       router.push("/finance/forms/budget/program");
//       toast('معلومات جدید با موفقیت اضافه شد',
//         {
//           hideProgressBar: false,
//           autoClose: 5000,
//           type: 'success',
//           position: 'top-right'
//         });
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   return (
//     <>
//       <header>
//         <h3 className="my-4 text-center text-xl">
//           فورم ثبت پروگرام
//         </h3>
//       </header>
//       <hr />
//       <main>
//         <form onSubmit={submitForm}>
//           <section className="w-[95%] flex justify-between flex-wrap mx-auto my-3">
//             <div className="w-[32%]">
//               <label className="form-label">کود</label>
//               <input
//                 type="text"
//                 name="code"
//                 className="form-control form-control-sm mb-3"
//                 placeholder="کود"
//                 onChange={(e) => setCode(e.target.value)}
//                 autoFocus
//                 required
//               />
//             </div>

//             <div className="w-[32%]">
//               <label className="form-label">توضیحات</label>
//               <input
//                 type="text"
//                 name="desc"
//                 className="form-control form-control-sm mb-3"
//                 placeholder="توضیحات"
//                 onChange={(e) => setDesc(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="w-[32%]">
//               <label className="form-label">مقدار بودجه</label>
//               <input
//                 type="text"
//                 name="amount"
//                 className="form-control form-control-sm mb-3"
//                 placeholder="مقدار بودجه"
//                 onChange={(e) => setAmount(e.target.value)}
//                 required
//               />
//             </div>

//           </section>

//           <div className="flex">
//             <button type="submit" className="btn btn-outline-success flex mr-10 ml-5">
//               ثبت
//               <FaPlus className="mx-1 bg-inherit" />
//             </button>

//             <Link href="./finance/forms/budget/program" className="btn btn-outline-secondary flex">
//               <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
//             </Link>
//           </div>
//         </form>
//       </main>
//     </>
//   );
// };

// export default Add;
























"use client"

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
      await axios.post("http://localhost:5000/Program", data);
      router.push("/finance/forms/budget/program");
      toast('New information added successfully', {
        hideProgressBar: false,
        autoClose: 5000,
        type: 'success',
        position: 'top-right'
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <header>
        <h3 className="my-4 text-center text-xl">
          فورم ثبت پروگرام
        </h3>
      </header>
      <hr />
      <main>
        <form onSubmit={handleSubmit(submitForm)}>
          <section className="w-[95%] flex justify-between flex-wrap mx-auto my-3">
            <div className="w-[32%]">
              <label className="form-label">کود</label>
              <input
                type="text"
                {...register("code", { required: true, min: 0, pattern: /^[0-9]+$/i, minLength: 3, maxLength: 15, })}
                className={`form-control form-control-sm mb-3 ${errors.code ? 'is-invalid' : ''}`}
                placeholder="کود"
                autoFocus
              />
              {errors.code && errors.code.type === "required" && <span className="invalid-feedback">کود الزامی است.</span>}
              {errors.code && errors.code.type === "pattern" && <span className="invalid-feedback">کود باید عدد باشد.</span>}
              {errors.code && errors.code.type === "min" && <span className="invalid-feedback">کود باید یک عدد مثب باشد.</span>}
              {errors.code && errors.code.type === "minLength" && <span className="invalid-feedback">کود حداقل باید سه کارکتر باشد.</span>}
              {errors.code && errors.code.type === "maxLength" && <span className="invalid-feedback">کود حداکثر باید 15 کارکتر باشد..</span>}
            </div>

            <div className="w-[32%]">
              <label className="form-label">توضیحات</label>
              <input
                type="text"
                {...register("desc", { required: true })}
                className={`form-control form-control-sm mb-3 ${errors.desc ? 'is-invalid' : ''}`}
                placeholder="توضیحات"
              />
              {errors.desc && <span className="invalid-feedback">فیلد توضیحات الزامی است.</span>}
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

            <Link href="./finance/forms/budget/program" className="btn btn-outline-secondary flex">
              <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default Add;