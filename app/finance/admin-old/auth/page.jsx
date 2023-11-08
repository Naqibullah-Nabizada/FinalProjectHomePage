"use client"

import axios from "axios";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Login = () => {

  const router = useRouter();

  const [name, setName] = useState();
  const [userId, setUserId] = useState();
  const [token, setToken] = useState();
  const [admin, setAdmin] = useState();
  const [expire, setExpire] = useState();
  const [users, setUsers] = useState();
  const [error, setError] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});


  const login = async (data) => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/users/login`, data);
      if (res.data.error) {
        setError(res.data.error);
      } else {
        // router.push("/finance"),
        toast.success(res.data.msg, {
          position: "bottom-center",
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
        });
        setName(res.data.name);
        setUserId(res.data.userId);
        setToken(res.data.accessToken);
        setAdmin(res.data.isAdmin);
      }
    } catch (error) {
      console.log(error);
    }
  };


  const refreshToken = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/token`);
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setUserId(decoded.userId);
      setAdmin(decoded.isAdmin);
      setExpire(decoded.exp);
    } catch (error) {
      console.log(error);
    }
  };

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


  const getAllUsers = async () => {
    try {
      const res = await axiosJWT.get(`http://localhost:5000/api/users`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };


  // Use api

  const updataUser = async (value) => {
    try {
      const res = await axiosJWT.put(`http://localhost:5000/api/users/${value.id}`, value, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      toast.success(res.data.message, {
        position: "bottom-center",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const deleteUser = async (id) => {
    try {
      const res = await axiosJWT.delete(`http://localhost:5000/api/users/${id}`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      toast.success(res.data.message, {
        position: "bottom-center",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
      });
      getAllUsers()
    } catch (error) {
      console.log(error);
    }
  }


  const Logout = async () => {
    try {
      await axiosJWT.delete(`http://localhost:5000/api/users/logout`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      // router.push("/")
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getAllUsers()
    refreshToken();
  }, [])

  return (
    <section className="container">
      <button className="btn btn-sm btn-danger" onClick={Logout}>خروج</button>
      <div className="col-4 mx-auto border rounded shadow p-4 mt-5">
        <form className="box" onSubmit={handleSubmit(login)}>
          <h1 className="text-center mb-2">
            ورود به پنل مدیریت
          </h1>

          <p className="text-center text-danger my-2">{error}</p>
          <div className="mb-3">
            <div className="w-[100%]">
              <label className="form-label">ایمیل</label>
              <input
                type="email"
                className={`form-control form-control-sm mb-3 ${errors.email ? 'is-invalid' : ''}`}
                placeholder="ایمیل"
                autoFocus
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
          <div>
            <button
              type="submit"
              className="btn btn-outline-success"
            >
              ورود
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
