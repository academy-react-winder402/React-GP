import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Leyout from "./leyout";
import Landing from "../Screen/landing/landing";
import Courses from "../Screen/courses/courses";
import Register from "../Screen/Register/Register";
import LoginComponent from "../component/Logincomponent/LoginComponent";
import ForgetPass from "../component/forgetPass/ForgetPass";

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
            ]
        },
        {
            path:'/register',
            element:<Register/>          
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