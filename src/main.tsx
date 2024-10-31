import RestaurantHomeApp from "./RestaurantHomeApp";
import Inside from "./Components/InsidePictures/Inside";
import ReservationsPage from "./Components/ReservationsComponent/ReservationsPage.tsx";
import EList from "./Components/EListComponent/EList";
import CelebratePage from "./Components/RestaurantHomePageComponent/Celebrate/CelebratePage";
import HomePage from "./RestaurantHomeApp";
import MenuList from "./Components/Menus/MenuList";
import ContactUs from "./Components/ContactComponent/ContactUs";
import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import SignUpProgram from "./Components/SignUpProgram/SignUp";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/",
    element: <RestaurantHomeApp />,
  },

  {
    path: "/e-list",
    element: (
      <EList
        setUserData={function (_data: {
          name: string;
          email: string;
          phone: string;
          guests: number;
          date: string;
          time: string;
          message: string;
        }): void {
          console.log("Form submitted");
        }}
      />
    ),
  },

  {
    path: "/reservation",
    element: <ReservationsPage />,
  },

  {
    path: "/contact-us",
    element: (
      <ContactUs
        setUserData={function (_data: {
          name: string;
          email: string;
          message: string;
        }): void {
          console.log("Form submitted");
        }}
      />
    ),
  },
  {
    path: "/menu-list",
    element: <MenuList />,
  },
  {
    path: "/interior",
    element: <Inside />,
  },
  {
    path: "/celebrate-page",
    element: <CelebratePage />,
  },
  {
    path: "/sign-up",
    element: <SignUpProgram />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
