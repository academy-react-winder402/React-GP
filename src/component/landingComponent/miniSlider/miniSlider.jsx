import { useState } from "react";
import intersect from "../../../../public/Intersect.png";
import intersect1 from "../../../../public/Intersect1.png";
import intersect2 from "../../../../public/Intersect2.png";
import axios from "axios";
import { useQuery } from "react-query";

const MiniSlider = () => {
  const [slid, setSlid] = useState([
    {
      src: intersect,
      fName: "متن تست",
      lName:
        "ایده ای که با نام لورم ایپسوم شناخته می شور اشپسوم یا طرح نما و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اگر شما یک طراح هستین",
    },
    {
      src: intersect1,
      fName: "متن تست",
      lName:
        "ایده ای که با نام لورم ایپسوم شناخته می شور اشپسوم یا طرح نما و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اگر شما یک طراح هستین",
    },
    {
      src: intersect2,
      fName: "متن تست",
      lName:
        "ایده ای که با نام لورم ایپسوم شناخته می شور اشپسوم یا طرح نما و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اگر شما یک طراح هستین",
    },
  ]);

  const getNewslist =async () => {
    const res =await axios.get('https://classapi.sepehracademy.ir/api/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC')
    return res.data
  }

  const {data} = useQuery('newsList' , getNewslist)
  
  return (
    <div>
      <div className="block sm:hidden">
        <div className="text-xl font-bold text-center mt-[50px]">
          {" "}
          برترین مقالات{" "}
        </div>
        <div className="mx-auto flex-wrap w-[80%] justify-center mt-[50px] flex gap-[30px] mb-[30px]">
          {slid.map((item) => {
            return (
              <div className="shadow-[0px_0px_7px_2px_rgba(0,0,0,0.2)] py-[10px] rounded-xl w-[210px]">
                <img className="w-[190px] h-[130px]  mx-auto" src={item.src} />
                <h2 className="text-center"> {item.fName} </h2>
                <p className="text-center text-sm"> {item.lName} </p>
              </div>
            );
          })}
        </div>
        <div className="flex gap-1 justify-center mb-[150px]">
          <div className="w-3 h-3 bg-blue-700 rounded-full hover:border-2 hover:border-blue-700"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full hover:border-2 hover:border-blue-700"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full hover:border-2 hover:border-blue-700"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full hover:border-2 hover:border-blue-700"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full hover:border-2 hover:border-blue-700"></div>
        </div>
      </div>

      <div className='hidden sm:block md:hidden'>
        <div className="text-2xl font-bold text-center mt-[50px]">
          {" "}
          برترین مقالات{" "}
        </div>
        <div className="mx-auto flex-wrap w-[600px] justify-center mt-[50px] flex gap-[30px] mb-[30px]">
          {slid.map((item) => {
            return (
              <div className="shadow-[0px_0px_7px_2px_rgba(0,0,0,0.2)] py-[10px] rounded-xl w-[210px]">
                <img className="w-[190px] h-[130px]  mx-auto" src={item.src} />
                <h2 className="text-center"> {item.fName} </h2>
                <p className="text-center text-sm"> {item.lName} </p>
              </div>
            );
          })}
        </div>
        <div className="flex gap-1 justify-center mb-[150px]">
          <div className="w-3 h-3 bg-blue-700 rounded-full hover:border-2 hover:border-blue-700"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full hover:border-2 hover:border-blue-700"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full hover:border-2 hover:border-blue-700"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full hover:border-2 hover:border-blue-700"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full hover:border-2 hover:border-blue-700"></div>
        </div>
      </div>

      <div className='hidden md:block lg:hidden'>
        <div className="text-2xl font-bold text-center mt-[50px]">
          {" "}
          برترین مقالات{" "}
        </div>
        <div className="mx-auto w-[700px] justify-center mt-[50px] flex gap-[30px] mb-[30px]">
          {slid.map((item) => {
            return (
              <div className="shadow-[0px_0px_7px_2px_rgba(0,0,0,0.2)] py-[10px] rounded-xl w-[210px]">
                <img className="w-[190px] h-[130px]  mx-auto" src={item.src} />
                <h2 className="text-center"> {item.fName} </h2>
                <p className="text-center text-sm"> {item.lName} </p>
              </div>
            );
          })}
        </div>
        <div className="flex gap-1 justify-center mb-[150px]">
          <div className="w-3 h-3 bg-blue-700 rounded-full hover:border-2 hover:border-blue-700"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full hover:border-2 hover:border-blue-700"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full hover:border-2 hover:border-blue-700"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full hover:border-2 hover:border-blue-700"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full hover:border-2 hover:border-blue-700"></div>
        </div>
      </div>

      <div className="hidden lg:block xl:hidden">
        <div className="text-3xl font-bold text-center mt-[50px]">
          {" "}
          برترین مقالات{" "}
        </div>
        <div className="mx-auto w-[1020px] justify-center mt-[50px] flex gap-[15px] mb-[30px]">
          {slid.map((item) => {
            return (
              <div className="shadow-[0px_0px_7px_2px_rgba(0,0,0,0.2)] py-[20px] rounded-3xl w-[310px]">
                <img className="w-[270px] h-[170px]  mx-auto" src={item.src} />
                <h2 className="text-center"> {item.fName} </h2>
                <p className="text-center"> {item.lName} </p>
              </div>
            );
          })}
        </div>
        <div className="flex gap-1 justify-center mb-[150px]">
          <div className="w-3 h-3 bg-blue-700 rounded-full hover:border-2 hover:border-blue-700"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full hover:border-2 hover:border-blue-700"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full hover:border-2 hover:border-blue-700"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full hover:border-2 hover:border-blue-700"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full hover:border-2 hover:border-blue-700"></div>
        </div>
      </div>

      <div className="hidden xl:block">
        <div className="text-3xl font-bold text-center mt-[50px]">
          {" "}
          برترین مقالات{" "}
        </div>
        <div className="mx-auto w-[1020px] justify-center mt-[50px] flex gap-[30px] mb-[30px]">
          {data?.news.map((item) => {
            return (
              <div className="shadow-[0px_0px_7px_2px_rgba(0,0,0,0.2)] py-[20px] rounded-3xl w-[310px]">
                <img className="w-[270px] h-[170px]  mx-auto" src={item.currentImageAddressTumb} />
                <h2 className="text-center"> {item.title} </h2>
                <p className="text-center"> {item.miniDescribe} </p>
              </div>
            );
          })}
        </div>
        <div className="flex gap-1 justify-center mb-[150px]">
          <div className="w-3 h-3 bg-blue-700 rounded-full hover:border-2 hover:border-blue-700"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full hover:border-2 hover:border-blue-700"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full hover:border-2 hover:border-blue-700"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full hover:border-2 hover:border-blue-700"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full hover:border-2 hover:border-blue-700"></div>
        </div>
      </div>

    </div>
  );
};

export default MiniSlider;
