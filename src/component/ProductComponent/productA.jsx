import { useState } from "react";
import intersect from '../../../public/Intersect1.png';
import right from '../../../public/angle-right-b 3.png';
import left from '../../../public/angle-left-b 3.png';
import paein from '../../../public/angle-down 8.png';
import group from '../../../public/Group 53.png';
import arrow from '../../../public/arrow-leftt.png';
import star from '../../../public/star 2.png';
import { Link, NavLink } from "react-router-dom";
import { Rating } from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";
import http from '../../core/services/interceptore'

const ProductA = () => {

    const getCoursesList =async () => {
      const res =await http.get('/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0')
      return res 
    }

    const {data} = useQuery('coursList' , getCoursesList)
  
  return (
    <div>
      <div className="mb-[300px] mt-[30px]">
        <div className="mb-[100px] mx-auto flex justify-center gap-2">
            <h2 className="text-3xl font-bold">  همه دوره ها  </h2>
            <img className="h-10 w-10" src={paein}/>
        </div>
        <div className="mx-auto justify-center w-[95%] mt-[50px] flex flex-wrap gap-[30px]">
          {data?.courseFilterDtos.map((item) => {
            return (
              <div className="shadow-[0px_0px_7px_2px_rgba(0,0,0,0.2)] py-[20px] px-[20px] rounded-3xl w-[300px]">
                <img className="w-full mx-auto mb-3 h-[170px]" src={item.tumbImageAddress} />
                <div className="flex justify-between mb-3">
                  <div className="text-white rounded-full text-center bg-blue-700">{item.technologyList}</div>
                  {/* <price className="text-red-600"> {item.pir} </price> */}
                </div>
                <p className="mb-3"> {item.describe} </p>
                {/* <div className="flex gap-2 mb-3">
                  <img src={group} />
                  <h3 className="text-xs"> {item.classRoomName} </h3>
                </div> */}
                <div className="border-2 border-blue-700 mb-3"></div>
                <div className="flex justify-between">
                  <Rating name="size-medium" defaultValue={2} />
                  <Link to={`/courses/${item.courseId}`} className="w-10 h-10 rounded-full bg-blue-700">
                    <img className="mx-auto my-2" src={arrow} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-1 justify-center mt-[100px]">
            <img className="w-8 h-8 mt-[5px]" src={right} />
            <div className="w-[40px] h-[40px] text-center pt-[5px] rounded-full border-2 border-blue-700 bg-blue-700 text-white">1</div>
            <div className="w-[40px] h-[40px] text-center pt-[5px] rounded-full border-2 border-blue-700">2</div>
            <div className="w-[40px] h-[40px] text-center pt-[5px] rounded-full border-2 border-blue-700">3</div>
            <img className="w-8 h-8 mt-[5px]" src={left} />
        </div>
      </div>
    </div>
  );
};

export default ProductA;
