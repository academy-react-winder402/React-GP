const FirstLeft = ({cost , courseLevelName , endTime}) => {
    
    return (
        <div>
            <div className='block sm:hidden'>
                <div className="px-[5%] py-2 mt-[50px] h-[500px] w-[200px] rounded-xl shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)]">
                    <h2 className="font-bold text-center mb-9"> اطلاعات دوره </h2>
                    <div className="flex justify-between mb-10 flex-wrap">
                        <h2 className="font-bold"> مدت زمان : </h2>
                        <p className=''>{endTime}</p>
                    </div>
                    <div className="flex justify-between mb-5 flex-wrap">
                        <h2 className="font-bold ml-[5%]"> هزینه آموزش: </h2>
                        <price className=' line-through text-red-600 ml-[2%]'>  48000  </price>
                        <price className=' text-green-600'> T {cost} </price>
                    </div>
                    <div className="flex justify-between mb-5 flex-wrap">
                        <h2 className="font-bold"> سطح دوره : </h2>
                        <p className='t'> {courseLevelName} </p>
                    </div>
                    <div className="mb-5 flex justify-between flex-wrap">
                        <h2 className="font-bold"> تاریخ بهروز رسانی : </h2>
                        <p className="">{}</p>
                    </div>

                    <div className="flex justify-between mb-7 flex-wrap">
                        <h2 className="font-bold"> تعداد ویدیو ها : </h2>
                        <p className=''>{}</p>
                    </div>
                    <div className="mx-auto w-[80%] h-11">
                        <button className="w-full h-full bg-blue-600 text-white rounded-full"> خرید دوره </button>
                    </div>
                </div>
            </div>

            <div className='hidden sm:block md:hidden'>
                <div className="px-[5%] py-2 mt-[50px] h-[500px] w-[200px] rounded-xl shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)]">
                    <h2 className="font-bold text-center mb-9"> اطلاعات دوره </h2>
                    <div className="flex justify-between mb-10 flex-wrap">
                        <h2 className="font-bold"> مدت زمان : </h2>
                        <p className=''>{endTime}</p>
                    </div>
                    <div className="flex justify-between mb-5 flex-wrap">
                        <h2 className="font-bold ml-[5%]"> هزینه آموزش: </h2>
                        {/* <price className=' line-through text-red-600 ml-[2%]'>  48000  </price> */}
                        <price className=' text-green-600'> T {cost} </price>
                    </div>
                    <div className="flex justify-between mb-5 flex-wrap">
                        <h2 className="font-bold"> سطح دوره : </h2>
                        <p className='t'> {courseLevelName} </p>
                    </div>
                    <div className="mb-5 flex justify-between flex-wrap">
                        <h2 className="font-bold"> تاریخ بهروز رسانی : </h2>
                        <p className="">{}</p>
                    </div>

                    <div className="flex justify-between mb-7 flex-wrap">
                        <h2 className="font-bold"> تعداد ویدیو ها : </h2>
                        <p className=''>{}</p>
                    </div>
                    <div className="mx-auto w-[80%] h-11">
                        <button className="w-full h-full bg-blue-600 text-white rounded-full"> خرید دوره </button>
                    </div>
                </div>
            </div>

            <div className='hidden md:block lg:hidden'>
                <div className="px-[5%] py-2 mt-[50px] h-[500px] rounded-xl shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)]">
                    <h2 className="font-bold text-center mb-9"> اطلاعات دوره </h2>
                    <div className="flex justify-between mb-10 flex-wrap">
                        <h2 className="font-bold"> مدت زمان : </h2>
                        <p className=''>{endTime}</p>
                    </div>
                    <div className="flex justify-between mb-5 flex-wrap">
                        <h2 className="font-bold ml-[5%]"> هزینه آموزش: </h2>
                        {/* <price className=' line-through text-red-600 ml-[2%]'>  48000  </price> */}
                        <price className=' text-green-600'> T {cost} </price>
                    </div>
                    <div className="flex justify-between mb-5 flex-wrap">
                        <h2 className="font-bold"> سطح دوره : </h2>
                        <p className='t'>{courseLevelName}</p>
                    </div>
                    <div className="mb-5 flex justify-between flex-wrap">
                        <h2 className="font-bold"> تاریخ بهروز رسانی : </h2>
                        <p className="">{}</p>
                    </div>

                    <div className="flex justify-between mb-7 flex-wrap">
                        <h2 className="font-bold"> تعداد ویدیو ها : </h2>
                        <p className=''>{}</p>
                    </div>
                    <div className="mx-auto w-[80%] h-11">
                        <button className="w-full h-full bg-blue-600 text-white rounded-full"> خرید دوره </button>
                    </div>
                </div>
            </div>

            <div className='hidden lg:block xl:hidden'>
                <div className="px-[5%] py-2 mt-[50px] h-[400px] rounded-xl shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)]">
                    <h2 className="font-bold text-center mb-9"> اطلاعات دوره </h2>
                    <div className="flex justify-between mb-10 flex-wrap">
                        <h2 className="font-bold"> مدت زمان : </h2>
                        <p className=''>{endTime}</p>
                    </div>
                    <div className="flex justify-between mb-5 flex-wrap">
                        <h2 className="font-bold ml-[5%]"> هزینه آموزش: </h2>
                        {/* <price className=' line-through text-red-600 ml-[2%]'>  48000  </price> */}
                        <price className=' text-green-600'> T {cost} </price>
                    </div>
                    <div className="flex justify-between mb-5 flex-wrap">
                        <h2 className="font-bold"> سطح دوره : </h2>
                        <p className='t'>{courseLevelName}</p>
                    </div>
                    <div className="mb-5 flex justify-between flex-wrap">
                        <h2 className="font-bold"> تاریخ بهروز رسانی : </h2>
                        <p className="">{}</p>
                    </div>

                    <div className="flex justify-between mb-7 flex-wrap">
                        <h2 className="font-bold"> تعداد ویدیو ها : </h2>
                        <p className=''>{}</p>
                    </div>
                    <div className="mx-auto w-[80%] h-11">
                        <button className="w-full h-full bg-blue-600 text-white rounded-full"> خرید دوره </button>
                    </div>
                </div>
            </div>
            
            <div className='hidden xl:block'>
                <div className="px-[5%] py-2 mt-[50px] h-[500px] rounded-xl shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)]">
                    <h2 className="font-bold text-xl text-center mb-9"> اطلاعات دوره </h2>
                    <div className="flex justify-between mb-10 flex-wrap">
                        <h2 className="font-bold text-lg"> مدت زمان : </h2>
                        <p className='text-lg'> {endTime} </p>
                    </div>
                    <div className="flex justify-between mb-5 flex-wrap">
                        <h2 className="font-bold text-lg ml-[5%]"> هزینه آموزش: </h2>
                        {/* <price className='text-lg line-through text-red-600 ml-[2%]'>  48000  </price> */}
                        <price className='text-lg text-green-600'> T {cost} </price>
                    </div>
                    <div className="flex justify-between mb-14 flex-wrap">
                        <h2 className="font-bold text-lg"> سطح دوره : </h2>
                        <p className='text-lg'> {courseLevelName} </p>
                    </div>
                    <div className="mx-auto w-[80%] h-11">
                        <button className="w-full h-full bg-blue-600 text-white rounded-full"> خرید دوره </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default FirstLeft;