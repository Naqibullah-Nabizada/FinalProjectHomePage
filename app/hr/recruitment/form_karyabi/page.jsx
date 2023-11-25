"use client";
import { SubTitle } from "/components/hr_components/subtitle.js";
import { InputButton, CustomButton } from "/components/Buttons.jsx";
import DariDatePicker from "/components/DariDatePicker";


const FormKaryabi = () => {
  return (
    <>
      <main>
        <form>
          <section className="w-[95%] flex justify-between flex-wrap mx-auto my-3">
            <SubTitle subtitle="فورم کاریابی" />

            <InputButton
              title="نام"
              type="text"
              name="name"
              placeholder="نام"
              required
              // onChange={handleLastNameChange}
            />

            <InputButton
              title="نام پدر"
              type="text"
              name="fname"
              placeholder="نام پدر"
              required
              // onChange={handleLastNameChange}
            />

            <InputButton
              title="تخلص"
              type="text"
              name="lastname"
              placeholder="نام فامیلی یا تخلص"
              required
            />

            <InputButton
              title="ولدیت"
              type="text"
              name="grandfather"
              placeholder="ولدیت"
              // onChange={setMAFormInfo}
              required
            />
            <InputButton
              title="نمبر تذکره"
              type="text"
              name="tazkira"
              placeholder="نمبر تذکره"
              // onChange={setMAFormInfo}
              required
            />

          <DariDatePicker
              title="سال فراغت"
              placeholder="سال فراغت"
              name="gyear"
            />

            <InputButton
              title="موسسه تحصیلی"
              type="text"
              name="university"
              className="form-control form-control-sm mb-3"
              placeholder="موسسه تحصیلی"
              // onChange={setMAFormInfo}
              required
            />

            <InputButton
              title="محل تقرر"
              type="text"
              name="place"
              placeholder="محل تقرر"
              // onChange={setMAFormInfo}
              required
            />

            <InputButton
              title="شماره تماس"
              type="number"
              name="contact"
              placeholder="شماره تماس"
              // onChange={setMAFormInfo}
              required
            />

            <InputButton
              title="ایمل آدرس"
              type="email"
              name="email"
              placeholder="example@gmail.com"
              // onChange={setMAFormInfo}
              required
            />
            <DariDatePicker
              title="تاریخ توزیع فورم"
              placeholder="تاریخ توزیع فورم"
              name="disdate"
            />

            <div className="w-[32%]">
              <label className="form-label">ملاحظات</label>
              <textarea
                rows="3"
                name="remark"
                className="form-control form-control-sm mb-3"
                placeholder="ملاحظات"
                // onChange={setMAFormInfo}
                required
              ></textarea>
            </div>
          </section>

          <CustomButton href="./hr/recruitment" />
        </form>
      </main>
    </>
  );
};

export default FormKaryabi;