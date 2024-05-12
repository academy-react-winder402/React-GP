import pic from "../../../assets/01.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCirclePlay, faStar, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Rectangle from "../../../../public/Rectangle.png";
import Zarebin from "../../../../public/zarebin.png";
import moraba1 from "../../../../public/Rectangle161.png";
import moraba2 from "../../../../public/Rectangle162.png";
import moraba5 from "../../../../public/Rectangle165.png";
import BigSC from "../../../../public/developer.png";
import group from "../../../../public/Group.png";


const Product = () => {
    return ( <
        div >
        <
        div className = "flex justify-center relative" >

        <
        div className = "w-72 h-96 bg-gray-100  mr-56" >
        <
        img src = { pic }
        alt = "image"
        className = "h-32 mt-5 mb-4  rounded-lg mr-10" / >
        <
        div className = "flex justify-around mt-2" >
        <
        p className = "bg-blue-600 rounded-3xl text-red-50 text-sm w-36 text-center " > ui / ux Design < /p> <
        p className = "text-blue-400" > 250, 000 < /p></div >
        <
        p className = "w-60 mr-8 mt-3" > پروژه صورت پروژه محور توضیحات سایت اموزش پیشرفته و غیره < /p> <
        div className = "flex mt-4" >
        <
        FontAwesomeIcon icon = { faCirclePlay }
        className = "mr-8 mt-1 text-gray-400" / >
        <
        p className = "mr-1 text-sm" > 24 درس < /p> <
        /div> <
        div className = "w-30 h-0.5 bg-gray-300 mt-3 mb-3" > < /div>  <
        div className = "flex justify-around" >
        <
        div >
        <
        FontAwesomeIcon icon = { faStar }
        className = "text-yellow-300" / >
        <
        FontAwesomeIcon icon = { faStar }
        className = "text-yellow-300" / >
        <
        FontAwesomeIcon icon = { faStar }
        className = "text-yellow-300" / >
        <
        FontAwesomeIcon icon = { faStar }
        className = "text-yellow-300" / >
        <
        FontAwesomeIcon icon = { faStar }
        className = "text-yellow-300" / >
        <
        /div> <
        FontAwesomeIcon icon = { faArrowLeft }
        className = "bg-blue-600 rounded-3xl text-xs mt-0.5 text-white
        border - blue - 600 border - 8 cursor - pointer " /> <
        /div> <
        /div> <
        /div> <
        div className = "absoloute bottom-0 h-8 w-32 bg-blue-600 m-auto mt-20 text-center
        text - white rounded - 2 xl cursor - pointer ">مشاهده بیشتر</div></div>
    ); <
    div className = 'hidden xl:block h-[700px]' >

        <
        img className = "w-[750px] h-[600px] absolute top-0"
    src = { Rectangle }
    /> <
    div className = "absolute z-20 right-[100px] top-[150px]" >
        <
        h1 className = "text-3xl text-white mb-[30px]" > آکادمی بحر... < /h1> <
        p className = "text-white" > و مجله در ستون و سطر آنچنان که لازم است < /p> <
        p className = "text-white" > گرافیک است چاپگر ها بلکه روزنامه < /p> <
        p className = "text-white" > نا مفهوم از صنعت چاپ و با استفاره از طراحان < /p> <
        p className = "text-white" > لورک ایپسوم متن ساختگی با تولید ساختگی < /p> <
        input className = "rounded-full mt-[40px] h-[30px] w-[300px] pr-[10px] pl-[40px]"
    type = "text"
    name = "search"
    placeholder = "جستجو..." / >
        <
        img className = "w-[20px] h-[20px] mt-[-24px] mr-[270px]"
    src = { Zarebin }
    /> <
    /div> <
    img className = "absolute z-10 top-[470px] h-[160px] w-[130px]"
    src = { moraba1 }
    /> <
    img className = "absolute z-10 top-[585px] right-[75px] h-[70px] w-[70px]"
    src = { moraba2 }
    /> <
    img className = "absolute z-10 top-[570px] right-[180px] h-[30px] w-[30px]"
    src = { moraba5 }
    /> <
    img className = "absolute z-10 top-[100px] right-[800px] w-[37%] h-[500px]"
    src = { BigSC }
    /> <
    img className = "absolute z-10 top-[600px] right-[80%] w-[10%] h-[140px]"
    src = { group }
    /> <
    /div>
);
}

export default Product;