const FirstLeft = () => {
    
    return (
        <div className="px-[5%] py-2 mt-[50px] h-[500px] rounded-xl shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)]">
            <h2 className="font-bold text-xl text-center mb-9"> اطلاعات دوره </h2>
            <div className="flex justify-between mb-10 flex-wrap">
                <h2 className="font-bold text-lg"> مدت زمان : </h2>
                <p className='text-lg'> 3 ساعت و 55 دقیقه </p>
            </div>
            <div className="flex justify-between mb-5 flex-wrap">
                <h2 className="font-bold text-lg ml-[5%]"> هزینه آموزش: </h2>
                <price className='text-lg line-through text-red-600 ml-[2%]'>  48000  </price>
                <price className='text-lg text-green-600'> T 48000 </price>
            </div>
            <div className="flex justify-between mb-5 flex-wrap">
                <h2 className="font-bold text-lg"> سطح دوره : </h2>
                <p className='text-lg'> پیشرفته </p>
            </div>
            <div className="mb-5 flex justify-between flex-wrap">
                <h2 className="font-bold text-lg"> تاریخ بهروز رسانی : </h2>
                <p className="text-lg"> 24 / 05 / 1400 </p>
            </div>

            <div className="flex justify-between mb-14 flex-wrap">
                <h2 className="font-bold text-lg"> تعداد ویدیو ها : </h2>
                <p className='text-lg'> 26 ویدیو </p>
            </div>
            <div className="mx-auto w-[80%] h-11">
                <button className="w-full h-full bg-blue-600 text-white rounded-full"> خرید دوره </button>
            </div>
        </div>
    );
}
 
export default FirstLeft;