import Link from "next/link";
const Login = () => {
  return (
    <div>
      <section className="h-full gradient-form bg-gray-200 md:h-screen">
        <div className="container py-12 px-6 h-full">
          <div className=" flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                      <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                        مدیریت منابع بشری
                      </h4>
                    </div>
                    <Link href="./recruitment">
                    <form  method="POST">
                      <p className="mb-4">لطفا به حساب خود وارد شوید</p>
                      <div className="mb-4">
                        <input
                          type="email"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="ایمل"
                          name="userEmail"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="رمز"
                          name="pin"
                        />
                      </div>
                      <div className="text-center pt-1 mb-12 pb-1">
                        <button
                          className="btn btn-outline-dark flex mb-2"
                          type="submit"
                        >
                          وارد شدن
                        </button>
                      </div>
                    </form>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
