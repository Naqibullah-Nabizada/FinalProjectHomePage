"use client"

import Navbar from "@/components/Navbar.jsx";
import { useFormik } from "formik";
import Image from "next/image.js";
import Link from "next/link.js";
import { useContext } from "react";
import * as Yup from "yup";
import { AuthContext } from "../context/context.js";
import "./auth.css";

const formSchema = Yup.object({
  email: Yup.string().required("ایمیل شما الزامی است"),
  password: Yup.string().required("رمز عبور شما الزامی است")
})

const Login = () => {

  const { login, error } = useContext(AuthContext)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      login(values);
    },
    validationSchema: formSchema
  })


  return (
    <section className="">

      <Navbar title="معاونیت مالی و اداری" />
      <hr />
      <div className="col-12 flex justify-center items-center">

        <div className="col-4 p-3 border rounded shadow-lg mx-[5rem]">
          <h2 className="text-center h5 my-2">ورود به پنل مدیریت</h2>
          <hr />
          <form className="my-3" onSubmit={formik.handleSubmit}>

            <h1 className="text-center text-danger py-2">
              {error}
            </h1>
            <div className="mb-3">
              <label className="form-label">ایمیل</label>
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  placeholder="مثال * Example@gmail.com"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                />
                <p className="text-danger mt-2">
                  {formik.touched.email && formik.errors.email}
                </p>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">رمز عبور</label>
              <div className="">
                <input
                  type="password"
                  className="form-control"
                  placeholder="رمز عبور"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                />
                <p className="text-danger mt-2">
                  {formik.touched.password && formik.errors.password}
                </p>
              </div>
            </div>
            <div className="flex my-4">

              <button type="submit" className="btn btn-outline-primary">ورود</button>

              <Link href='/' className='btn btn-outline-dark flex mx-3'>انصراف</Link>

            </div>
          </form>
        </div>

        <div>
          <Image src={"/images/finance/password.gif"} width={500} height={500} alt="Login Page" />
        </div>

      </div>

    </section>
  );
};

export default Login;
