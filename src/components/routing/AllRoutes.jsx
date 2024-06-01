import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Login from "../../pages/Login";
import Tickets from "../ticket/Tickets";
import { AuthContext } from "../../contextApi/AuthContextProvider";
import CreateTicket from "../ticket/CreateTicket";
import ViewTicket from "../ticket/ViewTicket";
import EditTicket from "../ticket/EditTicket";

const PrivateRoute = ({ children }) => {
  const { authDetails } = useContext(AuthContext);

  if (!authDetails.isLogedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/about"
        element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
        }
      />
      <Route
        path="/contact"
        element={
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        }
      />
      <Route
        path="/tickets"
        element={
          <PrivateRoute>
            <Tickets />
          </PrivateRoute>
        }
      />
      <Route
        path="/tickets/create-ticket"
        element={
          <PrivateRoute>
            <CreateTicket />
          </PrivateRoute>
        }
      />
      <Route
        path="/tickets/view-ticket/:id"
        element={
          <PrivateRoute>
            <ViewTicket />
          </PrivateRoute>
        }
      />
      <Route
        path="/tickets/edit-ticket/:id"
        element={
          <PrivateRoute>
            <EditTicket />
          </PrivateRoute>
        }
      />

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AllRoutes;
