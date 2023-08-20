import { AppConstant } from "../AppConstant";
// import MyComponent from "../MyComponent";
import Login from "../components/Auth/Login";
import { Market } from "../components/Market/Market";
import Notfound from "../components/Notfound/Notfound";

export const routes = [
    { path: `${AppConstant.LOGIN}`, element: <Login/> },
    { path: `${AppConstant.MARKET_NEW}`, element: <Market />,protected: true },
    { path: '*', element: <Notfound /> },
  ];