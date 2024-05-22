// import Product from "../landingComponent/products/product";
import EndLeft from "../coursesComponent/left/EndLeft/endLeft";
import FirstLeft from "../coursesComponent/left/fistLeft/firstLeft";
import Left from "../coursesComponent/left/left";
import Rights from "./rights/Rights";
// import FirstRight from "./right/firstRight/firstRight";
// import Nazarat from "./right/nazarat/nazarat";
// import RightToz from "./right/rightToz";
// import Slide from "./right/slid2/slid2";

const Article = () => {
  return (
    <div>
      <div className="hidden xl:block"></div>

      <h1 className="font-bold text-2xl mr-14"> دوره پیشرفته هک و امنیت </h1>
      <div className="mx-auto flex gap-14 justify-center">
        <div className="w-[65%]">
          {/* <RightToz />
          <FirstRight />
          <Nazarat /> */}
          <Rights />
        </div>
        <div className="w-[25%]">
          <Left />
          <FirstLeft />
          <EndLeft />
        </div>
      </div>
      {/* <div className="mt-36">
        <Slide />
      </div> */}
    </div>
  );
};

export default Article;
