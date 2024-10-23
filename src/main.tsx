import RestaurantHomeApp from "./RestaurantHomeApp";

import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RestaurantHomeApp />,
  },

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
