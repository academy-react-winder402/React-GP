import { useState } from "react";
import img1 from "../../../../public/communication-and-connectivity-1 1.png";
import img2 from "../../../../public/communication-and-connectivity-1 (4) 1.png";
import img3 from "../../../../public/communication-and-connectivity-1 (3) 1.png";
import img4 from "../../../../public/communication-and-connectivity-1 (2) 1.png";
import img5 from "../../../../public/communication-and-connectivity-1 (1) 1.png";

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
            <h2 className="text-center text-3xl font-bold mb-[70px] mt-[100px]"> خدمات ما </h2>
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
);
};
export default Category;