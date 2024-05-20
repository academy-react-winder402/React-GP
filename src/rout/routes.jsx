import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Leyout from "./leyout";
import Landing from "../Screen/landing/landing";
import Courses from "../Screen/courses/courses";
import LoginComponent from "../component/Logincomponent/LoginComponent";
import ForgetPass from "../component/forgetPass/ForgetPass";
import NewRegister from "../component/Register/NewRegister";
import ProductA from "../component/ProductComponent/productA";
import ProductB from "../component/ProductComponent/productB";

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
                    path:'/courses',
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
    ])

    return ( 
        <RouterProvider router={routes}/>
     );
}
 
export default Routes;