import Image from "next/image";
const Navbar = () => {
    return (
      <header className='text-center text-xl  bg-slate-500 my-0 p-2 rounded-b-2xl flex justify-between'>
      <Image src={'/../public/images/hr/vezarat.png'} alt="logo" width={100} height={100} />
            <div className="pt-2 text-white"> <h3>وزارت تحصیلات عالی</h3>
            <h3>ریاست پوهنتون کابل</h3>
            <h3>مدیریت منابع بشری</h3></div>
      <Image src={'/../public/images/hr/univ.png'} alt="logo" width={100} height={100} />
      </header>

    // )}
    
//  <header className="flex justify-between text-2xl my-3">
// <div className="mx-4">
//   <Image src={'/../public/images/hr/vezarat.png'} alt="logo" width={100} height={100} />
// </div>
// <div className="text-center text-xl  bg-slate-400 my-0 p-2 rounded-b-2xl">
//                 <h3>وزارت تحصیلات عالی</h3>
//              <h3>ریاست پوهنتون کابل</h3>
//            <h3>مدیریت منابع بشری</h3>
// </div>
// <div className="mx-4">
//   <Image src={'/../public/images/hr/univ.png'} alt="logo" width={100} height={100} />
// </div>
// </header> 


   ) }  
  
  export default Navbar;