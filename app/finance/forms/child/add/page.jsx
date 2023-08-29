"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";

//! Shamsi Date

import { useEffect } from "react";
import { toast } from "react-toastify";

const Add = () => {

  const router = useRouter();

  const [name, setName] = useState("");
  const [parentBabsId, setParentBabsId] = useState("");

  const [parentBabs, setParentBabs] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:5000/ParentBab");
    setParentBabs(data);
  }

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/ChildBab", {
        name, parentBabsId
      });
      router.push("/finance/forms/child");
      toast('معلومات جدید با موفقیت اضافه شد',
        {
          hideProgressBar: false,
          autoClose: 5000,
          type: 'success',
          position: 'top-right'
        });
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <header>
        <h3 className="my-4 text-center text-xl">
          فورم ثبت باب های اصلی
        </h3>
      </header>
      <hr />
      <main>
        <form onSubmit={submitForm}>
          <section className="w-[95%] flex justify-between flex-wrap mx-auto my-3">
            <div className="w-[32%]">
              <label className="form-label">نام باب</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-sm mb-3"
                placeholder="نام باب"
                onChange={(e) => setName(e.target.value)}
                required
                minLength={3}
                autoFocus
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">باب اصلی</label>
              <select name="parentBabsId"
                className="form-control form-control-sm mb-3"
                onChange={(e) => setParentBabsId(e.target.value)} required>
                    <option>انتخاب باب اصلی</option>
                {
                  parentBabs.map((bab) => (
                    <option value={bab.id} key={bab.id}>{bab.name}</option>
                  ))
                }
              </select>
            </div>

          </section>

          <div className="flex">
            <button type="submit" className="btn btn-outline-success flex mr-10 ml-5">
              ثبت
              <FaPlus className="mx-1 bg-inherit" />
            </button>

            <Link href="./finance/forms/child" className="btn btn-outline-secondary flex">
              <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default Add;
