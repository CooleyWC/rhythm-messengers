import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  HashRouter,
} from "react-router-dom";
import routes from "./routes";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </HashRouter>
);
