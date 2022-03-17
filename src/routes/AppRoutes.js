import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from '../Components/Sidebar/Sidebar';
import { DashboardRoute } from "./Route";

const AppRoutes = () => {
  return (
    <div style="display:flex">
      <Router>
        <Sidebar />
        <Routes>
          {DashboardRoute.map((DashboardRoute, index) => {
            return (
              <Route
                key={index}
                path={DashboardRoute.path}
                element={DashboardRoute.component}
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default AppRoutes;



     