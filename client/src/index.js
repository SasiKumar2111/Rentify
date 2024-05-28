import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';


import './index.css';
import Home from './pages/home.jsx';
import Login from './components/Login/login.jsx';
import Signuppage from './pages/signuppage.jsx';
import Postfreeads from './pages/postfreeads.jsx';
import Searchresults from './pages/searchresults.jsx';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signuppage/>
  },
  {
    path:"/postads",
    element:<Postfreeads/>
  },
  {
    path:"/searchresults",
    element:<Searchresults/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

