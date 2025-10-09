import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: '/',
        loader: ()=>fetch('/appsData.json'),
        Component: Home,
      },
      {
        path: '/apps',
        Component: Apps,
      },
      {
        path: 'installation',
        // loader: ()=>fetch('/allAPpsData.json'),
        // Component: ReadList
      },

      {
        path: '/installation/:id',
        loader: ()=>fetch('/allAppsData.json'),
        // Component: BookDetails,
      }
    ]
  }
  
]);