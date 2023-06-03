"use client";
import Link from "next/link";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";

//! Shamsi Date
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import DatePicker, { DateObject } from "react-multi-date-picker";

const FormKaryabi = () => {
  return (
    <>
      <main>
        <form>
          <section className="w-[95%] flex justify-between flex-wrap mx-auto my-3">
            <div className="w-[95%] flex justify-center items-center">
              <h2 className="border-b border-danger p-1 rounded">
                فورم کاریابی
              </h2>
            </div>

            <div className="w-[32%]">
              <label className="form-label">نام</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-sm mb-3"
                placeholder="نام"
                // onChange={setMAFormInfo}
                autoFocus
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
                placeholder=" تخلص یا نام فامیلی"
                className="form-control form-control-sm mb-3"
                // onChange={setMAFormInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">ولدیت</label>
              <input
                type="text"
                name="grandfather"
                className="form-control form-control-sm mb-3"
                placeholder="ولدیت"
                // onChange={setMAFormInfo}
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

            <div className="w-[32%]">
              <label className="form-label"> سال فراغت</label>
              <DatePicker
                months={[
                  "حمل",
                  "ثور",
                  "جوزا",
                  "سرطان",
                  "اسد",
                  "سنبله",
                  "میزان",
                  "عقرب",
                  "قوس",
                  "جدی",
                  "دلو",
                  "حوت",
                ]}
                hideOnScroll
                hideWeekDays
                editable={false}
                placeholder="سال فراغت"
                currentDate={new DateObject({ calendar: persian })}
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
              <label className="form-label">موسسه تحصیلی</label>
              <input
                type="text"
                name="university"
                className="form-control form-control-sm mb-3"
                placeholder="موسسه تحصیلی"
                // onChange={setMAFormInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">محل تقرر</label>
              <input
                type="text"
                name="place"
                className="form-control form-control-sm mb-3"
                placeholder="محل تقرر"
                // onChange={setMAFormInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">شماره تماس</label>
              <input
                type="number"
                name="contact"
                className="form-control form-control-sm mb-3"
                placeholder="شماره تماس"
                // onChange={setMAFormInfo}
                required
              />
            </div>
            <div className="w-[32%]">
              <label className="form-label"> ایمل آدرس</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-sm mb-3"
                placeholder="example@gmail.com"
                // onChange={setMAFormInfo}
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">تاریخ توزیع فورم</label>
              <DatePicker
                months={[
                  "حمل",
                  "ثور",
                  "جوزا",
                  "سرطان",
                  "اسد",
                  "سنبله",
                  "میزان",
                  "عقرب",
                  "قوس",
                  "جدی",
                  "دلو",
                  "حوت",
                ]}
                hideOnScroll
                hideWeekDays
                editable={false}
                placeholder="تاریخ تولد"
                currentDate={new DateObject({ calendar: persian })}
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
              <label className="form-label">ملاحضات</label>
              <textarea
                rows="3"
                name="remark"
                className="form-control form-control-sm mb-3"
                placeholder="ملاحضات"
                // onChange={setMAFormInfo}
                required
              ></textarea>
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
              href="./hr/recruitment"
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

export default FormKaryabi;
