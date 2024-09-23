import {createBrowserRouter, Navigate,NavLink, Route, Routes} from "react-router-dom";
import CommonLayout from "../layout/commonlayout";
import Bookspage from "../pages/bookspage";
import BookDetailspage from "../pages/bookdetailspage";
import Homepage from "../pages/homepage";
import { ROUTES } from "../routes";
import NotFoundPage from "../pages/notfound-404";

const router=createBrowserRouter([
    {
        
        path:`${ROUTES.HOME}`,
        element:<CommonLayout/>,
        
   
            // path:"*", 
            // element:<Navigate to="/404"/>,
           
        children:[
            {
                path:`${ROUTES.HOME}`,
                element:<Homepage/>  
   
           } ,
            {
             path:`${ROUTES.BOOKS}`, 
             element:<Bookspage/>  

        } ,

        {
            path:`${ROUTES.SINGLE_BOOKS.STATIC}`,
            element:<BookDetailspage/>  

       } ,

       {
        path:"/404", 
        element:<Navigate to="/404"/>,
           
       },
        {   path:"*",
            element:<NotFoundPage/>,

        }
      
    ],
   
      

    }
]);
{/* <Routes>
<Route path="*" exact element={<NotFoundPage/>} />
</Routes> */}

export default router;
 