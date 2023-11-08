import React from "react";
import "./sidebar.css";
import logo from "../../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context/context";
const Sidebar = () => {
  const [showNews, setShowNews] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const { Logout, admin } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <div className="logo mb-5 has-text-centered">
        <img src={logo} alt="" />
      </div>
      <ul>
        <li>
          <Link to="/dashboard">داشبورد</Link>
        </li>
        <li>
          <span onClick={() => setShowNews(!showNews)}>اخبار</span>

          {showNews && (
            <ul>
              <li>
                <Link to="/add-news">افزودن خبر</Link>
              </li>
              <li>
                <Link to="/view-news">مشاهده خبر</Link>
              </li>
            </ul>
          )}
        </li>

        {admin ? (
          <>
            <li>
              <span onClick={() => setShowCategory(!showCategory)}>
                دسته بندی ها
              </span>

              {showCategory && (
                <ul>
                  <li>
                    <Link to="/add-category">افزودن دسته بندی</Link>
                  </li>
                  <li>
                    <Link to="/view-category">مشاهده دسته بندی</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <span onClick={() => setShowVideo(!showVideo)}>ویدیو</span>

              {showVideo && (
                <ul>
                  <li>
                    <Link to="/add-video">افزودن ویدیو</Link>
                  </li>
                  <li>
                    <Link to="/view-video">نمایش ویدیو</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <span onClick={() => setShowUsers(!showUsers)}>کاربران</span>

              {showUsers && (
                <ul>
                  <li>
                    <Link to="/add-user">افزودن کاربر</Link>
                  </li>
                  <li>
                    <Link to="/view-users">نمایش کاربران</Link>
                  </li>
                </ul>
              )}
            </li>
          </>
        ) : (
          ""
        )}

        <li>
          <Link to="/comment">نظرات</Link>
        </li>
        <li>
          <span onClick={Logout}>خروج</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
