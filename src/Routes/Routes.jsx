import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layout/Mainlayout";
import Books from "../Pages/Books/Books";
import Homepage from "../Pages/Homepage/Homepage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Pages/Homepage/BookDetails";

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
      },
      {
        path:"/bookdetails/:id",
        element:<BookDetails></BookDetails>,
        loader: ()=> fetch("/booksData.json"),
      }

    ],
    errorElement: <ErrorPage></ErrorPage>
  },
 
]);