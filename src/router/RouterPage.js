import { AppConstant } from "../AppConstant";
import Login from "../components/Auth/Login";
import { Market } from "../components/Market/Market";
import Notfound from "../components/Notfound/Notfound";

export const routes = [
    { path: `${AppConstant.LOGIN}`, element: <Login /> },
    { path: `${AppConstant.MARKET}`, element: <Market /> },
    { path: '*', element: <Notfound /> },
  ];