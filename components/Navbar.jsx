const Navbar = ({title}) => {
  return (
    <header className='text-center text-xl my-2'>
           <h3>وزارت تحصیلات عالی</h3>
          <h3>ریاست پوهنتون کابل</h3>
          <h3>{title}</h3>
    </header>
  )
}

export default Navbar