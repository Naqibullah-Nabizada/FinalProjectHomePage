import React from 'react'
import Dashboard from '../../Dashboard'
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link, useLocation, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../context/context';

const formSchema = Yup.object({
     name: Yup.string()
       .min(3, "تعداد کارکتر نباید کمتر از 3 باشد")
       .max(15, "تعداد کارکتر نباید بیشتر از 15 باشد")
       .required("وارد کردن دسته بندی الزامی است"),
   });
const EditCategory = () => {

     const {updateCategory} = useContext(AuthContext)
     const {state} = useLocation()
     const {id} = useParams()

     const formik = useFormik({
          initialValues: {
               name: state.name,
               id: id
          },
          onSubmit: (values) => {
               updateCategory(values);
          },
          validationSchema: formSchema
     })

  return (
    <Dashboard>
           <div className="is-flex is-justify-content-end">
        <Link to="/view-category" className="button px-6 is-success mb-6">
         مشاهده دسته بندی
        </Link>
      </div>
        <form onSubmit={formik.handleSubmit}>
        <div className="field">
          <label className="label">ویرایش نام دسته</label>
          <div className="control">
            <input type="text" className="input" placeholder="مثال * اجتماعی"
            defaultValue={state.name}
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
              ویرایش دسته بندی
            </button>
          </div>
        </div>
      </form>
    </Dashboard>
  )
}

export default EditCategory