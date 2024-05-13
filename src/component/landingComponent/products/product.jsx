import Rectangle from "../../../../public/Rectangle.png";
import Zarebin from "../../../../public/zarebin.png";
import moraba1 from "../../../../public/Rectangle161.png";
import moraba2 from "../../../../public/Rectangle162.png";
import moraba5 from "../../../../public/Rectangle165.png";
import BigSC from "../../../../public/developer.png";
import group from "../../../../public/Group.png";

const Product = () => {
  return (
    <div>
      <div className="hidden xl:block h-[700px]">
        <img className="w-[750px] h-[600px] absolute top-0" src={Rectangle} />
        <div className="absolute z-20 right-[100px] top-[150px]">
          <h1 className="text-3xl text-white mb-[30px]"> آکادمی بحر ... </h1>
          <p className="text-white"> و مجله در ستون و سطر آنچنان که لازم است </p>
          <p className="text-white"> گرافیک است چاپگر ها بلکه روزنامه </p>
          <p className="text-white"> نا مفهوم از صنعت چاپ و با استفاره از طراحان </p>
          <p className="text-white"> لورک ایپسوم متن ساختگی با تولید ساختگی </p>
          <input className="rounded-full mt-[40px] h-[30px] w-[300px] pr-[10px] pl-[40px]" type="text" name="search"placeholder="جستجو..."/>
          <img className="w-[20px] h-[20px] mt-[-24px] mr-[270px]" src={Zarebin}/>
        </div>
        <img className="absolute z-10 top-[470px] h-[160px] w-[130px]" src={moraba1}/>
        <img className="absolute z-10 top-[585px] right-[75px] h-[70px] w-[70px]" src={moraba2}/>
        <img className="absolute z-10 top-[570px] right-[180px] h-[30px] w-[30px]" src={moraba5}/>
        <img className="absolute z-10 top-[100px] right-[800px] w-[37%] h-[500px]" src={BigSC}/>
        <img className="absolute z-10 top-[600px] right-[80%] w-[10%] h-[140px]" src={group}/>
      </div>
      
      <div className="hidden lg:block xl:hidden h-[700px]">
        <img className="w-[670px] h-[500px] absolute top-0" src={Rectangle} />
        <div className="absolute z-20 right-[100px] top-[100px]">
          <h1 className="text-3xl text-white mb-[30px]"> آکادمی بحر ... </h1>
          <p className="text-white"> و مجله در ستون و سطر آنچنان که لازم است </p>
          <p className="text-white"> گرافیک است چاپگر ها بلکه روزنامه </p>
          <p className="text-white"> نا مفهوم از صنعت چاپ و با استفاره از طراحان </p>
          <p className="text-white"> لورک ایپسوم متن ساختگی با تولید ساختگی </p>
          <input className="rounded-full mt-[40px] h-[30px] w-[300px] pr-[10px] pl-[40px]" type="text" name="search"placeholder="جستجو..."/>
          <img className="w-[20px] h-[20px] mt-[-24px] mr-[270px]" src={Zarebin}/>
        </div>
        <img className="absolute z-10 top-[400px] h-[160px] w-[130px]" src={moraba1}/>
        <img className="absolute z-10 top-[525px] right-[75px] h-[70px] w-[70px]" src={moraba2}/>
        <img className="absolute z-10 top-[500px] right-[180px] h-[30px] w-[30px]" src={moraba5}/>
      </div>
      
    </div>
  );
};

export default Product;
