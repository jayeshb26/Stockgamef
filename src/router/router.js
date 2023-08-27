// import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
// import { Market } from '../components/Market/Market';
// import Login from '../components/Auth/Login';




// // Protected route component
// const ProtectedRoute = ({ path, element }) => {
//     const isAuthenticated = localStorage.getItem('authToken')
//   if (isAuthenticated) {
//     return <Route element={element} path={path} />;
//   } else {
//     return <Navigate to="/login" />;
//   }
// };

// const Routers = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<Login/>} />
//         <ProtectedRoute path="/market" element={<Market />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

import { BrowserRouter, Route, Routes, Link, Outlet, Navigate } from 'react-router-dom';
import { Market } from '../components/Market/Market';
import Login from '../components/Auth/Login';
import Home from '../components/home/Home';
import Notfound from '../components/Notfound/Notfound';
import History from '../components/user/History/History';

// Simulated authentication state
const isAuthenticated = localStorage.getItem('authToken');

const PrivateRoute = ({ path, element }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;

//   if (isAuthenticated) {
//     return <Route path={path} element={element} />;
//   } else {
//     return <Navigate to="/login" />;
//   }
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <PrivateRoute path="/market" element={<Market />} /> */}
        <Route element={<PrivateRoute />}>
            <Route path="/market" element={<Market />} />
        </Route>
        <Route element={<PrivateRoute />}>
            <Route path="/market/history" element={<History/>} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

;

