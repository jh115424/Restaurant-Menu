import RestaurantHomeApp from "./RestaurantHomeApp";
import Menus from "./Components/Menus/MenuOptions"
import ReservationsPage from "./Components/ReservationsComponent/ReservationsPage";;
import EList from "./Components/EListComponent/EList";
import MenuOptions from "./Components/Menus/MenuOptions";
import HomePage from "./RestaurantHomeApp";
import ContactUs from "./Components/ContactComponent/ContactUs";
import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider, BrowserRouter } from "react-router-dom";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
  },
  //
  {
    path: "/",
    element: <RestaurantHomeApp />,
  },

    {
    path: "/e-list",
    element: <EList />,
   
  },
  {
    path: "/reservation",
    element: <ReservationsPage />,
  },
   {
    path: "/contact-us",
    element: <ContactUs />,
  },
    {
      path: "/menus",
      element: <Menus />,
    }
  

  //     path: "/reservation/",
  //     element: <ReservationPage />,
  //   },
  //   {
  //     path: "/restaurant-home",
  //     element: <RestaurantHomePage />,
  //   },
  //   {
  //     path: "/menus",
  //     element: <Menus />,
  //   }
  // {
  //   path: "/e-list",
  //   element: <EList />,
  // },
  // {
  //   path: "/contact-us",
  //   element: <ContactUs />,
  // }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
