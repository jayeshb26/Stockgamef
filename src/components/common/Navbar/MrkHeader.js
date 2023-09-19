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
import Details from "../../user/Details/Details";
import LastOrder from "../../user/lastorder/LastOrder";

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
  const [timer, setTimer] = useState(null);
  const [lastOrder, setLastOrder] = useState(null);
  const [time, setTime] = useState(moment().format("LTS"));

  useEffect(() => {
    // const currentTime = moment().format('LT');
    // const unixCurrentTime = moment().unix(currentTime)
    const currentTime = Date.now();
    const unixCurrentTime = (currentTime / 1000).toFixed(3);
    if (socketValue?.mainData) {
      // setTimer(socketValue.mainData?.data?.resulttime -
      //   socketValue?.mainData?.data?.starttime)
      setTimer(
        Math.floor(
          socketValue.mainData?.data?.resulttime - Number(unixCurrentTime)
        )
      );
    }
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

  useEffect(() => {
    setLastOrder(localStorage.getItem("lastOrder"));
  }, [lastOrder]);

  const formatTime = () => {
    if (timer > 0) {
      const minutes = Math.floor(timer / 60);
      const remainingSeconds = timer % 60;
      return `${minutes}:${
        remainingSeconds < 10 ? "0" : ""
      }${remainingSeconds}`;
    } else {
      return `00:00`;
    }
  };


  useEffect(() => {
    let timerID;

    const updateTimer = () => {
      setTimer((prevTimer) => prevTimer - 1);
      setTime(moment().format("LTS"));

      // Recursive setTimeout to update the timer every second
      timerID = setTimeout(updateTimer, 1000);
    };

    // Start the timer
    updateTimer();

    return () => {
      clearTimeout(timerID); // Cleanup the setTimeout on unmount
    };
  }, []);

  const logout = () => {
    dispatch(logOut());
    navigate("/login");
  };
  const backTOMarket = () => {
    navigate("/market");
  };

  return (
    <>
      <div className="nav navbar">
        <div className="navbar_wrapper">
          <ul>
            <li>
              <span className="c_pointer" onClick={backTOMarket}>
                Stock Skill
              </span>
            </li>
            <li>
              <span className="fiX_time">
                {socketData.date ? socketData.date : "00/00/0000"} <br />
                {time}
              </span>
            </li>
            <li>
              <span>
                {socketData.starttime ? socketData.starttime : "00:00 AM/PM"}
              </span>
            </li>
            <li>
              <span>
                {socketData.resulttime ? socketData.resulttime : "00:00 AM/PM"}
              </span>
            </li>
            <li>
              <span>{formatTime()}</span>
            </li>
            <li>
              <span>
                {socketData.creditPoint ? socketData.creditPoint : "000"}
              </span>
            </li>
            <li>
              <span>
                <LastOrder />
              </span>
            </li>
            {/* <li>
              <span>Last Point</span>
            </li> */}
            <li>
              <span>
                <Details />
              </span>
            </li>
            {/* <li>
              <span>Pre orders</span>
            </li> */}
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
