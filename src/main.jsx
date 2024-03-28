import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import App from "./App";
import BookDetails from "./components/BookDetails";
import ListedBook from "./components/ListedBook";
import ErroePage from "./ErroePage";
import PageToRead from "./components/PageToRead";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErroePage></ErroePage>,
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        loader: () => fetch("../Books.json"),
        path: "/listed",
        element: <ListedBook></ListedBook>,
      },
      {
        loader: () => fetch("../Books.json"),
        path: "/read",
        element: <PageToRead></PageToRead>,
      },
      {
        loader: () => fetch("../Books.json"),
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
