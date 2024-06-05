import axios from "axios";
import Product from "../landingComponent/products/product";
import EndLeft from "./left/EndLeft/endLeft";
import FirstLeft from "./left/fistLeft/firstLeft";
import Left from "./left/left";
import Nazarat from "./right/nazarat/nazarat";
import RightToz from "./right/rightToz";
import Slide from "./right/slid2/slid2";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import http from '../../core/services/interceptore'


const CoursesList = () => {

  const params =useParams()

  const getCoursDetal =async () => {
    const res =await http.get(`/Home/GetCourseDetails?CourseId=${params.id}`)
    return res
  }

  const getCoursComment =async () => {
    const res =await http.get(`/Course/GetCourseCommnets/${params.id}`)
    // console.log(res);
    return res
  }

  const {data} =useQuery('coursDetal' , getCoursDetal)
  const {data:data2} = useQuery('coursComment' , getCoursComment)

  return (
    <div>
      <div className="block sm:hidden">
        <h1 className="font-bold text-xl mr-14 mt-[100px]">
          {" "}
          {data?.title}
        </h1>
        <RightToz imageAddress={data?.imageAddress}
          googleTitle={data?.googleTitle}
          googleSchema={data?.googleSchema}
          describe={data?.describe}       
          miniDescribe={data?.miniDescribe}   
          techs={data?.techs}
          uniqeUrlString={data?.uniqeUrlString} 
        />
        <div className="flex flex-wrap justify-between gap-[10px] mx-[5%]">
          <div>
              <Left />
              <EndLeft teacherName={data?.teacherName} />
          </div>
            <FirstLeft 
              endTime={data?.endTime}
              cost={data?.cost} 
              courseLevelName={data?.courseLevelName} 
            />
        </div>
        <Slide />
        <Nazarat />
      </div>
        
      <div className="hidden sm:block md:hidden">
        <h1 className="font-bold text-xl mr-14 mt-[100px]">
          {" "}
          {data?.title}{" "}
        </h1>
        <RightToz imageAddress={data?.imageAddress}
          googleTitle={data?.googleTitle}
          googleSchema={data?.googleSchema}
          describe={data?.describe}       
          miniDescribe={data?.miniDescribe}   
          techs={data?.techs}
          uniqeUrlString={data?.uniqeUrlString} 
        />
        <div className="flex flex-wrap justify-center gap-[15px]">
            <Left />
            <FirstLeft
              endTime={data?.endTime}
              cost={data?.cost} 
              courseLevelName={data?.courseLevelName} 
            />
            <EndLeft teacherName={data?.teacherName} />
        </div>
        <Slide />
        <Nazarat />
      </div>

      <div className="hidden md:block">
        <h1 className="font-bold text-2xl mr-14 mt-[100px]">
          {data?.title}
        </h1>
        <div className="mx-auto flex gap-5 justify-center flex-wrap">
          <div className="w-[65%]">
            <RightToz imageAddress={data?.imageAddress}
              googleTitle={data?.googleTitle}
              googleSchema={data?.googleSchema}
              describe={data?.describe}       
              miniDescribe={data?.miniDescribe}   
              techs={data?.techs}
              uniqeUrlString={data?.uniqeUrlString}                 
            />
          </div>
          <div className="w-[25%]">
            <Left />
            <FirstLeft 
              endTime={data?.endTime}
              cost={data?.cost} 
              courseLevelName={data?.courseLevelName} 
            />
            <EndLeft teacherName={data?.teacherName} />
          </div>
        </div>
        <div className="mt-36">
          <Slide />
          <Nazarat
            title={data2?.title}
            Describe={data2?.Describe}
          />
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
