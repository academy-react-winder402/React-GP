import { useState } from "react";
import elipse1 from '../../../../public/Ellipse13.png';
import elipse2 from '../../../../public/Ellipse14.png';
import elipse3 from '../../../../public/Ellipse 15.png';
import axios from "axios";
import { useQuery } from "react-query";
import http from '../../../core/services/interceptore'
import { Link, NavLink } from "react-router-dom";

const Card = () => {

    const [slid , setSlid] = useState([
        { src:elipse3, fName:'متن تست', lName:'ایده ای که با نام لورم ایپسوم شناخته می شور اشپسوم یا طرح نما و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اگر شما یک طراح هستین' },
        { src:elipse2, fName:'متن تست', lName:'ایده ای که با نام لورم ایپسوم شناخته می شور اشپسوم یا طرح نما و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اگر شما یک طراح هستین' },
        { src:elipse1, fName:'متن تست', lName:'ایده ای که با نام لورم ایپسوم شناخته می شور اشپسوم یا طرح نما و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اگر شما یک طراح هستین' },
    ])

    const getTeacher =async () => {
        const res =await http.get('/Home/GetTeachers')
        return res
    }

    const {data} = useQuery('getTeacher' , getTeacher)

    return (
        <div>
            <div className="block sm:hidden">
                <div className="text-2xl font-bold text-center mt-[50px] mb-[50px]"> اساتید دوره </div>
                <div className="mx-auto flex-wrap w-[80%] justify-center mt-[50px] flex gap-[15px] mb-[150px]">
                    {slid.map((item) => {
                        return(
                            <div className="shadow-[0px_0px_7px_2px_rgba(0,0,0,0.2)] py-[10px]  rounded-3xl w-[290px] mb-[50px]">
                                <img className="mb-[20px] mt-[-60px] w-[100px] h-[100px] mx-auto" src={item.src}/>
                                <h2 className="text-center"> {item.fName} </h2>
                                <p className="text-center text-sm"> {item.lName} </p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='hidden sm:block md:hidden'>
                <div className="text-2xl font-bold text-center mt-[50px] mb-[50px]"> اساتید دوره </div>
                <div className="mx-auto flex-wrap w-[600px] justify-center mt-[50px] flex gap-[15px] mb-[150px]">
                    {slid.map((item) => {
                        return(
                            <div className="shadow-[0px_0px_7px_2px_rgba(0,0,0,0.2)] py-[10px]  rounded-3xl w-[290px] mb-[50px]">
                                <img className="mb-[20px] mt-[-60px] w-[100px] h-[100px] mx-auto" src={item.src}/>
                                <h2 className="text-center"> {item.fName} </h2>
                                <p className="text-center text-sm"> {item.lName} </p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='hidden md:block lg:hidden'>
                <div className="text-2xl font-bold text-center mt-[50px] mb-[100px]"> اساتید دوره </div>
                <div className="mx-auto w-[700px] justify-center mt-[50px] flex gap-[15px] mb-[150px]">
                    {slid.map((item) => {
                        return(
                            <div className="shadow-[0px_0px_7px_2px_rgba(0,0,0,0.2)] py-[10px] rounded-3xl w-[300px]">
                                <img className="mb-[20px] mt-[-60px] w-[100px] h-[100px] mx-auto" src={item.src}/>
                                <h2 className="text-center"> {item.fName} </h2>
                                <p className="text-center text-sm"> {item.lName} </p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='hidden lg:block xl:hidden'>
                <div className="text-3xl font-bold text-center mt-[50px] mb-[150px]"> اساتید دوره </div>
                <div className="mx-auto w-[1020px] justify-center mt-[50px] flex gap-[15px] mb-[150px]">
                    {slid.map((item) => {
                        return(
                            <div className="shadow-[0px_0px_7px_2px_rgba(0,0,0,0.2)] py-[20px] rounded-3xl w-[310px]">
                                <img className="mb-[40px] mt-[-80px] w-[130px] h-[130px] mx-auto" src={item.src}/>
                                <h2 className="text-center"> {item.fName} </h2>
                                <p className="text-center"> {item.lName} </p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='hidden xl:block'>
                <div className="text-3xl font-bold text-center mt-[50px] mb-[150px]"> اساتید دوره </div>
                <div className="mx-auto w-[1000px] justify-between mt-[50px] flex flex-wrap mb-[150px]">
                    {data?.map((item) => {
                        return(
                            <div className="shadow-[0px_0px_7px_2px_rgba(0,0,0,0.2)] py-[20px] mb-[100px] rounded-3xl w-[30%]">
                                <img className="mb-[40px] mt-[-80px] w-[130px] h-[130px] mx-auto rounded-full" src={item.pictureAddress}/>
                                <h2 className="text-center"> {item.fullName} </h2>
                                <NavLink to={item.linkdinProfileLink} className="flex justify-center"> Linkedin Account </NavLink>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
 
export default Card;