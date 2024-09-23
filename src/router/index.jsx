import {createBrowserRouter} from "react-router-dom";
import CommonLayout from "../layout/commonlayout";
import Bookspage from "../pages/bookspage";
import BookDetailspage from "../pages/bookdetailspage";
import Homepage from "../pages/homepage";
import { ROUTES } from "../routes";

const router=createBrowserRouter([
    {
        path:`${ROUTES.HOME}`,
        element:<CommonLayout/>,
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
    ]

    }
]);
export default router;
 