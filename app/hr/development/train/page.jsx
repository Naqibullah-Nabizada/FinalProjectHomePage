"use client";
// import axios from "axios";
import { InputButton, CustomButton } from "/components/Buttons.jsx";
import AfghanDatePicker from "/components/DariDatePicker";
import { SubTitle } from "/components/hr_components/subtitle.js";

const Train = () => {
  return (
    <>
      <main>
        <form>
          <section className="w-[95%] flex justify-between flex-wrap mx-auto my-3">
            <SubTitle subtitle="ثبت دوره آموزشی" />

            <InputButton
              title="نام دوره"
              type="text"
              name="name"
              placeholder="نام دوره"
              // onChange={setMAFormInfo}
              required
              autoFocus
            />

            <AfghanDatePicker
              title="تاریخ شروع"
              placeholder="تاریخ شروع"
              name="startdate"
            />
            <AfghanDatePicker
              title="تاریخ ختم"
              placeholder="تاریخ ختم"
              name="enddate"
            />

            <InputButton
              title="هزینه دوره"
              type="text"
              name="price"
              placeholder="هزینه دوره"
              className="form-control form-control-sm mb-3"
              // onChange={setMAFormInfo}
              required
            />

            <InputButton
              title="تعداد اشتراک کننده"
              type="number"
              name="participate_num"
              min="5"
              className="form-control form-control-sm mb-3"
              // onChange={setMAFormInfo}
              required
            />

            <InputButton
              title="محل برگزاری"
              type="text"
              name="place"
              placeholder="محل برگزاری"
              className="form-control form-control-sm mb-3"
              // onChange={setMAFormInfo}
              required
            />
            <div className="w-[66%]">
              <label className="form-label">ملاحظات</label>
              <textarea
                rows="4"
                name="remark"
                className="form-control form-control-sm mb-3"
                placeholder="ملاحظات"
              ></textarea>
            </div>
          </section>
          <CustomButton href="/hr/development" />
        </form>
      </main>
    </>
  );
};

export default Train;
