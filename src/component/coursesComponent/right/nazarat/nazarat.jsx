import { useState } from "react";
import profile from "../../../../../public/icons8-male-user-48.png"

const Nazarat = () => {

    const [text , setText] =  useState([
        {src:profile , name:'مبینا جسین پور' , time:'3 هفته پیش' , toz:'هستن از من میرسن که چه دوره هایی رو باید بگزرونم و این دوره چه پیش نیاز بسیاری از افرادی که به حوزه هک علاقه مند'},
        {src:profile , name:'مبینا جسین پور' , time:'3 هفته پیش' , toz:'هستن از من میرسن که چه دوره هایی رو باید بگزرونم و این دوره چه پیش نیاز بسیاری از افرادی که به حوزه هک علاقه مند'},
        {src:profile , name:'مبینا جسین پور' , time:'3 هفته پیش' , toz:'هستن از من میرسن که چه دوره هایی رو باید بگزرونم و این دوره چه پیش نیاز بسیاری از افرادی که به حوزه هک علاقه مند'},
    ])

    return (
        <div>




            <div className='block md:hidden'>
                <div className="mt-[25px] w-[90%] py-10 px-10 mb-[200px]">
                    <h2 className="text-2xl font-bold mb-10" > نظرات </h2>
                    {text.map((item) => {
                            return(
                                <div className="">
                                    <div className="flex gap-2 mb-5">
                                        <img className="" src={item.src}/>
                                        <h3 className="tex-xl mt-[20px]"> {item.name} </h3>
                                        <p className="text-xs mt-[30px]"> {item.time} </p>
                                    </div>
                                    <div className="flex justify-end">
                                        <p className="w-[90%]"> {item.toz} </p>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>

            <div className='hidden md:block'>
                <div className="mt-[25px] w-[90%] py-10 px-10 mb-[200px]">
                    <h2 className="text-2xl font-bold mb-10" > نظرات </h2>
                    {text.map((item) => {
                            return(
                                <div className="">
                                    <div className="flex gap-2 mb-5">
                                        <img className="" src={item.src}/>
                                        <h3 className="tex-xl mt-[20px]"> {item.name} </h3>
                                        <p className="text-xs mt-[30px]"> {item.time} </p>
                                    </div>
                                    <div className="flex justify-end">
                                        <p className="w-[90%]"> {item.toz} </p>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>

        </div>
    );
}
 
export default Nazarat;