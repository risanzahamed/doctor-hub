import { createBrowserRouter } from "react-router-dom"
import CardAllService from "../Pages/AllServices/CardAllService"
import Login from "../Pages/Authentications_Firebase/Login/Login"
import Register from "../Pages/Authentications_Firebase/Register/Register.js"
import Blog from "../Pages/Blog/Blog"
import Home from "../Pages/Home/Home"
import Main from "../Pages/Main/Main"
import MyaddService from "../Pages/MyaddService/MyaddService"
import MyReview from "../Pages/MyReview/MyReview"
import UpdateReview from "../Pages/MyReview/UpdateReview"
import MyAddedService from "../Pages/MyService/MyAddedService"
import MyService from "../Pages/MyService/MyService"
import SinglePost from "../Pages/SinglePost/SinglePost"
import PrivateRouter from "./PrivateRouter/PrivateRouter"

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children:([
       {
        path:'/',
        element:<Home/>,
        loader: ()=>fetch('https://server-xi-five.vercel.app/my-service')
       },
       {
        path:'/services',
        element:<CardAllService/>,
        loader: ()=>fetch('https://server-xi-five.vercel.app/services-collection')
       },
       {
        path:'/services/:id',
        element:<SinglePost/>,
        loader: ({params})=>fetch(`https://server-xi-five.vercel.app/services/${params.id}`)
       },

       {
        path:'/login',
        element:<Login/>
       },
       {
        path:'/register',
        element:<Register/>
       },
       {
        path:'/my-service',
        element:<PrivateRouter><MyService/></PrivateRouter>
       },
       {
        path: '/myaddedservice',
        element: <PrivateRouter><MyAddedService/></PrivateRouter>
       },
       {
        path:'/my-review',
        element: <PrivateRouter><MyReview/></PrivateRouter>,
       },
       {
        path:'/update-review/:id',
        element:<UpdateReview/>,
        loader: ({params})=>fetch(`https://server-xi-five.vercel.app/my-review/${params.id}`)
       },
       {
        path:"/blog",
        element:<Blog/>
       },
       {
        path:'/MyaddService',
        element:<MyaddService/>
       }
      ])
    }
  ])

  export default router