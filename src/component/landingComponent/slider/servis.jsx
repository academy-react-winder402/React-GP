import { useState } from "react";
import img1 from "../../../../public/business-4.png";
import img2 from "../../../../public/SvgjsG1038.png";
import img3 from "../../../../public/SvgjsG1058.png";
import img4 from "../../../../public/SvgjsG1068.png";

const Services = () => {

    const [servis , setServis] = useState([
        { src:img1, fName:'امتحان', lName:'با تولید سادگی', lName1:'متن ساختگی', lName2:'لورم ایپسوم' },
        { src:img2, fName:'مدرک معتبر', lName:'با تولید سادگی', lName1:'متن ساختگی', lName2:'لورم ایپسوم' },
        { src:img3, fName:'فرصت های شغلی', lName:'با تولید سادگی', lName1:'متن ساختگی', lName2:'لورم ایپسوم' },
        { src:img4, fName:'مشاوره', lName:'با تولید سادگی', lName1:'متن ساختگی', lName2:'لورم ایپسوم' },
    ])


    return ( 
        <div>
            <div className="block sm:hidden mt-[70px]">
                <div className="mb-[50px]">
                    <h2 className="text-center mb-[10px] text-xl font-bold"> خدمات ما </h2>
                    <p className="text-center text-[16px]"> لورک ایپسوم متن ساختگی با تولید ساختگی </p>
                </div>
                <div className="flex flex-wrap justify-center gap-[50px] w-[80%] mx-auto">
                    {servis.map((item) => {
                        return(
                            <div className="">
                                <img className="w-[140px] h-[140px] mx-auto" src={item.src}/>
                                <h2 className="text-[16px] text-center mb-[10px]"> {item.fName} </h2>
                                <p className="text-center text-sm"> {item.lName} </p>
                                <p className="text-center text-sm"> {item.lName1} </p>
                                <p className="text-center text-sm"> {item.lName2} </p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='hidden sm:block md:hidden mt-[70px]'>
                <div className="mb-[50px]">
                    <h2 className="text-center mb-[10px] text-xl font-bold"> خدمات ما </h2>
                    <p className="text-center text-[16px]"> لورک ایپسوم متن ساختگی با تولید ساختگی </p>
                </div>
                <div className="flex flex-wrap justify-center gap-[50px] w-[600px] mx-auto">
                    {servis.map((item) => {
                        return(
                            <div className="">
                                <img className="w-[80px] h-[80px] mx-auto" src={item.src}/>
                                <h2 className="text-[16px] text-center mb-[10px]"> {item.fName} </h2>
                                <p className="text-center text-sm"> {item.lName} </p>
                                <p className="text-center text-sm"> {item.lName1} </p>
                                <p className="text-center text-sm"> {item.lName2} </p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='hidden md:block lg:hidden mt-[70px]'>
                <div className="mb-[50px]">
                    <h2 className="text-center mb-[10px] text-2xl font-bold"> خدمات ما </h2>
                    <p className="text-center text-[16px]"> لورک ایپسوم متن ساختگی با تولید ساختگی </p>
                </div>
                <div className="flex flex-wrap gap-[15px] w-[700px] mx-auto">
                    {servis.map((item) => {
                        return(
                            <div className="mx-auto">
                                <img className="w-[80px] h-[80px] mx-auto" src={item.src}/>
                                <h2 className="text-[16px] text-center mb-[10px]"> {item.fName} </h2>
                                <p className="text-center text-sm"> {item.lName} </p>
                                <p className="text-center text-sm"> {item.lName1} </p>
                                <p className="text-center text-sm"> {item.lName2} </p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='hidden lg:block xl:hidden'>
                <div className="mb-[50px]">
                    <h2 className="text-center mb-[10px] text-3xl font-bold"> خدمات ما </h2>
                    <p className="text-center"> لورک ایپسوم متن ساختگی با تولید ساختگی </p>
                </div>
                <div className="flex gap-[70px] w-[750px] h-[320px] mx-auto">
                    {servis.map((item) => {
                        return(
                            <div className="mx-auto">
                                <img className="w-[120px] h-[120px] mb-[20px]" src={item.src}/>
                                <h2 className="text-lg text-center mb-[20px]"> {item.fName} </h2>
                                <p className="text-center"> {item.lName} </p>
                                <p className="text-center"> {item.lName1} </p>
                                <p className="text-center"> {item.lName2} </p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='hidden xl:block'>
                <div className="mb-[50px]">
                    <h2 className="text-center mb-[10px] text-3xl font-bold"> خدمات ما </h2>
                    <p className="text-center"> لورک ایپسوم متن ساختگی با تولید ساختگی </p>
                </div>
                <div className="flex gap-[70px] w-[750px] h-[320px] mx-auto">
                    {servis.map((item) => {
                        return(
                            <div className="mx-auto">
                                <img className="w-[120px] h-[120px] mb-[20px]" src={item.src}/>
                                <h2 className="text-lg text-center mb-[20px]"> {item.fName} </h2>
                                <p className="text-center"> {item.lName} </p>
                                <p className="text-center"> {item.lName1} </p>
                                <p className="text-center"> {item.lName2} </p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
     );
}
 
export default Services;