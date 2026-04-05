import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layout/Mainlayout";
import Books from "../Pages/Books/Books";
import Homepage from "../Pages/Homepage/Homepage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

 export const router = createBrowserRouter([
  {
    path: "/",
    element:<Mainlayout></Mainlayout>,
    children:[
      {
        index:true,
        element:<Homepage></Homepage>
      },
      {
          path:"/Books",
          element:<Books></Books>
      }

    ],
    errorElement: <ErrorPage></ErrorPage>
  },
 
]);