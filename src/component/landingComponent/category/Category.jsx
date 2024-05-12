import pic1 from "../../../assets/1.png"
import pic2 from "../../../assets/2.png"
import pic3 from "../../../assets/3.png"
import pic4 from "../../../assets/4.png"
import pic5 from "../../../assets/5.png"
const Category =()=>{
    return(
        <div className="mt-28">
        <h2 className="font-bold text-xl mb-24 text-center"> دسته بندی ها </h2>
    <div className="flex justify-evenly px-20">
    <div> 
<img src={pic1} alt="img" className="w-56" />
        <p className="text-center">طراحی رابط کاربری</p>
    </div>
     <div>
     <img src={pic2} alt="img" className="w-56" />
     <p className="text-center">داده کاوی</p>
 </div>
  <div>
  <img src={pic3} alt="img" className="w-56" />
  <p className="text-center">هوش مصنوعی</p>
</div>
 <div>
 <img src={pic4} alt="img" className="w-56" />
 <p className="text-center">هک و امنیت</p>
</div>
 <div>
 <img src={pic5} alt="img" className="w-56" />
 <p className="text-center">وب</p>
</div>
</div>
</div>
);
};
export default Category;