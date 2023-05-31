// import axios from "axios";
import Link from "next/link";
// import { useState } from "react";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";


//! Shamsi Date
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import DatePicker, { DateObject } from "react-multi-date-picker";

// import { toast } from "react-toastify";
// import { useRouter } from 'next/router';
const AddEmployee = () => {

  // const [MAForm, setMAForm] = useState({});

  // const setMAFormInfo = (e) => {
  //   setMAForm({
  //     ...MAForm,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const submitForm = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:5000/MAForms", MAForm);
  //     // router.push("/income/ma_forms");
  //     toast('معلومات جدید با موفقیت اضافه شد',
  //       {
  //         hideProgressBar: true,
  //         autoClose: 5000,
  //         type: 'success',
  //         position: 'top-right'
  //       })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }


  return (
    <>
      <main>
        <form>
          <section className="w-[95%] flex justify-between flex-wrap mx-auto my-3">
            <div className="w-[95%] flex justify-center items-center mb-2">
              <h3 className="border-b border-danger p-1 rounded">
                شهرت کارمند
              </h3>
            </div>
            <div className="w-[32%]">
              <label className="form-label">کود تشکیلاتی بست</label>
              <input
                type="text"
                name="code"
                className="form-control form-control-sm mb-3"
                placeholder="کود تشکیلاتی بست"
                // onChange={setMAFormInfo}
                required
                autoFocus
              />
            </div>
            <div className="w-[32%]">
              <label className="form-label">نام</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-sm mb-3"
                placeholder="نام"
                // onChange={setMAFormInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">نام پدر</label>
              <input
                type="text"
                name="fname"
                className="form-control form-control-sm mb-3"
                placeholder="نام پدر"
                // onChange={setMAFormInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">تخلص</label>
              <input
                type="text"
                name="lastname"
                placeholder="نام فامیلی یا تخلص"
                className="form-control form-control-sm mb-3"
                // onChange={setMAFormInfo}
                required
              />
            </div>

            
<button id="dropdownRadioBgHoverButton" data-dropdown-toggle="dropdownRadioBgHover" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown radio <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

<!-- Dropdown menu -->
<div id="dropdownRadioBgHover" class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
    <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioBgHoverButton">
      <li>
        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <input id="default-radio-4" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="default-radio-4" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Default radio</label>
        </div>
      </li>
      <li>
        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <input checked id="default-radio-5" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="default-radio-5" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Checked state</label>
        </div>
      </li>
    </ul>
</div>


            <div className="w-[32%]">
              <label for="gender">جنسیت</label>
              <select class="form-control form-control-sm mb-3" id="gender">
                <option value="male" class="text-primary">
                  آقا
                </option>
                <option value="female" class="text-danger">
                  خانم
                </option>
              </select>
            </div>

            <div className="w-[32%]">
              <label for="nationality">ملیت</label>
              <select
                class="form-control form-control-sm mb-3"
                id="nationality"
              >
                <option value="1" class="text-primary">
                  پشتون
                </option>
                <option value="2" class="text-danger">
                  هزاره
                </option>
                <option value="3" class="text-primary">
                  تاجک
                </option>
                <option value="4" class="text-danger">
                  ازبک
                </option>
                <option value="5" class="text-danger">
                  دیگر
                </option>
              </select>
            </div>
            <div className="w-[32%]">
              <label className="form-label">تاریخ تولد</label>
              <DatePicker
                months={["حمل", "ثور", "جوزا", "سرطان", "اسد", "سنبله", "میزان", "عقرب", "قوس", "جدی", "دلو", "حوت"]}
                hideOnScroll
                hideWeekDays
                editable={false}
                placeholder="تاریخ تولد"
                currentDate={
                  new DateObject({ calendar: persian })
                }
                animations={[transition()]}
                calendar={persian}
                locale={persian_fa}
                inputClass="custom-input"
                // value={tariff_date}
                // onChange={setTariff_date}
                name="tariff_date"
                required
              />
            </div>


            <div className="w-[32%]">
              <label className="form-label">نمبر تذکره</label>
              <input
                type="text"
                name="id"
                className="form-control form-control-sm mb-3"
                placeholder="نمبر تذکره"
                // onChange={setMAFormInfo}
                required
              />
            </div>
            {/* living place information */}
            <div className="w-[95%] flex justify-center items-center">
              <h3 className="border-b border-danger p-1 rounded"> محل سکونت</h3>
            </div>
            <div className="w-[32%]">
              <label className="form-label">سکونت اصلی </label>
              <input
                type="text"
                name="mainp"
                className="form-control form-control-sm mb-3"
                // onChange={setMAFormInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">سکونت فعلی </label>
              <input
                type="text"
                name="currentp"
                className="form-control form-control-sm mb-3"
                // onChange={setMAFormInfo}
                required
              />
            </div>
            <div className="w-[95%] flex justify-center items-center">
              <h3 className="border-b border-danger p-1 rounded">
                معلومات اداری کارمند
              </h3>
            </div>
            <div className="w-[32%]">
              <label className="form-label">پوهنتون</label>
              <input
                type="text"
                name="university"
                value="کابل"
                className="form-control form-control-sm mb-3"
                placeholder=" نام پوهنتون"
                // onChange={setMAFormInfo}
                required
             
              />
            </div>
            <div className="w-[32%]">
              <label for="faculty">پوهنحی</label>
              <select class="form-control form-control-sm mb-3" id="faculty">
                <option value="1">کمپیوتر ساینس</option>
                <option value="2">علوم اجتماعی</option>
                <option value="3">هنر های زیبا</option>
              </select>
            </div>
            <div className="w-[32%]">
              <label for="department">دیپارتمنت</label>
              <select class="form-control form-control-sm mb-3" id="department">
                <option value="1">تکنالوژی معلوماتی</option>
                <option value="2">سیستم های معلوماتی </option>
                <option value="3">انجنیری نرم افزار</option>
              </select>
            </div>
            <div className="w-[32%]">
              <label for="title">عنوان بست</label>
              <select class="form-control form-control-sm mb-3" id="title">
                <option value="1">رییس</option>
                <option value="2">آمر </option>
                <option value="3">استاد </option>
              </select>
            </div>
            <div className="w-[32%]">
              <label className="form-label">بست</label>
              <input
                type="number"
                name="bast"
                min={1}
                className="form-control form-control-sm mb-3"
                // onChange={setMAFormInfo}
                required
              />
            </div>
            <div className="w-[32%]">
              <label className="form-label">پوهنحی</label>
              <input
                type="text"
                name="code"
                className="form-control form-control-sm mb-3"
                placeholder="کود تشکیلاتی بست"
                // onChange={setMAFormInfo}
                required
              />
            </div>
            <div className="w-[32%]">
              <label className="form-label">نوع بست</label>
              <input
                type="text"
                name="code"
                className="form-control form-control-sm mb-3"
                placeholder="کود تشکیلاتی بست"
                // onChange={setMAFormInfo}
                required
              />
            </div>
            
          </section>

          <div className="flex mb-4">
            <button
              type="submit"
              className="btn btn-outline-success flex mr-10 ml-5"
            >
              ثبت
              <FaPlus className="mx-1 bg-inherit" />
            </button>
            <Link
              href="/hr/recruitment"
              className="btn btn-outline-secondary flex"
            >
              <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default AddEmployee;
