import React from 'react'
import "./information.css";
import { Link } from 'react-router-dom';
import profileImg from "../../../../assets/images/profile.png"
import { BsFillCapslockFill,BsFillPersonPlusFill,BsChatDots } from "react-icons/bs";
import { useContext } from 'react';
import { AuthContext } from '../../../context/context';
import { useEffect } from 'react';

const Information = () => {
  const {userId,profile,profilePhoto, news,users,comments} = useContext(AuthContext)

  return (
    <div className="information">
      <div className="view-web is-flex is-align-items-center is-justify-content-space-between mb-5">
        <div className="view-webpage">
          <a href="/" className='button has-background-success has-text-white'>مشاهده وب سایت</a>
        </div>
        <div className="view-profile">
          <span>
            <Link to={`/update-profile/${userId}`}>
              <img src={profilePhoto ? profilePhoto : profileImg} alt="" className='image profile-photo' />
            </Link>
          </span>
        </div>
      </div>
      <div className="info">
          <div className="info-item">
            <h4>خبرها</h4>
            <span>{news.length}</span>
            <BsFillCapslockFill />
          </div>
          <div className="info-item">
            <h4>کاربران</h4>
            <span>{users.length}</span>
            <BsFillPersonPlusFill />
          </div>
          <div className="info-item">
            <h4>نظرات</h4>
            <span>{comments.length}</span>
            <BsChatDots />
          </div>
      </div>
    </div>
  )
}

export default Information