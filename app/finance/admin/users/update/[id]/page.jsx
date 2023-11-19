"use client"

import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useContext, useEffect } from "react";
import * as Yup from "yup";
import { AuthContext } from "../../../context/context";


const formSchema = Yup.object({
  name: Yup.string()
    .min(3, "تعداد کارکتر نباید کمتر از 3 باشد")
    .max(15, "تعداد کارکتر نباید بیشتر از 15 باشد")
    .required("وارد کردن نام کاربری الزامی است"),
  email: Yup.string()
    .email("ایمیل معتبر وارد کنید")
    .required("وارد کردن ایمیل الزامی است"),
  password: Yup.string()
    .min(4, "تعداد کارکتر نباید کمتر از 4 باشد")
    .max(20, "تعداد کارکتر نباید بیشتر از 20 باشد")
    .required("وارد کردن رمز عبور الزامی است"),
  confPassword: Yup.string()
    .min(4, "تعداد کارکتر نباید کمتر از 4 باشد")
    .max(20, "تعداد کارکتر نباید بیشتر از 20 باشد")
    .required("وارد کردن تکرار رمز عبور الزامی است"),
  isAdmin: Yup.string().required("وارد کردن نقش کاربری الزامی است"),
});

const UpdateUser = () => {

  const { id } = useParams();

  const { resgisterError, token, admin, user, getSingleUser, updateUser, getAllUsers } = useContext(AuthContext);

  useEffect(() => {
    getSingleUser(id);
    getAllUsers();
  }, []);

  const formik = useFormik({
    initialValues: {
      id: id,
      name: user.name,
      email: user.email,
      password: "",
      confPassword: "",
      isAdmin: "",
    },
    onSubmit: (values) => {
      updateUser(values);
    },
    validationSchema: formSchema,
  });

  return (
    <>
      {
        token !== null && admin == 2 ? (
          <section className="flex justify-content-center align-items-center">

            <div className="col-4 mx-[6rem] border rounded shadow p-3">
              <h2 className="text-center h5 mb-2">ثبت نام کاربر جدید</h2>
              <form onSubmit={formik.handleSubmit}>
                <div className="flex">
                  <p className="text-danger">{resgisterError}</p>
                </div>
                <div className="mb-3">
                  <label className="form-label">نام کاربری</label>
                  <div className="control">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="مثال * Admin"
                      defaultValue={user.name}
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur("name")}
                    />
                    <p className="text-danger mt-2">
                      {formik.touched.name && formik.errors.name}
                    </p>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">ایمیل</label>
                  <div className="control">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="مثال * Example@gmail.com"
                      defaultValue={user.email}
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
                  <div className="control">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="مثال * 123456"
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
                  <label className="form-label">تکرار رمز عبور</label>
                  <div className="control">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="مثال * 123456"
                      value={formik.values.confPassword}
                      onChange={formik.handleChange("confPassword")}
                      onBlur={formik.handleBlur("confPassword")}
                    />
                    <p className="text-danger mt-2">
                      {formik.touched.confPassword && formik.errors.confPassword}
                    </p>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">نقش کاربری</label>
                  <select
                    className="form-select"
                    value={formik.values.isAdmin}
                    onChange={formik.handleChange("isAdmin")}
                    onBlur={formik.handleBlur("isAdmin")}
                  >
                    <option>انتخاب کنید</option>
                    <option value="0">کاربر</option>
                    <option value="1">مدیر</option>
                  </select>
                  <p className="text-danger mt-2">
                    {formik.touched.isAdmin && formik.errors.isAdmin}
                  </p>
                </div>

                <div>
                  <button type="submit" className="btn btn-warning">ویرایش کاربر</button>
                  <Link href={"/finance/admin/users"} className="btn btn-outline-dark mx-3">انصراف</Link>
                </div>
              </form>
            </div>

            <div>
              <Image src={"/images/finance/register.svg"} width={600} height={600} alt="Register Page" />
            </div>

          </section>
        ) : (
          <>
            <section className="container col-8 flex justify-center align-items-center">
              <div>
                <p className="alert alert-info text-center">برای وارد شدن به پنل مدیریت ابتدا وارد حساب کاربری خود شوید!</p >
                <Link href="finance/admin/auth" className="block mx-auto btn btn-outline-primary col-6">ورود به پنل مدیریت</Link>
              </div >
              <div>
                <Image src={"/images/finance/register.svg"} alt='register' width={500} height={500} />
              </div>
            </section >
          </>
        )
      }

    </>
  );
};

export default UpdateUser;
