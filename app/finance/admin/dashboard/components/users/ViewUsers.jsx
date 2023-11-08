import React from "react";
import Dashboard from "../../Dashboard";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/context";
import { useEffect } from "react";
const ViewUsers = () => {
  const { getAllUsers, users,deleteUser } = useContext(AuthContext);

  useEffect(() => {
    getAllUsers();
  }, []);

  console.log(users);
  return (
    <Dashboard>
      <div className="is-flex is-justify-content-end">
        <Link to="/add-user" className="button px-6 is-success mb-6">
          افزودن کاربر
        </Link>
      </div>
      <table className="table is-fullwidth">
        <thead className="is-fullwidth">
          <tr>
            <th>شماره</th>
            <th>نام و نام خانوادگی</th>
            <th>ایمیل</th>
            <th>نقش</th>
            <th>ویرایش</th>
            <th>حذف</th>
          </tr>
        </thead>

        <tbody>
          {users?.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isAdmin ? "مدیر" : "نویسنده"}</td>
                <td>
                  <Link state={user} className="button is-info" to={`/edit-user/${user.id}`}>
                    ویرایش
                  </Link>
                </td>
                <td>
                  {
                    user.isAdmin ? 
                    (
                      <button className="button is-danger" disabled>
                        مدیر قابل حذف نیست
                      </button>
                    )
                    : (
                      <button className="button is-danger" onClick={()=> deleteUser(user.id)}>حذف</button>
                    )
                  }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Dashboard>
  );
};

export default ViewUsers;
