import Link from "next/link";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";


const FormKaryabi = () => {


    return (
        <>
          <main>
            <form >
              <section className="w-[95%] flex justify-between flex-wrap mx-auto my-3">
                <div  className="w-[95%] flex justify-center items-center">
                
                <h2 className="border-b-4 m-4">فورم کاریابی</h2>
                <span className="w-1 h-1 "></span>
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
                    type="number"
                    name="pendant_num"
                    className="form-control form-control-sm mb-3"
                    placeholder="نمبر تذکره"
                    // onChange={setMAFormInfo}
                    required
                  />
                </div>
    
                <div className="w-[32%]">
                  <label className="form-label"> سال فراغت</label>
                  <input
                    type="date"
                    name="year"
                    className="form-control form-control-sm mb-3"
                    // onChange={setMAFormInfo}
                    required
                  />
                </div>
    
                <div className="w-[32%]">
                  <label className="form-label">موسسه تحصلی</label>
                  <input
                    type="text"
                    name="university"
                    className="form-control form-control-sm mb-3"
                    placeholder="موسسه تحصلی"
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
                    name="tariff_num"
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
                    name="pendant_num"
                    className="form-control form-control-sm mb-3"
                    placeholder="ایمل آدرس"
                    // onChange={setMAFormInfo}
                    required
                  />
                </div>
    
                <div className="w-[32%]">
                  <label className="form-label">تاریخ توزیع فورم</label>
                  <input
                    type="date"
                    name="tariff_date"
                    className="form-control form-control-sm mb-3"
                    // onChange={setMAFormInfo}
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
    
              <div className="flex">
                <button
                  type="submit"
                  className="btn btn-outline-success flex mr-10 ml-5"
                >
                  ثبت
                  <FaPlus className="mx-1 bg-inherit" />
                </button>
                <Link href="./hr/recruitment" className="btn btn-outline-secondary flex">
                  <FaArrowCircleRight className="mx-1 bg-inherit" /> بازگشت
                </Link>
              </div>
            </form>
          </main>
        </>
      );
}

export default FormKaryabi;