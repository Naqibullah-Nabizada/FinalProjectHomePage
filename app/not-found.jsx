const Notfound = () => {
  return (
    <div className="flex justify-center flex-col items-center w-[100vw] h-[100vh] notFound">
      <h1 className="text-8xl mb-3">404</h1>
      <h1 className="text-4xl mb-5">صفحه مورد نظر پیدا نشد!</h1>
      <a href="/" className="btn btn-outline-warning">بازگشت به خانه</a>
    </div>
  );
};

export default Notfound;
