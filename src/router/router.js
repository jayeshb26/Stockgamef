import { BrowserRouter, Route, Routes, Link, Outlet, Navigate } from 'react-router-dom';
import { Market } from '../components/Market/Market';
import Login from '../components/Auth/Login';
import Home from '../components/home/Home';
import Notfound from '../components/Notfound/Notfound';
import History from '../components/user/History/History';
import HowItWorks from '../components/pages/HowItWorks';
import TermsAndCondition from '../components/pages/terms-and-condition/TermsAndCondition';
import FAQS from '../components/pages/FAQs/FAQS';

// Simulated authentication state
const isAuthenticated = localStorage.getItem('authToken');

const PrivateRoute = ({ path, element }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
        <Route path="/faq" element={<FAQS />} />
        <Route element={<PrivateRoute />}>
            <Route path="/market" element={<Market />} />
        </Route>
        <Route element={<PrivateRoute />}>
            <Route path="/market/history" element={<History/>} />
        </Route>
        {/* <Route element={<PrivateRoute />}>
            <Route path="/market/list" element={<Reward/>} />
        </Route> */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

