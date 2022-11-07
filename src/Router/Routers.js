import { createBrowserRouter } from "react-router-dom"
import AllTour from "../Pages/AllTour/AllTour"
import Login from "../Pages/Authentications_Firebase/Login/Login"
import Register from "../Pages/Authentications_Firebase/Register/Register.js"
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
       },
       {
        path:'/login',
        element:<Login/>
       },
       {
        path:'/register',
        element:<Register/>
       },
      ])

    }
  ])

  export default router