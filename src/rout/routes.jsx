import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Leyout from "./leyout";
import Landing from "../Screen/landing/landing";
import Courses from "../Screen/courses/courses";

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
        }
    ])

    return ( 
        <RouterProvider router={routes}/>
     );
}
 
export default Routes;