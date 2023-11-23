"use client"

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { FaEdit, FaTrash, FaUserPlus } from "react-icons/fa";
import { AuthContext } from "../context/context";

const Users = () => {

  const { getAllUsers, users, admin, token, confirm } = useContext(AuthContext);

  useEffect(() => {
    getAllUsers();
  }, []);


  return (
    <>
      <Navbar title="مدیریت مالی و حسابی" />
      <hr />
      {
        token !== null && admin == 2 ? (
          <section className="flex justify-content-around align-items-center mt-3">
            <section className="col-5 mr-[4rem] border rounded shadow p-3">

              <h1 className="text-center h5 p-3">لیست کاربران سایت</h1>

              <table className="table table-sm table-active table-bordered table-hover table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>نام کاربری</th>
                    <th>ایمیل</th>
                    <th>نقش کاربری</th>
                    <th>حذف</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                          {
                            user.isAdmin == 0 ? 'ادمین عواید' : null
                          }
                          {
                            user.isAdmin == 1 ? 'ادمین فورم میم' : null
                          }

                          {
                            user.isAdmin == 2 ? 'مدیر سایت' : null
                          }
                        </td>
                        <td className="flex justify-between">
                          <Link href={`/finance/admin/users/update/${user.id}`} className="btn btn-sm btn-warning">
                            <FaEdit className="bg-transparent" />
                          </Link>
                          {
                            user.isAdmin == 0 || user.isAdmin == 1 ? (
                              <button
                                onClick={() => confirm(user.id)}
                                className="btn btn-sm btn-danger">
                                <FaTrash className="bg-transparent" />
                              </button>
                            ) : <button
                              className="btn btn-sm btn-danger disabled">
                              <FaTrash className="bg-transparent" />
                            </button>
                          }
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>

              <div className="flex">
                <Link href={"/finance/admin/register"} className="mx-3 btn btn-outline-primary flex">
                  <FaUserPlus className="bg-transparent mx-1" />کاربر جدید</Link>
                <Link href={"/finance"} className="btn btn-outline-secondary mx-3">بازگشت</Link>
              </div>
            </section>

            <section>
              <Image src={"/images/finance/undraw_feeling_proud_qne1.svg"} width={520} height={520} alt="Users" />
            </section>
          </section>

        ) : (
          <>
            <section className="container col-8 flex justify-center align-items-center">
              <div>
                <p className="alert alert-info text-center">برای وارد شدن به پنل مدیریت ابتدا وارد حساب کاربری خود شوید!</p>
                <Link href="finance/admin/auth" className="block mx-auto btn btn-outline-primary col-6">ورود به پنل مدیریت</Link>
              </div>
              <div>
                <Image src={"/images/finance/register.svg"} alt='register' width={500} height={500} />
              </div>
            </section>
          </>
        )
      }
    </>
  )

}

export default Users;