import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainPage, AdminPage} from "./pages";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/admin-panel",
        element: <AdminPage />,
    },
]);

root.render(
    <>
    <RouterProvider router={router} />
    </>
);

