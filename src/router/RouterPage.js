import { AppConstant } from "../AppConstant";
// import MyComponent from "../MyComponent";
import Login from "../components/Auth/Login";
import { Market } from "../components/Market/Market";
import Notfound from "../components/Notfound/Notfound";
import History from "../components/user/History/History";

export const routes = [
    { path: `${AppConstant.LOGIN}`, element: <Login/> },
    { path: `${AppConstant.MARKET_NEW}`, element: <Market />,protected: true },
    { path: `${AppConstant.HISTORY}`, element: <History />,protected: true },
    { path: '*', element: <Notfound /> },
  ];