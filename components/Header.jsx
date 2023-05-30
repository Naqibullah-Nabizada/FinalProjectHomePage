import Button from "./Button"
import Navbar from "./Navbar"
import Search from "./Search"

const Header = ({ hrefBackBtn, hrefAddBtn, pageName }) => {
  return (
    <>
      <div className="w-[40%] flex">
        <Button hrefBackBtn={hrefBackBtn} hrefAddBtn={hrefAddBtn} text={'اضافه کردن'} />
      </div>
      <div className="w-[20%]">
        <Navbar />
      </div>
      <div className="w-[40%]">
        <Search pageName={pageName} />
      </div>
    </>
  )
}

export default Header