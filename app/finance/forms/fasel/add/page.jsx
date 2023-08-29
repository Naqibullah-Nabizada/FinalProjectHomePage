"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";

import { toast } from "react-toastify";

const Add = () => {

  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [childBabsId, setChildBabId] = useState("");


  const [childBabs, setChildBab] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:5000/ChildBab");
    setChildBab(data);
  }


  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/Fasel", {
        name, description, childBabsId
      });
      router.push("/finance/forms/fasel");
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
              <label className="form-label">باب</label>
              <select name="childBabsId"
                className="form-control form-control-sm mb-3"
                onChange={(e) => setChildBabId(e.target.value)} required>
                    <option>انتخاب باب</option>
                {
                  childBabs.map((bab) => (
                    <option value={bab.id} key={bab.id}>{bab.name}</option>
                  ))
                }
              </select>
            </div>

            <div className="w-[32%]">
              <label className="form-label">نام فصل</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-sm mb-3"
                placeholder="نام فصل"
                onChange={(e) => setName(e.target.value)}
                required
                minLength={3}
                autoFocus
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">توضیحات</label>
              <textarea name="description"
                className="form-control form-control-sm mb-3"
                col="3"
                placeholder="توضیحات"
                onChange={(e) => setDescription(e.target.value)}>
              </textarea>

            </div>

          </section>

          <div className="flex">
            <button type="submit" className="btn btn-outline-success flex mr-10 ml-5">
              ثبت
              <FaPlus className="mx-1 bg-inherit" />
            </button>

            <Link href="./finance/forms/fasel" className="btn btn-outline-secondary flex">
              <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default Add;
