import React from 'react';
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";
import Link from "next/link";
function InputButton({title, onChange, type, name, placeholder ,...props}) {
  return (
    <div className="w-[32%]">
      <label className="form-label">{title}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="form-control form-control-sm mb-3"
        onChange={onChange}
        required
        {...props}
      />
    </div>
  );
};

function CustomButton({href}){
  return (
    <div className="flex mb-4">
            <button
              type="submit"
              className="btn btn-outline-success flex mr-10 ml-5"
            >
              ثبت
              <FaPlus className="mx-1 bg-inherit" />
            </button>
            <Link
              href={href}
              className="btn btn-outline-secondary flex"
            >
              <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
            </Link>
          </div>
  );
};
export {InputButton,CustomButton};