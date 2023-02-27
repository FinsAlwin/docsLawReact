import { lazy } from "react";
import { Navigate } from "react-router-dom";
/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout"));

/***** Pages ****/

const Starter = lazy(() => import("../views/starter"));
const DocxGen = lazy(() => import("../views/docxGen"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/home" /> },
      { path: "/home", exact: true, element: <Starter /> },
      { path: "/:id", exact: true, element: <DocxGen /> },
    ],
  },
];

export default ThemeRoutes;
