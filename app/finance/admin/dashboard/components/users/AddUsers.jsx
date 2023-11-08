import React from "react";
import Dashboard from "../../Dashboard";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useContext } from "react";
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
    .required("وارد کردن پسوورد الزامی است"),
  confPassword: Yup.string()
    .min(4, "تعداد کارکتر نباید کمتر از 4 باشد")
    .max(20, "تعداد کارکتر نباید بیشتر از 20 باشد")
    .required("وارد کردن تکرار پسوورد الزامی است"),
  isAdmin: Yup.string().required("وارد کردن نقش کاربری الزامی است"),
});
const AddUsers = () => {
  const { register, resgisterError } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confPassword: "",
      isAdmin: "",
    },
    onSubmit: (values) => {
      register(values);
    },
    validationSchema: formSchema,
  });

  return (
    <Dashboard>
      <div className="is-flex is-justify-content-end">
        <Link to="/view-users" className="button px-6 is-success mb-6">
          مشاهده کاربران
        </Link>
      </div>
      <div className="is-flex">
        <p className="help has-text-danger mb-5 is-size-6">{resgisterError}</p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="field">
          <label className="label">نام و نام خانوادگی</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="مثال * فرزاد معصومی"
              value={formik.values.name}
              onChange={formik.handleChange("name")}
              onBlur={formik.handleBlur("name")}
            />
            <p className="help has-text-danger">
              {formik.touched.name && formik.errors.name}
            </p>
          </div>
        </div>
        <div className="field">
          <label className="label">ایمیل</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="مثال * Example@gmail.com"
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
            />
            <p className="help has-text-danger">
              {formik.touched.email && formik.errors.email}
            </p>
          </div>
        </div>
        <div className="field">
          <label className="label">پسوورد</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="مثال * 123456"
              value={formik.values.password}
              onChange={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
            />
            <p className="help has-text-danger">
              {formik.touched.password && formik.errors.password}
            </p>
          </div>
        </div>
        <div className="field">
          <label className="label">تکرار پسوورد</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="مثال * 123456"
              value={formik.values.confPassword}
              onChange={formik.handleChange("confPassword")}
              onBlur={formik.handleBlur("confPassword")}
            />
            <p className="help has-text-danger">
              {formik.touched.confPassword && formik.errors.confPassword}
            </p>
          </div>
        </div>
        <div className="field">
          <label className="label">نقش کاربری</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select
                value={formik.values.isAdmin}
                onChange={formik.handleChange("isAdmin")}
                onBlur={formik.handleBlur("isAdmin")}
              >
                <option>انتخاب کنید</option>
                <option value="0">نویسنده</option>
                <option value="1">مدیر</option>
              </select>
              <p className="help has-text-danger">
                {formik.touched.isAdmin && formik.errors.isAdmin}
              </p>
            </div>
          </div>
        </div>
        <div className="field mt-6">
          <div className="control">
            <button type="submit" className="button is-success px-6">
              ایجاد کاربر
            </button>
          </div>
        </div>
      </form>
    </Dashboard>
  );
};

export default AddUsers;
