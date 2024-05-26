import { useState } from "react";
import intersect2 from "../../../public/Intersect2.png";
import right from '../../../public/angle-right-b 3.png';
import left from '../../../public/angle-left-b 3.png';
import user from "../../../public/user (1) 1.png";
import victor from "../../../public/Vectordr.png";
import calendar from "../../../public/calendar-alt 1.png";
import axios from "axios";
import { useQuery } from "react-query";
import http from '../../core/services/interceptore'
import { NavLink } from "react-router-dom";


const ProductB = () => {
  // const [slid, setSlid] = useState([
  //   {
  //     src: intersect2,
  //     fName: "متن تست",
  //     lName:
  //       "ایده ای که با نام لورم ایپسوم شناخته می شور اشپسوم یا طرح نما و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اگر شما یک طراح هستین",
  //     usSrc: user,
  //     usMatn: "امیر همتی",
  //     vicSrc: victor,
  //     vicMatn: "354",
  //     calSrc: calendar,
  //     calMatn: "15 تیر 1400",
  //   },
  //   {
  //     src: intersect2,
  //     fName: "متن تست",
  //     lName:
  //       "ایده ای که با نام لورم ایپسوم شناخته می شور اشپسوم یا طرح نما و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اگر شما یک طراح هستین",
  //     usSrc: user,
  //     usMatn: "امیر همتی",
  //     vicSrc: victor,
  //     vicMatn: "354",
  //     calSrc: calendar,
  //     calMatn: "15 تیر 1400",
  //   },
  //   {
  //     src: intersect2,
  //     fName: "متن تست",
  //     lName:
  //       "ایده ای که با نام لورم ایپسوم شناخته می شور اشپسوم یا طرح نما و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اگر شما یک طراح هستین",
  //     usSrc: user,
  //     usMatn: "امیر همتی",
  //     vicSrc: victor,
  //     vicMatn: "354",
  //     calSrc: calendar,
  //     calMatn: "15 تیر 1400",
  //   },
  //   {
  //     src: intersect2,
  //     fName: "متن تست",
  //     lName:
  //       "ایده ای که با نام لورم ایپسوم شناخته می شور اشپسوم یا طرح نما و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اگر شما یک طراح هستین",
  //     usSrc: user,
  //     usMatn: "امیر همتی",
  //     vicSrc: victor,
  //     vicMatn: "354",
  //     calSrc: calendar,
  //     calMatn: "15 تیر 1400",
  //   },
  //   {
  //     src: intersect2,
  //     fName: "متن تست",
  //     lName:
  //       "ایده ای که با نام لورم ایپسوم شناخته می شور اشپسوم یا طرح نما و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اگر شما یک طراح هستین",
  //     usSrc: user,
  //     usMatn: "امیر همتی",
  //     vicSrc: victor,
  //     vicMatn: "354",
  //     calSrc: calendar,
  //     calMatn: "15 تیر 1400",
  //   },
  //   {
  //     src: intersect2,
  //     fName: "متن تست",
  //     lName:
  //       "ایده ای که با نام لورم ایپسوم شناخته می شور اشپسوم یا طرح نما و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اگر شما یک طراح هستین",
  //     usSrc: user,
  //     usMatn: "امیر همتی",
  //     vicSrc: victor,
  //     vicMatn: "354",
  //     calSrc: calendar,
  //     calMatn: "15 تیر 1400",
  //   },
  //   {
  //     src: intersect2,
  //     fName: "متن تست",
  //     lName:
  //       "ایده ای که با نام لورم ایپسوم شناخته می شور اشپسوم یا طرح نما و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اگر شما یک طراح هستین",
  //     usSrc: user,
  //     usMatn: "امیر همتی",
  //     vicSrc: victor,
  //     vicMatn: "354",
  //     calSrc: calendar,
  //     calMatn: "15 تیر 1400",
  //   },
  //   {
  //     src: intersect2,
  //     fName: "متن تست",
  //     lName:
  //       "ایده ای که با نام لورم ایپسوم شناخته می شور اشپسوم یا طرح نما و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اگر شما یک طراح هستین",
  //     usSrc: user,
  //     usMatn: "امیر همتی",
  //     vicSrc: victor,
  //     vicMatn: "354",
  //     calSrc: calendar,
  //     calMatn: "15 تیر 1400",
  //   },
  //   {
  //     src: intersect2,
  //     fName: "متن تست",
  //     lName:
  //       "ایده ای که با نام لورم ایپسوم شناخته می شور اشپسوم یا طرح نما و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اگر شما یک طراح هستین",
  //     usSrc: user,
  //     usMatn: "امیر همتی",
  //     vicSrc: victor,
  //     vicMatn: "354",
  //     calSrc: calendar,
  //     calMatn: "15 تیر 1400",
  //   },
  //   {
  //     src: intersect2,
  //     fName: "متن تست",
  //     lName:
  //       "ایده ای که با نام لورم ایپسوم شناخته می شور اشپسوم یا طرح نما و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اگر شما یک طراح هستین",
  //     usSrc: user,
  //     usMatn: "امیر همتی",
  //     vicSrc: victor,
  //     vicMatn: "354",
  //     calSrc: calendar,
  //     calMatn: "15 تیر 1400",
  //   },
  //   {
  //     src: intersect2,
  //     fName: "متن تست",
  //     lName:
  //       "ایده ای که با نام لورم ایپسوم شناخته می شور اشپسوم یا طرح نما و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اگر شما یک طراح هستین",
  //     usSrc: user,
  //     usMatn: "امیر همتی",
  //     vicSrc: victor,
  //     vicMatn: "354",
  //     calSrc: calendar,
  //     calMatn: "15 تیر 1400",
  //   },
  //   {
  //     src: intersect2,
  //     fName: "متن تست",
  //     lName:
  //       "ایده ای که با نام لورم ایپسوم شناخته می شور اشپسوم یا طرح نما و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اگر شما یک طراح هستین",
  //     usSrc: user,
  //     usMatn: "امیر همتی",
  //     vicSrc: victor,
  //     vicMatn: "354",
  //     calSrc: calendar,
  //     calMatn: "15 تیر 1400",
  //   },
  // ]);

  const getNewsList =async () => {
    const res =await http.get('/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC')
    return res
  }

  const {data} = useQuery('newsList' , getNewsList)

  return (
    <div>
      <div className="my-[30px]">
        <div className="text-3xl font-bold text-center w-44 mx-auto"> همه مقاله ها </div>
        <div className="mx-auto w-[95%] justify-center mt-[100px] flex flex-wrap gap-[30px] mb-[30px]">
          {data?.news.map((item) => {
            return (
              <NavLink to={`/articles/${item.id}`} className="shadow-[0px_0px_7px_2px_rgba(0,0,0,0.2)] py-[20px] rounded-3xl w-[300px]">
                <img className="w-[270px] h-[170px] mx-auto" src={item.currentImageAddressTumb} />
                <h2 className="text-center"> {item.title} </h2>
                <p className="w-[270px] text-center text-xs font-semibold mx-auto">
                  {" "}
                  {item.miniDescribe}{" "}
                </p>
                <div className="flex gap-2 mr-[20px] mt-3">
                  <img className="w-6 h-6" src={user} />
                  <h4 className="text-xs font-normal mt-2 text-gray-400">
                    {" "}
                    {item.addUserFullName}{" "}
                  </h4>
                </div>
                <div className="flex gap-2 mr-[20px]">
                  <img className="w-6 h-5" src={victor} />
                  <h4 className="text-xs font-normal mt-2 text-gray-400">
                    {" "}
                    {item.currentView}{" "}
                  </h4>
                </div>
                <div className="flex gap-2 mr-[20px]">
                  <img className="w-6 h-6" src={calendar} />
                  <h4 className="text-xs font-normal mt-2 text-gray-400">
                    {" "}
                    {item.updateDate}{" "}
                  </h4>
                </div>
              </NavLink>
            );
          })}
        </div>
        <div className="flex gap-1 justify-center mt-[100px]">
          <img className="w-8 h-8 mt-[5px]" src={right} />
          <div className="w-[40px] h-[40px] text-center pt-[5px] rounded-full border-2 border-blue-700 bg-blue-700 text-white">
            1
          </div>
          <div className="w-[40px] h-[40px] text-center pt-[5px] rounded-full border-2 border-blue-700">
            2
          </div>
          <div className="w-[40px] h-[40px] text-center pt-[5px] rounded-full border-2 border-blue-700">
            3
          </div>
          <img className="w-8 h-8 mt-[5px]" src={left} />
        </div>
      </div>
    </div>
  );
};

export default ProductB;
