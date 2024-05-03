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
            <div className="mb-[50px]">
                <h2 className="text-center mb-[10px] text-3xl font-bold"> خدمات ما </h2>
                <p className="text-center"> لورک ایپسوم متن ساختگی با تولید ساختگی </p>
            </div>
            <div className="flex gap-[70px] w-[700px] h-[320px] mx-auto">
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
     );
}
 
export default Services;