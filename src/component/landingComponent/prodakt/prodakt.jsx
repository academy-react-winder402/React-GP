import pic from "../../../assets/01.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCirclePlay, faStar, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { Rating } from "@mui/material";
import intersect from '../../../../public/Intersect1.png';
import group from '../../../../public/Group 53.png';
import arrow from '../../../../public/arrow-leftt.png';
import star from '../../../../public/star 2.png';


const Prodakt = () => {
    const [slide , setSlide] = useState([
        {src:intersect , butt:'Ui/Ux Design' , pir:'250000' , toz:'صورت پروژه محور سایت فلان آموزش پیشرفته دانت به' , src1:group , pakhsh:'24 درس' , src3:arrow},
        {src:intersect , butt:'Ui/Ux Design' , pir:'250000' , toz:'صورت پروژه محور سایت فلان آموزش پیشرفته دانت به' , src1:group , pakhsh:'24 درس' , src3:arrow},
        {src:intersect , butt:'Ui/Ux Design' , pir:'250000' , toz:'صورت پروژه محور سایت فلان آموزش پیشرفته دانت به' , src1:group , pakhsh:'24 درس' , src3:arrow},
        {src:intersect , butt:'Ui/Ux Design' , pir:'250000' , toz:'صورت پروژه محور سایت فلان آموزش پیشرفته دانت به' , src1:group , pakhsh:'24 درس' , src3:arrow},
        {src:intersect , butt:'Ui/Ux Design' , pir:'250000' , toz:'صورت پروژه محور سایت فلان آموزش پیشرفته دانت به' , src1:group , pakhsh:'24 درس' , src3:arrow},
        {src:intersect , butt:'Ui/Ux Design' , pir:'250000' , toz:'صورت پروژه محور سایت فلان آموزش پیشرفته دانت به' , src1:group , pakhsh:'24 درس' , src3:arrow},
    ])
    return ( 
    //    < div >
        
    //    < div className = "flex justify-center relative" >

        
    //    < div className = "w-72 h-96 bg-gray-100  mr-56" >
        
    //     <img src = { pic }
    //     alt = "image"
    //     className = "h-32 mt-5 mb-4  rounded-lg mr-10" />
        
    //     <div className="flex justify-around mt-2" >
        
    //     <p className="bg-blue-600 rounded-3xl text-red-50 text-sm w-36 text-center " > ui / ux Design </p>
         
    //     <p className={"text-blue-400"} > 250, 000 </p>
    //     </div >
        
    //     <p className = "w-60 mr-8 mt-3" > پروژه صورت پروژه محور توضیحات سایت اموزش پیشرفته و غیره </p> 
    //     <div className = "flex mt-4" >
        
    //    <FontAwesomeIcon icon = { faCirclePlay }
    //     className = "mr-8 mt-1 text-gray-400" />
        
    //     <p className = "mr-1 text-sm" > 24 درس </p> 
    //     </div> 
    //     <div className = "w-30 h-0.5 bg-gray-300 mt-3 mb-3" > </div>  
    //     <div className = "flex justify-around" >
        
    //     <div >
        
    //     <FontAwesomeIcon icon = { faStar }
    //     className = "text-yellow-300" />
        
    //     <FontAwesomeIcon icon = { faStar }
    //     className = "text-yellow-300" />
        
    //     <FontAwesomeIcon icon = { faStar }
    //     className = "text-yellow-300" />
       
    //      <FontAwesomeIcon icon = { faStar }
    //     className = "text-yellow-300" />
        
    //     <FontAwesomeIcon icon = { faStar }
    //     className = "text-yellow-300" />
        
    //     </div> 
    //     <FontAwesomeIcon icon = { faArrowLeft }
    //     className="bg-blue-600 rounded-3xl text-xs mt-0.5 text-white
    //     border-blue-600 border-8 cursor-pointer " /> 
    //     </div> 
    //     </div> 
    //     </div> 
    //     <div className = "absoloute bottom-0 h-8 w-32 bg-blue-600 m-auto mt-20 text-center text-white rounded - 2 xl cursor - pointer ">مشاهده بیشتر</div>
    //     </div>

    <div className="w-[70%] mx-auto mb-36">
    <h2 className="text-3xl font-bold mt-20 mb-10 mx-auto w-[200px]"> محصولات   </h2>
    <div className="justify-center w-full mt-[50px] flex flex-wrap gap-[30px] mb-[30px]">
        {slide.map((item) => {
            return(
                <div className="shadow-[0px_0px_7px_2px_rgba(0,0,0,0.2)] py-[20px] px-[20px] rounded-3xl w-[300px]">
                    <img className="w-full mx-auto mb-3" src={item.src}/>
                    <div className="flex justify-between mb-3">
                        <div className="text-white rounded-full text-center w-[40%] bg-blue-700"> {item.butt} </div>
                        <price className="text-red-600"> {item.pir} </price>
                    </div>
                    <p className="mb-3"> {item.toz} </p>
                    <div className="flex gap-2 mb-3">
                        <img src={item.src1}/>
                        <h3 className="text-xs"> {item.pakhsh} </h3>
                    </div>
                    <div className="border-2 border-blue-700 mb-3"></div>
                    <div className="flex justify-between">
                        <Rating name="size-medium" defaultValue={2} />
                            <div className="w-10 h-10 rounded-full bg-blue-700">
                                <img className="mx-auto my-2" src={item.src3}/>
                            </div>
                    </div>
                </div>
            )
        })}
    </div>
</div>
    ); 
}

export default Prodakt;