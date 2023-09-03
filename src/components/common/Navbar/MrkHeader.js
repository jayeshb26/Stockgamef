
import React, { useEffect, useState } from "react";
import "./MrkHeader.css";
import { Dropdown } from "react-bootstrap";
import Profile from "../../user/Profile";
import { useNavigate } from "react-router-dom";
import { AppConstant } from "../../../AppConstant";
import { useDispatch } from "react-redux";
import { logOut } from "../../../Redux/Auth/AuthAction";
import { useSocket } from "../../Context/SocketContext";
import Avatar from "react-avatar";
import moment from "moment/moment";

const MrkHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const socketValue = useSocket();
  
  // Define a function to get the default data from local storage or set initial values.
  const getDefaultData = () => {
    const storedDefaultData = localStorage.getItem("defaultData");
    if (storedDefaultData) {
      return JSON.parse(storedDefaultData);
    } else {
      return {
        date: null,
        starttime: null,
        resulttime: null,
        betclose: null,
        creditPoint: "000",
      };
    }
  };

  const [socketData, setSocketData] = useState(getDefaultData);

  useEffect(() => {
    if (socketValue?.mainData) {
      const newSocketData = socketValue.mainData?.data;
      setSocketData({
        date: moment(newSocketData.date).format("DD/MM/YYYY"),
        starttime: moment.unix(newSocketData.starttime).format("LT"),
        resulttime: moment.unix(newSocketData.resulttime).format("LT"),
        betclose: moment.unix(newSocketData.betclose).format("LT"),
        creditPoint: newSocketData.creditPoint || "000",
      });

      // Store the updated data in local storage.
      localStorage.setItem("defaultData", JSON.stringify(socketData));
    }
  }, [socketValue]);

  const logout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  return (
    <>
      <div className="nav navbar">
        <div className="navbar_wrapper">
          <ul>
            <li>
              <span>Stock Skill</span>
            </li>
            <li>
              <span>
                {socketData.date ? socketData.date : "00/00/0000"}
              </span>
            </li>
            <li>
              <span>
                {socketData.starttime
                  ? socketData.starttime
                  : "00:00 AM/PM"}
              </span>
            </li>
            <li>
              <span>
                {socketData.resulttime
                  ? socketData.resulttime
                  : "00:00 AM/PM"}
              </span>
            </li>
            <li>
              <span>4:00</span>
            </li>
            <li>
              <span>
                {socketData.creditPoint ? socketData.creditPoint : "000"}
              </span>
            </li>
            <li>
              <span>Last Order</span>
            </li>
            <li>
              <span>Last Point</span>
            </li>
            <li>
              <span>Details</span>
            </li>
            <li>
              <span>Pre orders</span>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <Avatar name="User" size="30" round={true} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    className="profileItem"
                    href="javascript:void(0);"
                  >
                    <Profile />
                  </Dropdown.Item>
                  <Dropdown.Item href={AppConstant.HISTORY}>
                    History
                  </Dropdown.Item>
                  <Dropdown.Item href="javascript:void(0);" onClick={logout}>
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MrkHeader;
