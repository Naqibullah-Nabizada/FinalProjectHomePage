const page = () => {
  return (
    <div>
      Enter
    </div>
  );
}

export default page;

// "use client";

// import { AuthContext } from '@/app/hr/admin/context/context.js';
// import Navbar from "@/components/Navbar";
// import PrintButton from "@/components/PrintComponent";
// import { degrees } from "@/components/hr_components/Degrees.js";
// import { education_rotba } from "@/components/hr_components/EducationRotba.js";
// import { months } from "@/components/hr_components/Months.js";
// import { translationDictionary } from "@/components/hr_components/TableHeader";
// import axios from "axios";
// import Image from "next/image";
// import Link from "next/link";
// import { useContext, useEffect, useRef, useState } from "react";
// import { useForm } from "react-hook-form";
// import { FaArrowCircleRight, FaSearch } from "react-icons/fa";

// const Report = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const { token, admin } = useContext(AuthContext);
//   const printContentRef = useRef();
//   const [faculties, setFaculties] = useState([]);
//   const [departments, setDepartments] = useState([]);
//   const [selectedFacultyId, setSelectedFacultyId] = useState(null);
//   const [data, setData] = useState([]);

//   const useFetchData = (url, setData) => {
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await axios.get(url);
//           setData(response.data);
//         } catch (err) {
//           const { response } = err;
//           const errorMsg = response ? response.data : "خطای سرور داخلی";
//           toast.error(errorMsg, {
//             autoClose: 3000,
//           });
//           console.log(err);
//         }
//       };
//       fetchData();
//     }, []);
//   };
//   useFetchData("http://localhost:5000/faculty_names", setFaculties);
//   useFetchData("http://localhost:5000/dep_names", setDepartments);

//   const handleFacultyChange = (e) => {
//     setSelectedFacultyId(e.target.value);
//   }
//   const filteredDepartments = selectedFacultyId ? departments.filter((dep) => dep.faculty_id === selectedFacultyId) : departments;


//   const submitForm = async (formData) => {
//     try {
//       const { data } = await axios.post("http://localhost:5000/report", formData);
//       setData(data)
//     } catch (err) {
//       const { response } = err;
//       const errorMsg = response ? response.data : "خطای سرور داخلی";
//       toast.error(errorMsg, {
//         autoClose: 3000,
//       });
//       console.log(err);
//     }
//   };

//   const headers = data && data[0] ? Object.keys(data[0]) : [];
//   const translatedHeaders = headers.map((header) => translationDictionary[header] && header);

//   return (
//     <>
//       <Navbar
//         headTitle="آمریت منابع بشری"
//         partTitle="بخش گزارشات و جستجو کارمندان"
//       />
//       <hr />
//       {
//         token !== null && admin == 1 ?
//           (
//             <div className="print-content flex flex-col mx-4" ref={printContentRef}>
//               <form onSubmit={handleSubmit(submitForm)} method="POST" className="flex justify-between items-center w-full my-2">
//                 <div className="w-1/12">
//                   <label className="form-label">نام جدول</label>
//                   <select
//                     {...register("tableId")}
//                     className="input"
//                   >
//                     <option value="1">جدول استادان</option>
//                     <option value="2">جدول کارمندان اداری</option>
//                     <option value="3">جدول کارمندان  خدماتی</option>
//                   </select>
//                 </div>

//                 <div className="w-1/12">
//                   <label className="form-label">پوهنحًی</label>
//                   <select
//                     {...register("faculty_id")}
//                     className="input"
//                     onChange={handleFacultyChange}
//                   >
//                     <option value="">نام پوهنحًی</option>
//                     {faculties && faculties.map((faculty, index) => (
//                       <option key={index} value={faculty.faculty_id}>
//                         {faculty.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="w-1/12">
//                   <label className="form-label">دیپارتمنت</label>
//                   <select
//                     {...register("dep_id")}
//                     className="input"
//                   >
//                     <option value="">نام دیپارتمنت</option>
//                     {filteredDepartments && filteredDepartments.map((dept, index) => (
//                       <option key={index} value={dept.dep_id}>
//                         {dept.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="w-1/12">
//                   <label className="form-label">درجه تحصیل</label>
//                   <select
//                     {...register("degree")}
//                     className="input"
//                   >
//                     <option value="">درجه تحصیل</option>
//                     {degrees.map((degree, index) => (
//                       <option key={index} value={degree.name}>{degree.name}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="w-1/12">
//                   <label className="form-label">رتبه علمی</label>
//                   <select
//                     {...register("rotba")}
//                     className="input"
//                   >
//                     <option value="">رتبه علمی</option>
//                     {education_rotba.map((rotba, index) => (
//                       <option key={index} value={rotba.name}>
//                         {rotba.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="w-1/12">
//                   <label className="form-label">عنوان وظیفه</label>
//                   <input
//                     {...register("job_title", {
//                       minLength: { value: 3, message: "حداقل طول عنوان وظیفه ۳ کرکتر است" },
//                       maxLength: { value: 50, message: "حداکثر طول عنوان وظیفه ۵۰ کرکتر است" },
//                     })}
//                     className={`input ${errors.job_title ? 'error-input' : ''}`} />
//                   {errors.job_title && (
//                     <span className="text-red-500">{errors.job_title.message}</span>
//                   )}
//                 </div>
//                 <div className="w-1/12">
//                   <label className="form-label"> بست</label>
//                   <input
//                     type="number"
//                     {...register("bast", {
//                       min: { value: 1, message: "حداقل مقدار بست ۱ است" },
//                       max: { value: 8, message: "حداکثر مقدار بست ۸ است" },
//                     })}
//                     placeholder="بست"
//                     className={`input ${errors.bast ? 'error-input' : ''}`}
//                   />
//                   {errors.bast && (
//                     <span className="text-red-500">{errors.bast.message}</span>
//                   )}
//                 </div>
//                 <div className="w-1/12">
//                   <label className="form-label"> قدم</label>
//                   <input
//                     type="number"
//                     {...register("step", {
//                       min: { value: 1, message: "حداقل مقدار قدم ۱ است" },
//                       max: { value: 5, message: "حداکثر مقدار قدم ۵ است" },
//                     })}
//                     placeholder="قدم"
//                     className={`input ${errors.step ? 'error-input' : ''}`}
//                   />
//                   {errors.step && (
//                     <span className="text-red-500">{errors.step.message}</span>
//                   )}
//                 </div>


