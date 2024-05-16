import logo from "../../../public/logo.png";
import map from "../../../public/Group 69.svg";
import blue from "../../../public/Vector 11.svg";

const Footer = () => {
  return (
    <div>
      <div className="block sm:hidden">
        <img className="" src={map} />
        <div className="relative h-[300px] bg-blue-600 pt-[50px]">
          <img
            className="w-[150px] mr-[100px]"
            src={logo}
            alt=""
          />
          <h2 className="text-white mx-auto mt-[5px] w-[150px]">
            {" "}
            ارتباط با ما{" "}
          </h2>
          <p className="text-white mx-auto mt-[5px] w-[150px]">
            {" "}
            آدرس : ساری ، بلوار آزادی ، نبش ایزد طلب{" "}
          </p>
          <p className="text-white mx-auto mt-[5px] w-[150px]">
            {" "}
            تماس با ما : 091919191{" "}
          </p>
          <p className="text-white mx-auto mt-[5px] w-[150px]">
            {" "}
            درباره ما : 091919191{" "}
          </p>
        </div>
      </div>

      <div className='hidden sm:block md:hidden'>
        <img className="" src={map} />
        <div className="relative h-[300px] bg-blue-600 pt-[50px]">
          <img
            className="w-[150px] mr-[100px]"
            src={logo}
            alt=""
          />
          <h2 className="text-white mr-[100px] mt-[20px]">
            {" "}
            ارتباط با ما{" "}
          </h2>
          <p className="text-white mr-[100px] mt-[20px]">
            {" "}
            آدرس : ساری ، بلوار آزادی ، نبش ایزد طلب{" "}
          </p>
          <p className="text-white mr-[100px] mt-[20px]">
            {" "}
            تماس با ما : 091919191{" "}
          </p>
          <p className="text-white mr-[100px] mt-[20px]">
            {" "}
            درباره ما : 091919191{" "}
          </p>
        </div>
      </div>

      <div className="hidden md:block lg:hidden">
        <img className="" src={map} />
        <div className="relative h-[300px] bg-blue-600 pt-[50px]">
          <img
            className="w-[150px] mr-[100px]"
            src={logo}
            alt=""
          />
          <h2 className="text-white mr-[100px] mt-[20px]">
            {" "}
            ارتباط با ما{" "}
          </h2>
          <p className="text-white mr-[100px] mt-[20px]">
            {" "}
            آدرس : ساری ، بلوار آزادی ، نبش ایزد طلب{" "}
          </p>
          <p className="text-white mr-[100px] mt-[20px]">
            {" "}
            تماس با ما : 091919191{" "}
          </p>
          <p className="text-white mr-[100px] mt-[20px]">
            {" "}
            درباره ما : 091919191{" "}
          </p>
        </div>
      </div>

      <div className="hidden lg:block xl:hidden h-[300px]">
        <div className="relative h-[300px] bg-blue-600">
          <img
            className="w-[150px] absolute z-20 top-[30px] right-[5%]"
            src={logo}
            alt=""
          />
          <h2 className="font-bold text-xl absolute z-20 top-[80px] right-[5%] text-white">
            {" "}
            ارتباط با ما{" "}
          </h2>
          <p className="flex-wrap w-[200px] absolute z-20 top-[130px] right-[5%] text-white">
            {" "}
            آدرس : ساری ، بلوار آزادی ، نبش ایزد طلب{" "}
          </p>
          <p className="absolute z-20 top-[190px] right-[5%] text-white">
            {" "}
            تماس با ما : 091919191{" "}
          </p>
          <p className="absolute z-20 top-[230px] right-[5%] text-white">
            {" "}
            درباره ما : 091919191{" "}
          </p>
          <img
            className="w-[800px] h-[85%] absolute left-0 bottom-0"
            src={map}
          />
        </div>
      </div>

      <div className="hidden xl:block h-[300px]">
        <div className="flex relative">
          <div className="h-full w-[80%] relative">
            <img className="w-full h-full" src={blue} alt="" />
            <img
              className="w-[150px] absolute z-20 top-[50px] right-[5%]"
              src={logo}
              alt=""
            />
            <h2 className="text-white font-bold text-xl absolute z-20 top-[100px] right-[5%]">
              {" "}
              ارتباط با ما{" "}
            </h2>
            <p className="flex-wrap w-[250px] text-white absolute z-20 top-[150px] right-[5%]">
              {" "}
              آدرس : ساری ، بلوار آزادی ، نبش ایزد طلب{" "}
            </p>
            <p className="text-white absolute z-20 top-[220px] right-[5%]">
              {" "}
              تماس با ما : 091919191{" "}
            </p>
            <p className="text-white absolute z-20 top-[270px] right-[5%]">
              {" "}
              درباره ما : 091919191{" "}
            </p>
          </div>
          <div className="h-full w-[77%] absolute left-0">
            <img className="h-full w-full" src={map} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
