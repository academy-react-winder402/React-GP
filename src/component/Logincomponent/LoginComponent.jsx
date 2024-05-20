import sun from "../../../public/icons8-sun-48.png";
import lag from "../../../public/mobile-testing.png";
import home from "../../../public/icons8-home-32.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const LoginComponent = () => {
  const windowHeight = window.innerHeight;

  const validation = Yup.object().shape({
    username: Yup.string().required("نام کاربری را وارد کنید"),
    password: Yup.string().required("رمز عبور را وارد کنید"),
  });

  return (
    <>
    <div className='block sm:hidden'>
      <div className="w-full h-full flex">
        <div className="relative w-[100%] h-full" style={{ height: windowHeight }}>
          <div className="z-30 absolute w-[100%] h-full z-9">
            <div className="bg-[url('../../../public/bg-blur.png')] w-[100%] h-[100%] flex">
              <div className="w-[100%] bg-blue-400">
                <div className="head w-[100%] flex justify-end mt-[25px]">
                  <Link to="/">
                    <img
                      src={home}
                      alt=""
                      className="me-[25px] w-[24px] h-[24px]"
                    />
                  </Link>
                </div>
                <div className="mb-10">
                  <h1 className="text-[28px] text-white text-center font-normal mb-[48px]">
                    ورود به سایت
                  </h1>
                  <Formik
                    initialValues={{ username: "" }}
                    validationSchema={validation}
                  >
                    <Form className="flex flex-col items-center gap-[16px]">
                      <div className="w-[60%]">
                        <p className="text-[14px] font-normal text-right text-white mb-[14px]">
                          نام کاربری و رمز عبور خود را وارد کنید
                        </p>
                        <Field
                          name="username"
                          type="text"
                          placeholder="شماره موبایل یا ایمیل"
                          className="w-[100%] h-[44px] mb-[16px] rounded-[10px] pr-[10px]"
                        />
                        <ErrorMessage name="username"></ErrorMessage>
                        <Field
                          name="password"
                          type="text"
                          placeholder="رمز عبور"
                          className="w-[100%] h-[44px] mb-[16px] rounded-[10px] pr-[10px]"
                        />
                        <ErrorMessage name="username"></ErrorMessage>

                        <div>
                          <div className="w-[30%] mr-auto">
                            <Link
                              to="/forgetpass"
                              className="text-white text-[14px] font-normal"
                            >
                              فراموشی رمز؟
                            </Link>
                          </div>
                          <div className="flex">
                            <input
                              type="checkbox"
                              className="w-[20px] h-[20px]"
                            />
                            <p className="text-white text-[14px] font-normal my-auto">
                              مرا به خاطر بسپار
                            </p>
                          </div>
                        </div>
                      </div>

                      <Link
                        to="/"
                        className="w-[40%] h-[40px] bg-[#732AFF] text-[#FFFFFF] rounded-full mt-[24px] text-center pt-1"
                      >
                        ورود
                      </Link>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='hidden sm:block md:hidden'>
      <div className="w-full h-full flex">
        <div className="relative w-[100%] h-full" style={{ height: windowHeight }}>
          <div className="z-30 absolute w-[100%] h-full z-9">
            <div className="bg-[url('../../../public/bg-blur.png')] w-[100%] h-[100%] flex">
              <div className="w-[100%] bg-blue-400">
                <div className="head w-[100%] flex justify-end mt-[25px]">
                  <Link to="/">                    
                    <img
                      src={home}
                      alt=""
                      className="me-[25px] w-[24px] h-[24px]"
                    />
                  </Link>
                </div>
                <div className="mb-10">
                  <h1 className="text-[28px] text-white text-center font-normal mb-[48px]">
                    ورود به سایت
                  </h1>
                  <Formik
                    initialValues={{ username: "" }}
                    validationSchema={validation}
                  >
                    <Form className="flex flex-col items-center gap-[16px]">
                      <div className="w-[60%]">
                        <p className="text-[14px] font-normal text-right text-white mb-[14px]">
                          نام کاربری و رمز عبور خود را وارد کنید
                        </p>
                        <Field
                          name="username"
                          type="text"
                          placeholder="شماره موبایل یا ایمیل"
                          className="w-[100%] h-[44px] mb-[16px] rounded-[10px] pr-[10px]"
                        />
                        <ErrorMessage name="username"></ErrorMessage>
                        <Field
                          name="password"
                          type="text"
                          placeholder="رمز عبور"
                          className="w-[100%] h-[44px] mb-[16px] rounded-[10px] pr-[10px]"
                        />
                        <ErrorMessage name="username"></ErrorMessage>

                        <div>
                          <div className="w-[30%] mr-auto">
                            <Link
                              to="/forgetpass"
                              className="text-white text-[14px] font-normal"
                            >
                              فراموشی رمز؟
                            </Link>
                          </div>
                          <div className="flex">
                            <input
                              type="checkbox"
                              className="w-[20px] h-[20px]"
                            />
                            <p className="text-white text-[14px] font-normal my-auto">
                              مرا به خاطر بسپار
                            </p>
                          </div>
                        </div>
                      </div>

                      <Link
                        to="/"
                        className="w-[40%] h-[40px] bg-[#732AFF] text-[#FFFFFF] rounded-full mt-[24px] text-center pt-1"
                      >
                        ورود
                      </Link>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='hidden md:block lg:hidden'>
      <div className="w-full flex px-10">
        <div className="relative w-[100%]" style={{ height: windowHeight }}>
          <div className="z-30 absolute w-[100%] z-9 top-[50px]">
            <div className="bg-[url('../../../public/bg-blur.png')] w-[100%] h-[70%] flex mx-auto rounded-[10px]">
              <div className="w-[100%] bg-blue-400 rounded-[10px]">
                <div className="head w-[100%] flex justify-end mt-[25px]">
                  <Link to="/">
                      <img
                        src={home}
                        alt=""
                        className="me-[25px] w-[24px] h-[24px]"
                      />
                  </Link>
                </div>
                <div className="mb-10">
                  <h1 className="text-[28px] text-white text-center font-normal mb-[48px]">
                    ورود به سایت
                  </h1>
                  <Formik
                    initialValues={{ username: "" }}
                    validationSchema={validation}
                  >
                    <Form className="flex flex-col items-center gap-[16px]">
                      <div className="w-[60%]">
                        <p className="text-[14px] font-normal text-right text-white mb-[14px]">
                          نام کاربری و رمز عبور خود را وارد کنید
                        </p>
                        <Field
                          name="username"
                          type="text"
                          placeholder="شماره موبایل یا ایمیل"
                          className="w-[100%] h-[44px] mb-[16px] rounded-[10px] pr-[10px]"
                        />
                        <ErrorMessage name="username"></ErrorMessage>
                        <Field
                          name="password"
                          type="text"
                          placeholder="رمز عبور"
                          className="w-[100%] h-[44px] mb-[16px] rounded-[10px] pr-[10px]"
                        />
                        <ErrorMessage name="username"></ErrorMessage>

                        <div>
                          <div className="w-[30%] mr-auto">
                            <Link
                              to="/forgetpass"
                              className="text-white text-[14px] font-normal"
                            >
                              فراموشی رمز؟
                            </Link>
                          </div>
                          <div className="flex">
                            <input
                              type="checkbox"
                              className="w-[20px] h-[20px]"
                            />
                            <p className="text-white text-[14px] font-normal my-auto">
                              مرا به خاطر بسپار
                            </p>
                          </div>
                        </div>
                      </div>

                      <Link
                        to="/"
                        className="w-[40%] h-[40px] bg-[#732AFF] text-[#FFFFFF] rounded-full mt-[24px] text-center pt-1"
                      >
                        ورود
                      </Link>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='hidden lg:block xl:hidden'>
      <div className="w-full flex px-10">
        <div className="relative w-[100%]" style={{ height: windowHeight }}>
          <div className="z-30 absolute w-[100%] z-9 top-[50px]">
            <div className="bg-[url('../../../public/bg-blur.png')] w-[100%] h-[70%] flex mx-auto rounded-[10px]">
              <div className="w-[90%] bg-blue-400 rounded-[10px]">
                <div className="head w-[100%] flex justify-end mt-[25px]">
                  <Link to="/">
                    <img
                      src={home}
                      alt=""
                      className="me-[25px] w-[24px] h-[24px]"
                    />
                  </Link>
                </div>
                <div className="mb-10">
                  <h1 className="text-[28px] text-white text-center font-normal mb-[48px]">
                    ورود به سایت
                  </h1>
                  <Formik
                    initialValues={{ username: "" }}
                    validationSchema={validation}
                  >
                    <Form className="flex flex-col items-center gap-[16px]">
                      <div className="w-[60%]">
                        <p className="text-[14px] font-normal text-right text-white mb-[14px]">
                          نام کاربری و رمز عبور خود را وارد کنید
                        </p>
                        <Field
                          name="username"
                          type="text"
                          placeholder="شماره موبایل یا ایمیل"
                          className="w-[100%] h-[44px] mb-[16px] rounded-[10px] pr-[10px]"
                        />
                        <ErrorMessage name="username"></ErrorMessage>
                        <Field
                          name="password"
                          type="text"
                          placeholder="رمز عبور"
                          className="w-[100%] h-[44px] mb-[16px] rounded-[10px] pr-[10px]"
                        />
                        <ErrorMessage name="username"></ErrorMessage>

                        <div>
                          <div className="w-[30%] mr-auto">
                            <Link
                              to="/forgetpass"
                              className="text-white text-[14px] font-normal"
                            >
                              فراموشی رمز؟
                            </Link>
                          </div>
                          <div className="flex">
                            <input
                              type="checkbox"
                              className="w-[20px] h-[20px]"
                            />
                            <p className="text-white text-[14px] font-normal my-auto">
                              مرا به خاطر بسپار
                            </p>
                          </div>
                        </div>
                      </div>

                      <Link
                        to="/"
                        className="w-[40%] h-[40px] bg-[#732AFF] text-[#FFFFFF] rounded-full mt-[24px] text-center pt-1"
                      >
                        ورود
                      </Link>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="w-[90%]" src={lag} alt="" />
      </div>
    </div>

    <div className='hidden xl:block'>
      <div className="w-full flex px-10">
        <div className="relative w-[100%]" style={{ height: windowHeight }}>
          <div className="z-30 absolute w-[100%] z-9 top-[50px]">
            <div className="bg-[url('../../../public/bg-blur.png')] w-[100%] h-[70%] flex mx-auto rounded-[10px]">
              <div className="w-[90%] bg-blue-400 rounded-[10px]">
                <div className="head w-[100%] flex justify-end mt-[25px]">
                  <Link to='/'>
                    <img
                      src={home}
                      alt=""
                      className="me-[25px] w-[24px] h-[24px]"
                    />
                  </Link>
                </div>
                <div className="mb-10">
                  <h1 className="text-[28px] text-white text-center font-normal mb-[48px]">
                    ورود به سایت
                  </h1>
                  <Formik
                    initialValues={{ username: "" }}
                    validationSchema={validation}
                  >
                    <Form className="flex flex-col items-center gap-[16px]">
                      <div className="w-[60%]">
                        <p className="text-[14px] font-normal text-right text-white mb-[14px]">
                          نام کاربری و رمز عبور خود را وارد کنید
                        </p>
                        <Field
                          name="username"
                          type="text"
                          placeholder="شماره موبایل یا ایمیل"
                          className="w-[100%] h-[44px] mb-[16px] rounded-[10px] pr-[10px]"
                        />
                        <ErrorMessage name="username"></ErrorMessage>
                        <Field
                          name="password"
                          type="text"
                          placeholder="رمز عبور"
                          className="w-[100%] h-[44px] mb-[16px] rounded-[10px] pr-[10px]"
                        />
                        <ErrorMessage name="username"></ErrorMessage>

                        <div>
                          <div className="w-[30%] mr-auto">
                            <Link
                              to="/forgetpass"
                              className="text-white text-[14px] font-normal"
                            >
                              فراموشی رمز؟
                            </Link>
                          </div>
                          <div className="flex">
                            <input
                              type="checkbox"
                              className="w-[20px] h-[20px]"
                            />
                            <p className="text-white text-[14px] font-normal my-auto">
                              مرا به خاطر بسپار
                            </p>
                          </div>
                        </div>
                      </div>

                      <Link
                        to="/"
                        className="w-[40%] h-[40px] bg-[#732AFF] text-[#FFFFFF] rounded-full mt-[24px] text-center pt-1"
                      >
                        ورود
                      </Link>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full" src={lag} alt="" />
      </div>
    </div>
    </>
  );
};

export default LoginComponent;
