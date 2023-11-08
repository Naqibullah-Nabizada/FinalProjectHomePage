import React, { useContext, useEffect } from "react";
import Dashboard from "../../Dashboard";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/context";

const ViewComment = () => {
  const { getAllComment, comments, deleteComment, activeComment ,unActiveComment} =
    useContext(AuthContext);
  useEffect(() => {
    getAllComment();
  }, []);
  return (
    <Dashboard>
      <table className="table is-fullwidth">
        <thead className="is-fullwidth">
          <tr>
            <th>شماره</th>
            <th>موضوع</th>
            <th>متن</th>
            <th>ایمیل</th>
            <th>وضعیت</th>
            <th>حذف</th>
          </tr>
        </thead>

        <tbody>
          {comments?.map((comment, index) => {
            return (
              <tr key={comment.id}>
                <td>{index + 1}</td>
                <td>{comment.subject}</td>
                <td>{comment.description}</td>
                <td>{comment.email}</td>
                <td>
                  {comment.isActive ? (
                    <button className="button is-success" onClick={()=> unActiveComment(comment.id)}>فعال</button>
                  ) : (
                    <button
                      className="button is-warning"
                      onClick={() => activeComment(comment.id)}
                    >
                      غیر فعال
                    </button>
                  )}
                </td>
                <td>
                  <button
                    className="button is-danger"
                    onClick={() => deleteComment(comment.id)}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Dashboard>
  );
};

export default ViewComment;
