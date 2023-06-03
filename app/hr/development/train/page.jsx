"use client";
// import axios from "axios";
import Link from "next/link";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";


//! Shamsi Date
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import DatePicker, { DateObject } from "react-multi-date-picker";

const Train = () => {


  return (
    <>
      <main>
        <form>
          <section className="w-[95%] flex justify-between flex-wrap mx-auto my-3">
            <div className="w-[95%] flex justify-center items-center mb-2">
              <h3 className="border-b border-danger p-1 rounded">
                 ثبت دوره آموزشی
              </h3>
            </div>
            <div className="w-[32%]">
              <label className="form-label">نام دوره</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-sm mb-3"
                placeholder="نام دوره"
                // onChange={setMAFormInfo}
                required
                autoFocus
              />
            </div>
            
			<div className="w-[32%]">
              <label className="form-label">تاریخ شروع</label>
              <DatePicker
                months={["حمل", "ثور", "جوزا", "سرطان", "اسد", "سنبله", "میزان", "عقرب", "قوس", "جدی", "دلو", "حوت"]}
                hideOnScroll
                hideWeekDays
                editable={false}
                placeholder="تاریخ شروع"
                currentDate={
                  new DateObject({ calendar: persian })
                }
                animations={[transition()]}
                calendar={persian}
                locale={persian_fa}
                inputClass="custom-input"
                // value={tariff_date}
                // onChange={setTariff_date}
                name="startdate"
                required
              />
            </div>

			 <div className="w-[32%]">
              <label className="form-label">تاریخ ختم</label>
              <DatePicker
                months={["حمل", "ثور", "جوزا", "سرطان", "اسد", "سنبله", "میزان", "عقرب", "قوس", "جدی", "دلو", "حوت"]}
                hideOnScroll
                hideWeekDays
                editable={false}
                placeholder="ختم تولد"
                currentDate={
                  new DateObject({ calendar: persian })
                }
                animations={[transition()]}
                calendar={persian}
                locale={persian_fa}
                inputClass="custom-input"
                // value={tariff_date}
                // onChange={setTariff_date}
                name="enddate"
                required
              />
            </div>

            <div className="w-[32%]">
              <label className="form-label">هزینه دوره</label>
              <input
                type="text"
                name="price"
                placeholder="هزینه دوره"
                className="form-control form-control-sm mb-3"
                // onChange={setMAFormInfo}
                required
              />
            </div>
			
            <div className="w-[32%]">
              <label className="form-label">تعداد اشتراک کننده </label>
              <input
                type="number"
                name="participate_num"
				min="5"
                className="form-control form-control-sm mb-3"
                // onChange={setMAFormInfo}
                required
              />
            </div>
			<div className="w-[32%]">
              <label className="form-label">محل برگزاری</label>
              <input
                type="text"
                name="place"
				placeholder="محل برگزاری"
                className="form-control form-control-sm mb-3"
                // onChange={setMAFormInfo}
                required
              />
            </div>
			<div className="w-[66%]">
              <label className="form-label">ملاحظات</label>                
			    <textarea
                rows="4"
                name="remark"
                className="form-control form-control-sm mb-3"
                placeholder="ملاحضات"
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
              href="/hr/development"
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

export default Train;
