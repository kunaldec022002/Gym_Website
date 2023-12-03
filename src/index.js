import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from'./Views/Home/Home';
import Signup from './Views/Signup/Signup';
import Login from './Views/Login/Login';
import Class from './Views/Classes/Class';
import Membership from './Views/Membership/Membership';



const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    "path":"/",
    "element":<Home/>
  },
  {
    "path":"/signup",
    "element":<Signup/>
  },
  {
    "path":"/login",
    "element":<Login/>
  },

  {
    "path":"/class",
    "element":<Class/>
  },

  {
    "path":"/membership",
    "element":<Membership/>
  }

])
  

root.render (<RouterProvider router={router}/>);
 



