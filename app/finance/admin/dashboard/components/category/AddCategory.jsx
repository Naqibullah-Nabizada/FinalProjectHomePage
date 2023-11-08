import React from "react";
import Dashboard from "../../Dashboard";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useContext } from "react";
import { AuthContext } from "../../../context/context";

const formSchema = Yup.object({
  name: Yup.string()
    .min(3, "تعداد کارکتر نباید کمتر از 3 باشد")
    .max(15, "تعداد کارکتر نباید بیشتر از 15 باشد")
    .required("وارد کردن دسته بندی الزامی است"),
});

const AddCategory = () => {
  const {createCategory} = useContext(AuthContext)


     const formik = useFormik({
          initialValues: {
               name: "",
          },
          onSubmit: (values) => {
            createCategory(values);
          },
          validationSchema: formSchema
     })



  return (
    <Dashboard>
      <form onSubmit={formik.handleSubmit}>
        <div className="field">
          <label className="label">نام دسته بندی</label>
          <div className="control">
            <input type="text" className="input" placeholder="مثال * اجتماعی"
            onChange={formik.handleChange("name")}
            onBlur={formik.handleBlur("name")}
            />
              <p className="help has-text-danger">
              {formik.touched.name && formik.errors.name}
           </p>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button type="submit" className="button is-success px-6">
              ذخیره
            </button>
          </div>
        </div>
      </form>
    </Dashboard>
  );
};

export default AddCategory;
