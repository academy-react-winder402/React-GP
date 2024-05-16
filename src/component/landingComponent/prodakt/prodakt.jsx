import pic from "../../../assets/01.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faStar,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Rating } from "@mui/material";
import intersect from "../../../../public/Intersect1.png";
import group from "../../../../public/Group 53.png";
import arrow from "../../../../public/arrow-leftt.png";
import star from "../../../../public/star 2.png";
import { NavLink } from "react-router-dom";

const Prodakt = () => {
  const [slide, setSlide] = useState([
    {
      src: intersect,
      butt: "Ui/Ux Design",
      pir: "250000",
      toz: "صورت پروژه محور سایت فلان آموزش پیشرفته دانت به",
      src1: group,
      pakhsh: "24 درس",
      src3: arrow,
    },
    {
      src: intersect,
      butt: "Ui/Ux Design",
      pir: "250000",
      toz: "صورت پروژه محور سایت فلان آموزش پیشرفته دانت به",
      src1: group,
      pakhsh: "24 درس",
      src3: arrow,
    },
    {
      src: intersect,
      butt: "Ui/Ux Design",
      pir: "250000",
      toz: "صورت پروژه محور سایت فلان آموزش پیشرفته دانت به",
      src1: group,
      pakhsh: "24 درس",
      src3: arrow,
    },
    {
      src: intersect,
      butt: "Ui/Ux Design",
      pir: "250000",
      toz: "صورت پروژه محور سایت فلان آموزش پیشرفته دانت به",
      src1: group,
      pakhsh: "24 درس",
      src3: arrow,
    },
    {
      src: intersect,
      butt: "Ui/Ux Design",
      pir: "250000",
      toz: "صورت پروژه محور سایت فلان آموزش پیشرفته دانت به",
      src1: group,
      pakhsh: "24 درس",
      src3: arrow,
    },
    {
      src: intersect,
      butt: "Ui/Ux Design",
      pir: "250000",
      toz: "صورت پروژه محور سایت فلان آموزش پیشرفته دانت به",
      src1: group,
      pakhsh: "24 درس",
      src3: arrow,
    },
  ]);
  return (
    <div>

      <div className="block sm:hidden">
        <div className="w-[90%] mx-auto mb-36">
          <h2 className="text-2xl font-bold mt-20 text-center">
            {" "}
            محصولات{" "}
          </h2>
          <div className="justify-center w-full mt-[50px] flex flex-wrap gap-[15px] mb-[30px]">
            {slide.map((item) => {
              return (
                <div className="shadow-[0px_0px_7px_2px_rgba(0,0,0,0.2)] py-[20px] px-[20px] rounded-2xl w-[300px]">
                  <img className="w-full mx-auto mb-3" src={item.src} />
                  <div className="flex justify-between mb-3">
                    <div className="text-white rounded-full text-center px-2 bg-blue-700 whitespace-nowrap">
                      {" "}
                      {item.butt}{" "}
                    </div>
                    <price className="text-red-600"> {item.pir} </price>
                  </div>
                  <p className="mb-3"> {item.toz} </p>
                  <div className="flex gap-2 mb-3">
                    <img src={item.src1} />
                    <h3 className="text-xs"> {item.pakhsh} </h3>
                  </div>
                  <div className="border-2 border-blue-700 mb-3"></div>
                  <div className="flex justify-between">
                    <Rating name="size-medium" defaultValue={2} />
                    <div className="w-10 h-10 rounded-full bg-blue-700">
                      <img className="mx-auto my-2" src={item.src3} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-[180px] mx-auto">
            <NavLink to='/producta' className="px-8 py-2 bg-blue-700 text-white rounded-full"> مشاهده ی بیشتر </NavLink>
          </div>
        </div>
      </div>

      <div className='hidden sm:block md:hidden'>
        <div className="w-[90%] mx-auto mb-36">
          <h2 className="text-2xl font-bold mt-20 text-center">
            {" "}
            محصولات{" "}
          </h2>
          <div className="justify-center w-full mt-[50px] flex flex-wrap gap-[15px] mb-[30px]">
            {slide.map((item) => {
              return (
                <div className="shadow-[0px_0px_7px_2px_rgba(0,0,0,0.2)] py-[20px] px-[20px] rounded-2xl w-[300px]">
                  <img className="w-full mx-auto mb-3" src={item.src} />
                  <div className="flex justify-between mb-3">
                    <div className="text-white rounded-full text-center px-2 bg-blue-700 whitespace-nowrap">
                      {" "}
                      {item.butt}{" "}
                    </div>
                    <price className="text-red-600"> {item.pir} </price>
                  </div>
                  <p className="mb-3"> {item.toz} </p>
                  <div className="flex gap-2 mb-3">
                    <img src={item.src1} />
                    <h3 className="text-xs"> {item.pakhsh} </h3>
                  </div>
                  <div className="border-2 border-blue-700 mb-3"></div>
                  <div className="flex justify-between">
                    <Rating name="size-medium" defaultValue={2} />
                    <div className="w-10 h-10 rounded-full bg-blue-700">
                      <img className="mx-auto my-2" src={item.src3} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-[180px] mx-auto">
            <NavLink to='/producta' className="px-8 py-2 bg-blue-700 text-white rounded-full"> مشاهده ی بیشتر </NavLink>
          </div>
        </div>
      </div>

      <div className='hidden md:block lg:hidden'>
        <div className="w-[90%] mx-auto mb-36">
          <h2 className="text-2xl font-bold mt-20 text-center">
            {" "}
            محصولات{" "}
          </h2>
          <div className="justify-center w-full mt-[50px] flex flex-wrap gap-[15px] mb-[30px]">
            {slide.map((item) => {
              return (
                <div className="shadow-[0px_0px_7px_2px_rgba(0,0,0,0.2)] py-[20px] px-[20px] rounded-2xl w-[300px]">
                  <img className="w-full mx-auto mb-3" src={item.src} />
                  <div className="flex justify-between mb-3">
                    <div className="text-white rounded-full text-center px-2 bg-blue-700 whitespace-nowrap">
                      {" "}
                      {item.butt}{" "}
                    </div>
                    <price className="text-red-600"> {item.pir} </price>
                  </div>
                  <p className="mb-3"> {item.toz} </p>
                  <div className="flex gap-2 mb-3">
                    <img src={item.src1} />
                    <h3 className="text-xs"> {item.pakhsh} </h3>
                  </div>
                  <div className="border-2 border-blue-700 mb-3"></div>
                  <div className="flex justify-between">
                    <Rating name="size-medium" defaultValue={2} />
                    <div className="w-10 h-10 rounded-full bg-blue-700">
                      <img className="mx-auto my-2" src={item.src3} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-[180px] mx-auto">
            <NavLink to='/producta' className="px-8 py-2 bg-blue-700 text-white rounded-full"> مشاهده ی بیشتر </NavLink>
          </div>
        </div>
      </div>

      <div className="hidden lg:block xl:hidden">
        <div className="w-[100%] mx-auto mb-36">
          <h2 className="text-3xl font-bold mt-20 mb-10 text-center">
            {" "}
            محصولات{" "}
          </h2>
          <div className="justify-center w-full mt-[50px] flex flex-wrap gap-[15px] mb-[30px]">
            {slide.map((item) => {
              return (
                <div className="shadow-[0px_0px_7px_2px_rgba(0,0,0,0.2)] py-[20px] px-[20px] rounded-3xl w-[315px]">
                  <img className="w-full mx-auto mb-3" src={item.src} />
                  <div className="flex justify-between mb-3">
                    <div className="text-white rounded-full text-center px-2 bg-blue-700 whitespace-nowrap">
                      {" "}
                      {item.butt}{" "}
                    </div>
                    <price className="text-red-600"> {item.pir} </price>
                  </div>
                  <p className="mb-3"> {item.toz} </p>
                  <div className="flex gap-2 mb-3">
                    <img src={item.src1} />
                    <h3 className="text-xs"> {item.pakhsh} </h3>
                  </div>
                  <div className="border-2 border-blue-700 mb-3"></div>
                  <div className="flex justify-between">
                    <Rating name="size-medium" defaultValue={2} />
                    <div className="w-10 h-10 rounded-full bg-blue-700">
                      <img className="mx-auto my-2" src={item.src3} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-[180px] mx-auto">
            <NavLink to='/producta' className="px-8 py-2 bg-blue-700 text-white rounded-full"> مشاهده ی بیشتر </NavLink>
          </div>
        </div>
      </div>

      <div className="hidden xl:block">
        <div className="w-[80%] mx-auto mb-36">
          <h2 className="text-3xl font-bold mt-20 mb-10 text-center">
            {" "}
            محصولات{" "}
          </h2>
          <div className="justify-center w-full mt-[50px] flex flex-wrap gap-[30px] mb-[30px]">
            {slide.map((item) => {
              return (
                <div className="shadow-[0px_0px_7px_2px_rgba(0,0,0,0.2)] py-[20px] px-[20px] rounded-3xl w-[315px]">
                  <img className="w-full mx-auto mb-3" src={item.src} />
                  <div className="flex justify-between mb-3">
                    <div className="text-white rounded-full text-center w-[40%] bg-blue-700">
                      {" "}
                      {item.butt}{" "}
                    </div>
                    <price className="text-red-600"> {item.pir} </price>
                  </div>
                  <p className="mb-3"> {item.toz} </p>
                  <div className="flex gap-2 mb-3">
                    <img src={item.src1} />
                    <h3 className="text-xs"> {item.pakhsh} </h3>
                  </div>
                  <div className="border-2 border-blue-700 mb-3"></div>
                  <div className="flex justify-between">
                    <Rating name="size-medium" defaultValue={2} />
                    <div className="w-10 h-10 rounded-full bg-blue-700">
                      <img className="mx-auto my-2" src={item.src3} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-[180px] mx-auto">
            <NavLink to='/producta' className="px-8 py-2 bg-blue-700 text-white rounded-full"> مشاهده ی بیشتر </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prodakt;
