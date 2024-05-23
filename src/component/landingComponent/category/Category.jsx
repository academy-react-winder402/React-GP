import { useState } from "react";
import img1 from "../../../../public/communication-and-connectivity-1 1.png";
import img2 from "../../../../public/communication-and-connectivity-1 (4) 1.png";
import img3 from "../../../../public/communication-and-connectivity-1 (3) 1.png";
import img4 from "../../../../public/communication-and-connectivity-1 (2) 1.png";
import img5 from "../../../../public/communication-and-connectivity-1 (1) 1.png";
import axios from "axios";
import { useQuery } from "react-query";

const Category =()=>{

    const [servis , setServis] = useState([
        { src:img1, fName:'  وب  ' },
        { src:img2, fName:'  هک و امنیت  ' },
        { src:img3, fName:'  هوش مصنوعی  ' },
        { src:img4, fName:'  داده کاوی  ' },
        { src:img5, fName:'  طراحی رابط کاربری  ' },
    ])

    return(
        <div>
            <div className="block sm:hidden">
                <h2 className="text-center text-3xl font-bold mb-[70px] mt-[100px]">  دسته بندی ها  </h2>
                <div className="flex flex-wrap gap-[50px] justify-center w-[80%] mx-auto">
                    {servis.map((item) => {
                        return(
                            <div className="mx-auto">
                                <img className="w-[150px] h-[100px] mb-[20px]" src={item.src}/>
                                <h2 className="text-lg text-center mb-[20px]"> {item.fName} </h2>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='hidden xl:block'>
                <h2 className="text-center text-3xl font-bold mb-[70px] mt-[100px]">  دسته بندی ها  </h2>
                <div className="flex gap-[50px] justify-center w-[1000px] mx-auto">
                    {servis.map((item) => {
                        return(
                            <div className="mx-auto">
                                <img className="w-[250px] h-[150px] mb-[20px]" src={item.src}/>
                                <h2 className="text-lg text-center mb-[20px]"> {item.fName} </h2>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='hidden lg:block xl:hidden'>
                <h2 className="text-center text-3xl font-bold mb-[70px] mt-[100px]">  دسته بندی ها  </h2>
                <div className="flex gap-[50px] justify-center w-[900px] mx-auto">
                    {servis.map((item) => {
                        return(
                            <div className="mx-auto">
                                <img className="w-[200px] h-[130px] mb-[20px]" src={item.src}/>
                                <h2 className="text-lg text-center mb-[20px]"> {item.fName} </h2>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='hidden md:block lg:hidden mt-[70px]'>
                <h2 className="text-center text-2xl font-bold mb-[50px] mt-[100px]">  دسته بندی ها  </h2>
                <div className="flex justify-center w-[700px] mx-auto">
                    {servis.map((item) => {
                        return(
                            <div className="mx-auto">
                                <img className="w-[100px] h-[100px] mx-auto" src={item.src}/>
                                <h2 className="text-[16px] text-center mb-[20px]"> {item.fName} </h2>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='hidden sm:block md:hidden mt-[70px]'>
                <h2 className="text-center text-xl font-bold mb-[50px] mt-[100px]">  دسته بندی ها  </h2>
                <div className="flex justify-center w-[600px] mx-auto">
                    {servis.map((item) => {
                        return(
                            <div className="mx-auto">
                                <img className="w-[100px] h-[100px] mx-auto" src={item.src}/>
                                <h2 className="text-[16px] text-center mb-[20px]"> {item.fName} </h2>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
);
};
export default Category;
