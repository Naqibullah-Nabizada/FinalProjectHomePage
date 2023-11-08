import React, { useState } from 'react'
import Dashboard from '../../Dashboard'
import * as Yup from "yup";
import { useFormik } from "formik";
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../context/context';

const formSchema = Yup.object({
     name: Yup.string()
       .min(3, "تعداد کارکتر نباید کمتر از 3 باشد")
       .max(15, "تعداد کارکتر نباید بیشتر از 15 باشد")
       .required("وارد کردن نام کاربری الزامی است"),
    
     password: Yup.string()
       .min(4, "تعداد کارکتر نباید کمتر از 4 باشد")
       .max(20, "تعداد کارکتر نباید بیشتر از 20 باشد")
       .required("وارد کردن پسوورد الزامی است"),
     confPassword: Yup.string()
       .min(4, "تعداد کارکتر نباید کمتر از 4 باشد")
       .max(20, "تعداد کارکتر نباید بیشتر از 20 باشد")
       .required("وارد کردن تکرار پسوورد الزامی است"),
   });

const ProfileUpdate = () => {
     const {updateProfile} = useContext(AuthContext)
     const {id} = useParams()
     const [file, setFile] = useState([]);
     const [preview, setPreview] = useState("")
   
   
     const loadImage = (e) => {
       const image = e.target.files[0];
       setFile(image)
       setPreview(URL.createObjectURL(image))
     }
     const formik = useFormik({
          initialValues: {
            name: "",
            password: "",
            confPassword: "",
            id: id,
            file: "",
          },
          onSubmit: (values) => {
               const data = {
                    name: values.name,
                    password: values.password,
                    confPassword: values.confPassword,
                    id:id,
                    file: file,
               }
               updateProfile(data);
          },
          validationSchema: formSchema
        })
      

  return (
    <Dashboard>
          <form onSubmit={formik.handleSubmit}>
       <div className="field pt-3">
         <label className="label">عکس پروفایل</label>
         <div className="control">
            <input type="file"
             className="input"
             onChange={loadImage}
             />
             {
               preview ? (
                 <figure className='mt-3'>
                   <img src={preview} width="250" alt="" />
                 </figure>
               ) : ("")
             }
         </div>
       </div>
       <div className="field">
         <label className="label">نام و نام خانوادگی</label>
         <div className="control">
           <input type="text" className="input"
            placeholder='مثال * فرزاد معصومی'
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
         <label className="label">پسوورد</label>
         <div className="control">
           <input type="text" className="input"
            placeholder='مثال * 2345676 '
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
           <input type="text" className="input"
            placeholder='مثال * 2222222 '
            value={formik.values.confPassword}
            onChange={formik.handleChange("confPassword")}
            onBlur={formik.handleBlur("confPassword")}
           />
           <p className="help has-text-danger">
              {formik.touched.confPassword && formik.errors.confPassword}
           </p>
         </div>
       </div>

       <div className="field mt-6">
         <div className="control">
           <button type='submit' className='button is-success px-6'>ذخیره</button>
         </div>
       </div>
     </form>
    </Dashboard>
  )
}

export default ProfileUpdate