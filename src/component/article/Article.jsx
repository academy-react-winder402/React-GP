import Rights from "./rights/Rights";
import Lefts from "./lefts/Lefts";
import { useParams } from "react-router-dom";
import http from '../../core/services/interceptore'
import { useQuery } from "react-query";
import TwoLeft from "./lefts/twoLeft";

const Article = () => {
    const {id} = useParams()
    
    const getNewsDetail =async () => {
        const res =await http.get(`/News/${id}`)
        return res
    }

    const {data} =useQuery('newsDetail' , getNewsDetail)
    
    return (
        <div >
            <div className = "hidden xl:block" >
                <h1 className = "font-bold text-2xl mr-14" > {data?.detailsNewsDto.title} </h1> 
                <div className = "mx-auto flex gap-14 justify-center" >
                    <div className = "w-[65%]" >
                        <Rights 
                           currentImageAddress={data?.detailsNewsDto.currentImageAddress}
                           googleTitle={data?.detailsNewsDto.googleTitle}
                           googleDescribe={data?.detailsNewsDto.googleDescribe}                           
                           miniDescribe={data?.detailsNewsDto.miniDescribe}                                
                           describe={data?.detailsNewsDto.describe}  
                           keyword={data?.detailsNewsDto.keyword}                            
                        />
                    </div> 
                    <div className = "w-[25%]" >
                        <Lefts 
                           currentView={data?.detailsNewsDto.currentView}                             
                           addUserFullName={data?.detailsNewsDto.addUserFullName}                                 
                           updateDate={data?.detailsNewsDto.updateDate}                                                 
                        />
                        <TwoLeft 
                           addUserFullName={data?.detailsNewsDto.addUserFullName}
                        />
                    </div> 
                </div> 
            </div>
            {/* <h2>{item?.news.title}</h2> */}
        </div>
    );
};

export default Article;