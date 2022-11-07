import { createBrowserRouter } from "react-router-dom"
import AllTour from "../Pages/AllTour/AllTour"
import Home from "../Pages/Home/Home"
import Main from "../Pages/Main/Main"

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children:([
       {
        path:'/',
        element:<Home/>,
       },
       {
        path:'/tour',
        element:<AllTour/>,
        loader: ()=>fetch('http://localhost:5000/tour-collection')
       }
      ])

    }
  ])

  export default router