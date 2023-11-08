"use client";

import axios from "axios";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


const Register = () => {

  const [name, setName] = useState();
  const [userId, setUserId] = useState();
  const [token, setToken] = useState();
  const [admin, setAdmin] = useState();
  const [expire, setExpire] = useState();
  const [error, setError] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const registerUser = async (data) => {
    try {
      const res = await axiosJWT.post(`http://localhost:5000/api/users/register`, data, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      if (res.data.error) {
        setError(res.data.error)
      } else {
        toast.success(res.data.message, {
          position: "bottom-center",
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get(`http://localhost:5000/token`);
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setUserId(decoded.userId);
        setAdmin(decoded.isAdmin);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return (
    <>
      <section className="container">
        <div className="col-4 mx-auto border rounded shadow p-4 mt-5">
          <form onSubmit={handleSubmit(registerUser)}>
            <h1 className="text-center mb-2">ثبت نام کاربر جدید</h1>
            <p className="text-center text-danger my-2">{error}</p>
            <div className="mb-3">
              <div className="w-[100%]">
                <label className="form-label">نام کاربری</label>
                <input
                  type="text"
                  className={`form-control form-control-sm mb-3 ${errors.name ? 'is-invalid' : ''}`}
                  placeholder="نام کاربری"
                  autoFocus
                  {...register("name", { required: true })}
                />
                {errors.name && errors.name.type === "required" && <span className="invalid-feedback">نام کاربری الزامی است.</span>}
              </div>
            </div>

            <div className="mb-3">
              <div className="w-[100%]">
                <label className="form-label">ایمیل</label>
                <input
                  type="email"
                  className={`form-control form-control-sm mb-3 ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="ایمیل"
                  {...register("email", { required: true })}
                />
                {errors.email && errors.email.type === "required" && <span className="invalid-feedback">ایمیل الزامی است.</span>}
              </div>
            </div>

            <div className="mb-3">
              <div className="w-[100%]">
                <label className="form-label">رمز عبور</label>
                <input
                  type="password"
                  className={`form-control form-control-sm mb-3 ${errors.password ? 'is-invalid' : ''}`}
                  placeholder="رمز عبور"
                  {...register("password", { required: true })}
                />
                {errors.password && errors.password.type === "required" && <span className="invalid-feedback">رمز عبور الزامی است.</span>}
              </div>
            </div>

            <div className="mb-3">
              <div className="w-[100%]">
                <label className="form-label">تکرار رمز عبور</label>
                <input
                  type="password"
                  className={`form-control form-control-sm mb-3 ${errors.confPassword ? 'is-invalid' : ''}`}
                  placeholder="تکرار رمز عبور"
                  {...register("confPassword", { required: true })}
                />
                {errors.confPassword && errors.confPassword.type === "required" && <span className="invalid-feedback">تکرار رمز عبور الزامی است.</span>}
              </div>
            </div>

            <input
                  type="text"
                  value={0}
                  className={`form-control form-control-sm mb-3 ${errors.email ? 'is-invalid' : ''}`}
                  {...register("isAdmin", { required: true })}
                  hidden
                />

            <div>
              <button type="submit" className="btn btn-outline-success">ثبت نام</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )

}

export default Register;