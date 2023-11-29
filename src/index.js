import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from'./Views/Home/Home';
import Signup from './Views/Signup/Signup';

import { Form } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    "path":"/",
    "element":<Home/>
  },
  {
    "path":"/signup",
    "element":<Signup/>
  }

])
  

root.render (<RouterProvider router={router}/>);
 



