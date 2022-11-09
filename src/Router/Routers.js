import { createBrowserRouter } from "react-router-dom"
import CardAllService from "../Pages/AllServices/CardAllService"
import Login from "../Pages/Authentications_Firebase/Login/Login"
import Register from "../Pages/Authentications_Firebase/Register/Register.js"
import Home from "../Pages/Home/Home"
import Main from "../Pages/Main/Main"
import MyReview from "../Pages/MyReview/MyReview"
import MyAddedService from "../Pages/MyService/MyAddedService"
import MyService from "../Pages/MyService/MyService"
import SinglePost from "../Pages/SinglePost/SinglePost"

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
        path:'/services',
        element:<CardAllService/>,
        loader: ()=>fetch('https://server-risanzahamed.vercel.app/services-collection')
       },
       {
        path:'/services/:id',
        element:<SinglePost/>,
        loader: ({params})=>fetch(`https://server-risanzahamed.vercel.app/services/${params.id}`)
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
        element:<MyService/>
       },
       {
        path: '/myaddedservice',
        element: <MyAddedService/>
       },
       {
        path:'/my-review',
        element: <MyReview/>
       }
      ])

    }
  ])

  export default router