import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoriesPage from "../src/Pages/CategoriesPage/CategoriesPage";
import MainPage from "../src/Pages/MainPage/MainPage";
import SingleProductPage from "../src/Pages/SingleProductPage/SingleProductPage";
import App from "./App";
import "./index.css";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import SalePage from "./Pages/SalePage/SalePage";
import ShoppingCartPage from "./Pages/ShoppingCartPage/ShoppingCartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:id",
        element: <SingleProductPage />,
      },
      {
        path: "/sales",
        element: <SalePage />,
      },
      {
        path: "/shopping-cart",
        element: <ShoppingCartPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
