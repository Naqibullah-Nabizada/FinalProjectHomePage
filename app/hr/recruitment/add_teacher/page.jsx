"use client";

// import axios from "axios";
import { useState } from "react";
import { InputButton, CustomButton } from "/components/Buttons.jsx";
import { SubTitle } from "/components/hr_components/subtitle.js";
import { faculties, departments } from "/components/hr_components/Faculties.js";
import { nationalities } from "/components/hr_components/nationalities.js";
import DariDatePicker from "/components/DariDatePicker";

// import { toast } from "react-toastify";
// import { useRouter } from 'next/router';

const AddTeacher = () => {
  // tajke faculty and related departments
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [relatedDepartments, setRelatedDepartments] = useState([]);
  // const [selectedNationality, setSelectedNationality] = useState(null);

  const handleFacultyChange = (e) => {
    const facultyId = parseInt(e.target.value);
    setSelectedFaculty(facultyId);
    const relatedDepts = departments.filter(
      (dept) => dept.facultyId === facultyId
    );
    setRelatedDepartments(relatedDepts);
  };
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
            <SubTitle subtitle="شهرت استاد" />
            <InputButton
              title="کود تشکیلاتی بست"
              type="text"
              name="code"
              placeholder="کود تشکیلاتی بست"
              autoFocus
              // onChange={handleLastNameChange}
            />
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
                {nationalities.map((nationality) => (
                  <option key={nationality.id} value={nationality.id}>
                    {nationality.name}
                  </option>
                ))}
              </select>
            </div>
            <DariDatePicker
              title="تاریخ تولد"
              placeholder="تاریخ تولد"
              name="birthdate"
            />

            <InputButton
              title="نمبر تذکره"
              type="text"
              name="id"
              placeholder="نمبر تذکره"
              // onChange={setMAFormInfo}
              required
            />
            {/* living place information */}
            <SubTitle subtitle="سکونت اصلی" />
            <InputButton
              title="ولایت"
              type="text"
              name="mcity"
              placeholder="ولایت"
              // onChange={setMAFormInfo}
              required
            />
            <InputButton
              title="ولسوالی"
              type="text"
              name="mvillage"
              placeholder="ولسوالی"
              // onChange={setMAFormInfo}
              required
            />
            <InputButton
              title="قریه یا ناحیه"
              type="text"
              name="mdistrict"
              placeholder="قریه/ناحیه"
              // onChange={setMAFormInfo}
              required
            />
            <SubTitle subtitle="سکونت فعلی" />
            <InputButton
              title="ولایت"
              type="text"
              name="city"
              placeholder="ولایت"
              // onChange={setMAFormInfo}
              required
            />
            <InputButton
              title="ولسوالی"
              type="text"
              name="village"
              placeholder="ولسوالی"
              // onChange={setMAFormInfo}
              required
            />
            <InputButton
              title="قریه یا ناحیه"
              type="text"
              name="district"
              placeholder="قریه/ناحیه"
              // onChange={setMAFormInfo}
              required
            />
            <SubTitle subtitle="معلومات اداری استاد" />

            <InputButton
              title="پوهنتون"
              type="text"
              name="university"
              value="کابل"
              placeholder="پوهنتون"
              // onChange={setMAFormInfo}
              required
            />
            <div className="w-[32%]">
              <label for="faculty">پوهنحی</label>
              <select
                class="form-control form-control-sm mb-3"
                id="nationality"
                onChange={handleFacultyChange}
              >
                {faculties.map((faculty) => (
                  <option key={faculty.id} value={faculty.id}>
                    {faculty.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-[32%]">
              <label for="department">دیپارتمنت</label>
              <select class="form-control form-control-sm mb-3" id="department">
                {relatedDepartments.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name}
                  </option>
                ))}
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
            <InputButton
              title="بست"
              type="number"
              name="bast"
              min={1}
              // onChange={setMAFormInfo}
              required
            />
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
            <SubTitle subtitle="مشخصات تحصیلی"/>
            <div className="w-[32%]">
              <label for="degree">درجه تحصیل</label>
              <select class="form-control form-control-sm mb-3" id="degree">
                <option value="1">دوکتورا</option>
                <option value="2">ماستر </option>
                <option value="3">لیسانس </option>
              </select>
            </div>
            <InputButton
              title="رشته تحصیل"
              type="text"
              name="major"
              placeholder="رشته تحصیل"
              // onChange={setMAFormInfo}
              required
            />
            <InputButton
              title="سال فراغت"
              name="graduateyear"
              type="number"
              min="1370"
              max="1420"
              // onChange={setMAFormInfo}
              required
            />
            <InputButton
              title="پوهنتون"
              type="text"
              name="university"
              // onChange={setMAFormInfo}
              required
            />
          </section>
          <CustomButton href="/hr/recruitment" />
        </form>
      </main>
    </>
  );
};

export default AddTeacher;
