import "./index.css";
import NavBar from "./components/navbar/NavBar";
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Testimonials from "./pages/testimonials/Testimonials";
import ErrorPage from "./ErrorPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" errorElement={<ErrorPage />} element={<Layout />} />
        <Route path="/Testimonials" element={<Testimonials />} />
      </Routes>
    </Router>
  );
}

export default App;
