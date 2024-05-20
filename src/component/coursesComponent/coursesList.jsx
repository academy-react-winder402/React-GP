import Product from "../landingComponent/products/product";
import EndLeft from "./left/EndLeft/endLeft";
import FirstLeft from "./left/fistLeft/firstLeft";
import Left from "./left/left";
import FirstRight from "./right/firstRight/firstRight";
import Nazarat from "./right/nazarat/nazarat";
import RightToz from "./right/rightToz";
import Slide from "./right/slid2/slid2";

const CoursesList = () => {
  return (
    <div>
      <div className="block sm:hidden">
        <h1 className="font-bold text-xl mr-14 mt-[100px]">
          {" "}
          دوره پیشرفته هک و امنیت{" "}
        </h1>
        <RightToz />
        <FirstRight />
        <div className="flex flex-wrap justify-between gap-[10px] mx-[5%]">
          <div>
              <Left />
              <EndLeft />
          </div>
            <FirstLeft />
        </div>
        <Slide />
        <Nazarat />
      </div>
        
      <div className="hidden sm:block md:hidden">
        <h1 className="font-bold text-xl mr-14 mt-[100px]">
          {" "}
          دوره پیشرفته هک و امنیت{" "}
        </h1>
        <RightToz />
        <FirstRight />
        <div className="flex flex-wrap justify-center gap-[15px]">
            <Left />
            <FirstLeft />
            <EndLeft />
        </div>
        <Slide />
        <Nazarat />
      </div>

      <div className="hidden md:block">
        <h1 className="font-bold text-2xl mr-14 mt-[100px]">
          {" "}
          دوره پیشرفته هک و امنیت{" "}
        </h1>
        <div className="mx-auto flex gap-5 justify-center flex-wrap">
          <div className="w-[65%]">
            <RightToz />
            <FirstRight />
          </div>
          <div className="w-[25%]">
            <Left />
            <FirstLeft />
            <EndLeft />
          </div>
        </div>
        <div className="mt-36">
          <Slide />
          <Nazarat />
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
