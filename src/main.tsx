import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import './global.css';

const router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<div><p>Hello</p></div>
            },
            // {
            //     path:'/',
            //     element:<Navigate to={`f${(+new Date()).toString(16)}`} replace />
            // }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
