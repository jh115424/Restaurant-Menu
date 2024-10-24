import RestaurantHomeApp from "./RestaurantHomeApp";
import Menus from "./Components/Menus/MenuOptions";
import InteriorPage from "./Components/RestaurantHomePageComponent/Celebrate/CelebratePage";
import ReservationsPage from "./Components/ReservationsComponent/ReservationsPage";
import EList from "./Components/EListComponent/EList";
import CelebratePage from "./Components/RestaurantHomePageComponent/Celebrate/CelebratePage";
import HomePage from "./RestaurantHomeApp";
import MenuOptions from "./Components/Menus/MenuOptions";
import ContactUs from "./Components/ContactComponent/ContactUs";
import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

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
    element: <EList />,
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
          // Implementation omitted
        }}
      />
    ),
  },
  {
    path: "/menus",
    element: <Menus />,
  },
  {
    path: "/interior",
    element: <InteriorPage />,
  },
  {
    path: "/celebrate",
    element: <CelebratePage />
  }
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
