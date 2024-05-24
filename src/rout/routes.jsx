import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Leyout from "./leyout";
import Landing from "../Screen/landing/landing";
import Courses from "../Screen/courses/courses";
import Articles from "../Screen/articles/Articles";
import Connecting from "../Screen/connecting/Connecting";
import LoginComponent from "../component/Logincomponent/LoginComponent";
import ForgetPass from "../component/forgetPass/ForgetPass";
import NewRegister from "../component/Register/NewRegister";
import ProductA from "../component/ProductComponent/productA";
import ProductB from "../component/ProductComponent/productB";
import DPanel from "../component/PanelComponent/DPanel/DPanel";

const Routes = () => {

    const routes = createBrowserRouter([
        {
            path:'/',
            element:<Leyout />,
            children:[
                {
                    path:'/',
                    element:<Landing />
                },
                {
                    path:'/courses/:id',
                    element:<Courses />            
                },
                {
                    path:'/producta',
                    element:<ProductA/>           
                },
                {
                    path:'/productb',
                    element:<ProductB/> 
                },
                {       
                    path:'/articles',
                    element:<Articles />            
                },
                {
                    path:'/connecting',
                    element:<Connecting />            
                },
            ]
        },
        {
            path:'/register',
            element:<NewRegister/>          
        },
        {
            path:'/login',
            element:<LoginComponent/>
        },
        {
            path:'/forgetpass',
            element:<ForgetPass/>
        },
        {
            path:'/dpanel',
            element:<DPanel/>
        },
    ])

    return ( 
        <RouterProvider router={routes}/>
     );
}
 
export default Routes;