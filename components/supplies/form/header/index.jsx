"use Client";
const FormHeader = (props) => {
  return (
    <div>
      <header className="text-center text-xl my-2">
        <h3>آمریت تهیه و تدارکات</h3>
        <h3>مدیریت عمومی اجناس</h3>
        <h3>{props.title?props.title:""}</h3>
      </header>
      <hr />
    </div>
  );
};

export default FormHeader;
