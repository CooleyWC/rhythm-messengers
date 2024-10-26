import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Testimonials from "./pages/testimonials/Testimonials";
import ErrorPage from "./ErrorPage";
import About from "../pages/about/About";
import NavBar from "./navbar/NavBar";
const Routes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" errorElement={<ErrorPage />} element={<NavBar />}>
          <Route index element={<About />} />
          <Route path="/Testimonials" element={<Testimonials />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routes;
