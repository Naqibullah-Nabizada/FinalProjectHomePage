"use client"

import { useFormik } from "formik";
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
      <div className=""></div>
      <div className="">
        <div className="container">
          <div className="">
            <h1 className="text-center mt-5 mb-2">
              ورود به پنل مدیریت
            </h1>
            <hr />
            <div className="col-4 mx-auto border rounded shadow p-3">

              <form className="box" onSubmit={formik.handleSubmit}>

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
                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-outline-primary"
                  >
                    ورود
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
