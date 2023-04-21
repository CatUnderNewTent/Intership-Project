import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import CashGames from "./components/mainPart/CashGames/CashGames.component.tsx";
import NewYearSeries from "./components/mainPart/NewYearSeries/NewYearSeries.component.tsx";
import FinalStage from "./components/mainPart/FinalStage/FinalStage.component.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/cash-games",
        element: <CashGames />,
      },
      {
        path: "/new-year-series",
        element: <NewYearSeries />,
      },
      {
        path: "/final-stage",
        element: <FinalStage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
