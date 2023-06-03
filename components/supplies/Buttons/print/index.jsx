export default function Print() {
  return (
    <div>
      <div className={`px-3 flex-col mb-2`}>
        <div className="flex justify-start items-center text-xl">
          م-۷ راپور رسید اجناس/خدمات
        </div>

        <div className="flex-col justify-center items-center text-center text-xl">
          <p>وزارت مالیه ریاست خزاین</p>
          <p>فورم م-۷ راپور رسید اجناس/خدمات</p>
        </div>
      </div>
      <div
        className={`flex justify-start items-center border px-3 py-2 text-justify`}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        mollitia illum quidem, dignissimos tempore eum sit, est aperiam modi
        consequatur asperiores corrupti totam veniam natus ex rerum. Iusto,
        necessitatibus possimus.
      </div>
    </div>
  );
}


// const handlePrint = () => {
  //   useReactToPrint({
  //     content: () => props.content,
  //   });
  // };

  // return (
  //   <button
  //     className="btn flex justify-center items-center gap-1 text-white btn-dark"
  //     onClick={handlePrint}
  //   >
  //     {props.title}
  //     <BsFillPrinterFill />
  //   </button>
  // );