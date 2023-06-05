"use client";
// // import axios from "axios";
import { useState } from "react";
import { InputButton, CustomButton } from "/components/Buttons.jsx";
// import faculties and departments data
import { faculties, departments } from "/components/hr_components/Faculties.js";
import { nationalities } from "/components/hr_components/nationalities.js";
import { SubTitle } from "/components/hr_components/subtitle.js";
import DariDatePicker from "/components/DariDatePicker";
const AddEmployee = () => {
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

  return (
    <>
      <main>
        <form>
          <section className="w-[95%] flex justify-between flex-wrap mx-auto my-3">
            <SubTitle subtitle="شهرت کارمند" />

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
                <option value="male">آقا</option>
                <option value="female">خانم</option>
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

            <InputButton
              title="نمبر تذکره"
              type="text"
              name="id"
              placeholder="نمبر تذکره"
              // onChange={setMAFormInfo}
              required
            />
            <DariDatePicker
              title="تاریخ تولد"
              placeholder="تاریخ تولد"
              name="birthdate"
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
            <SubTitle subtitle="معلومات اداری کارمند" />

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
          </section>
          <CustomButton href="/hr/recruitment" />
        </form>
      </main>
    </>
  );
};

export default AddEmployee;
