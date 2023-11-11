"use client"

import axios from "axios";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";

import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const router = useRouter();

  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [expire, setExpire] = useState("");
  const [resgisterError, setRegisterError] = useState("");
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    getAllUsers()
  }, [])

  useEffect(() => {
    refreshToken();
  }, [])


  const refreshToken = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/token`);
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
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
        const decoded = jwtDecode(response.data.accessToken);
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

  const register = async (inputs) => {
    try {
      const res = await axiosJWT.post(`http://localhost:5000/api/users/register`, inputs, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      if (res.data.error) {
        setRegisterError(res.data.error)
      } else {
        toast.success(res.data.message, {
          position: "bottom-center",
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
        });
        router.push("/finance/admin/users")
      }
    } catch (error) {
      console.log(error);
    }
  }

  const login = async (inputs) => {
    try {
      const res = await axios.post(`http://localhost:5000/api/users/login`, inputs);
      if (res.data.error) {
        setError(res.data.error);
      } else {
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
        router.push("/finance");
      }
    } catch (error) {
      console.log(error);
    }
  };

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


  const getSingleUser = async (id) => {
    try {
      const res = await axiosJWT.get(`http://localhost:5000/api/user/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };


  const updateUser = async (value) => {
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
      router.push("/finance/admin/users")
    } catch (error) {
      console.log(error);
      console.log("errror")
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
      getAllUsers();
    } catch (error) {
      console.log(error);
    }
  }


  const confirm = (userId) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div
            dir="rtl"
            style={{
              backgroundColor: "gray",
              border: `1px solid purple`,
              borderRadius: "1em",
              textAlign: 'center'
            }}
            className="p-4"
          >
            <h1 style={{ color: "white" }}>🔔پاک کردن کاربر🔔</h1>
            <p style={{ color: "white", padding: "1rem" }}>
              مطمئنی که میخواهی کاربر را پاک کنی ؟😕
            </p>
            <button
              onClick={() => {
                deleteUser(userId);
                onClose();
              }}
              className="btn btn-success mx-2"
            >
              مطمئن هستم✅
            </button>
            <button
              onClick={onClose}
              className="btn btn-warning"
            >
              انصراف❌
            </button>
          </div>
        );
      },
    });
  };


  const Logout = async () => {
    try {
      const res = await axiosJWT.delete("http://localhost:5000/api/users/logout", {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      router.push("/")
      toast.success(res.data, {
        position: "bottom-center",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
      });
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <AuthContext.Provider
      value={{
        login,
        error,
        getAllUsers,
        getSingleUser,
        axiosJWT,
        token,
        register,
        resgisterError,
        users,
        user,
        updateUser,
        deleteUser,
        Logout,
        userId,
        admin,
        confirm
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
