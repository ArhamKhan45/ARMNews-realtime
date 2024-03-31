import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Business from "../components/Business";

function RouterPage() {
  return (
    <>
      <BrowserRouter basename="/">
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/business" element={<Business />} />
          {/* <Route path="/health" element={} />
          <Route path="/sports" element={} />
          <Route path="/entertainment" element={} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterPage;
