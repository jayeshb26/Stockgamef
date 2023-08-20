// import React from 'react'
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { routes } from './RouterPage';

// const Routers = () => {
//     return (
//         <div>
//             <Router>
//                 <Routes>
//                     <Route path="/" element={<Navigate to="/market" />} /> {/* Redirect from '/' to '/market' */}
//                     {routes.map((route, index) => (
//                         <Route key={index} path={route.path}  element={route.element} >
//                             {route.children &&
//                                 route.children.map((child, childIndex) =>
//                                     child.index ? (
//                                         <Route key={childIndex} index element={child.element} />
//                                     ) : (
//                                         <Route key={childIndex} path={child.path} element={child.element} />
//                                     )
//                                 )}
//                         </Route>
//                     ))}
//                 </Routes>
//             </Router>
//         </div>
//     )
// }

import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Notfound from "../components/Notfound/Notfound";
import Login from "../components/Auth/Login";
const isAuthenticated = true;

const Market = lazy(() => import("../components/Market/Market"));
const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/Market"
          element={
            isAuthenticated ? (
              <Market />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route path="*" element={<Notfound />} />
      </Routes>
    );
  };
  
const Routers = () => {
  return (
    <div>
      <Router>
       <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
      </Router>
    </div>
  );
};

export default Routers;
