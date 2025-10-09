import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import AllApps from "../pages/AllApps/AllApps";
import AppDetails from "../pages/AppDetails/AppDetails";
import ErrorApps from "../pages/ErrorApps/ErrorApps";

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
        loader: ()=>fetch('/allAppsData.json'),
        Component: AllApps,
      },
      {
        path: '/appDetails/:id',
        loader: async ({ params }) => {
          const res = await fetch('/allAppsData.json');
          const data = await res.json();
      
          const singleApp = data.find(app => app.id === parseInt(params.id));
      
          if (!singleApp) {
            throw new Response('App Not Found', { status: 404 });
          }
      
          return singleApp;
        },
        errorElement: <ErrorApps></ErrorApps>,
        Component: AppDetails,
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