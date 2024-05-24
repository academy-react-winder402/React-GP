import { useState } from "react";
// import zangoole from '../../../../public/PanelDaneshJoo/icons8-bell-50.png'
// import sabad from '../../../../public/PanelDaneshJoo/icons8-cart-64.png'
import aks from "../../../../public/PanelDaneshJoo/react.png";
import Dashboard from "../Dashboard/Dashboard";
// import CourseReserve from '../CourseReserve/CourseReserve';
import profileAks from "../../../../public/PanelDaneshJoo/Mask Group 60.png";
import img1 from "../../../../public/PanelDaneshJoo/icons8-dashboard-layout-48.png";
import img2 from "../../../../public/PanelDaneshJoo/person-account-circle-svgrepo-com.png";
import img3 from "../../../../public/PanelDaneshJoo/ebook-svgrepo-com.png";
import img4 from "../../../../public/PanelDaneshJoo/key-alt-svgrepo-com.png";
import img5 from "../../../../public/PanelDaneshJoo/power-off-svgrepo-com.png";
import img6 from "../../../../public/PanelDaneshJoo/comment-line-svgrepo-com.png";

const DPanel = () => {
  const [Count, setCount] = useState(1);

  const [slide, setSlide] = useState([
    {
      src: aks,
      name: "آموزش رایگان html",
      ostadName: "دکتر بحرالعلوم",
      pir: "500000",
    },
    {
      src: aks,
      name: "آموزش رایگان html",
      ostadName: "دکتر بحرالعلوم",
      pir: "500000",
    },
  ]);

  const [slides, setSlides] = useState([
    {
      src: aks,
      name: "آموزش رایگان html",
      ostadName: "دکتر بحرالعلوم",
      pir: "500000",
    },
    {
      src: aks,
      name: "آموزش رایگان html",
      ostadName: "دکتر بحرالعلوم",
      pir: "500000",
    },
  ]);

  const windowHeight = window.innerHeight;
  return (
    <div style={{ height: windowHeight }}>
      <div className="hidden xl:block h-full w-full pt-[1.5%] bg-blue-200">
        <div className="h-[97%] w-[97%] flex justify-between rounded-xl mx-auto">
          <div className="w-[25%] h-full bg-blue-600 rounded-xl">
            <div>
              <img
                className="w-[150px] h-[150px] mx-auto mt-[50px]"
                src={profileAks}
              />
              <h2 className="font-semibold text-xl flex justify-center mt-[10px] text-white">
                {" "}
                بیتا قنبری{" "}
              </h2>
            </div>
            <div className=" border-t-[1px] border-t-white mt-[20px] w-[90%] mx-auto pt-[50px]">
              <div className="flex gap-5 mb-5">
                <img className="w-8 h-8" src={img1} />
                <h2 className="text-xl text-white"> داشبورد </h2>
              </div>
              <div className="flex gap-5 mb-5">
                <img className="w-8 h-8" src={img2} />
                <h2 className="text-xl text-white"> ویرایش پروفایل </h2>
              </div>
              <div className="flex gap-5 mb-5">
                <img className="w-8 h-8" src={img3} />
                <h2 className="text-xl text-white"> دوره های من </h2>
              </div>
              <div className="flex gap-5 mb-5">
                <img className="w-8 h-8" src={img4} />
                <h2 className="text-xl text-white"> تغییر رمز </h2>
              </div>
              <div className="flex gap-5 mb-5">
                <img className="w-8 h-8" src={img5} />
                <h2 className="text-xl text-white"> خروج از حساب </h2>
              </div>
              <div className="flex gap-5 mb-5">
                <img className="w-8 h-8" src={img6} />
                <h2 className="text-xl text-white"> نظرات ثبت شده </h2>
              </div>
            </div>
          </div>
          {Count === 1 && <Dashboard />}
        </div>
      </div>
    </div>
  );
};

export default DPanel;