//                 <div className="w-1/12">
//                   <label className="form-label">سال استخدام</label>
//                   <input
//                     {...register("reg_year", {
//                       minLength: { value: 4, message: "سال نامعتبر است" },
//                       maxLength: { value: 4, message: "سال نامعتبر است" },
//                     })}
//                     className={`input ${errors.reg_year ? 'error-input' : ''}`} />
//                   {errors.reg_year && (
//                     <span className="text-red-500">{errors.reg_year.message}</span>
//                   )}
//                 </div>
//                 <div className="w-1/12">
//                   <label className="form-label">ماه استخدام</label>
//                   <select
//                     {...register("reg_month")}
//                     className="input"
//                   >
//                     <option value="">ماه</option>
//                     {months.map((month, index) => (
//                       <option key={index} value={month}>
//                         {index + 1}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <button type="submit" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded p-3 leading-normal no-underline text-green-500 border-green-500 hover:bg-green-500 hover:text-white ml-3 mt-4"><FaSearch className="bg-transparent" /></button>
//               </form>

//               <div className="flex flex-col w-full mx-auto overflow-x-auto">
//                 {
//                   (!data && data.length === 0) ? (<p className="text-center m-2 text-2xl">نتیجه ای یافت نشد. 😞</p>) : (
//                     <>
//                       <table className="table table-bordered table-sm table-striped table-responsive">
//                         <thead className="table-dark">
//                           <tr>
//                             <th className="text-nowrap text-center">شماره</th>
//                             {translatedHeaders.map((header, index) => (
//                               (header == "تاریخ منفکی")
//                                 ? null : (
//                                   <th className="text-nowrap text-center" key={index}>
//                                     {header}
//                                   </th>
//                                 )
//                             ))}
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {data.map((item, index) => (
//                             <tr key={index} className="text-nowrap text-center">
//                               <td>{item.id}</td>
//                               {Object.values(item).map((value, valueIndex) => {
//                                 if (Object.keys(item)[valueIndex] == "createdAt" && Object.keys(item)[valueIndex] == "updatedAt") {
//                                   const date = new Date(value);
//                                   const formattedDate = date.toLocaleDateString();
//                                   return (
//                                     <td key={valueIndex}>{formattedDate}</td>
//                                   );
//                                 } else if (Object.keys(item)[valueIndex] !== "deletedAt") {
//                                   return (
//                                     <td key={valueIndex}>{String(value)}</td>
//                                   );
//                                 } else {
//                                   return null
//                                 }
//                               })}
//                             </tr>
//                           ))}
//                         </tbody>
//                         <tfoot>
//                           <tr>
//                             <td className="text-center" colSpan={20}>
//                               <PrintButton ContentRef={printContentRef} />
//                             </td>
//                           </tr>
//                         </tfoot>
//                       </table>
//                     </>
//                   )
//                 }
//               </div>

//               <div className="flex justify-center print:hidden my-3">
//                 <div className="flex items-center">
//                   <Link
//                     href="/hr/reports"
//                     className="flex items-center text-center select-none border font-normal whitespace-no-wrap rounded py-2 px-3 leading-normal no-underline text-gray-600 border-gray-600 hover:text-white hover:bg-gray-700 bg-inherit"
//                   >
//                     <FaArrowCircleRight className="mx-1 bg-inherit" />
//                     بازگشت
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <section className="container col-8 flex justify-center align-items-center">
//               <div>
//                 <p className="alert alert-info text-center">برای دسترسی به این صفحه ابتدا وارد حساب کاربری خود شوید!</p>
//                 <Link href="hr/admin/auth" className="block mx-auto btn btn-outline-primary col-6">ورود به صفحه مدیریت</Link>
//               </div>
//               <div>
//                 <Image src={"/images/hr/register.svg"} alt='register' width={500} height={500} />
//               </div>
//             </section>
//           )
//       }
//     </>
//   );
// };

// export default Report;