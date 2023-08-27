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

const MrkHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const socketValue = useSocket();
  const [socketData, setSocketData] = useState(null);

  useEffect(() => {
    if (socketValue) {
      setSocketData(socketValue.mainData?.data);
    } else {
      setSocketData(null);
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
              <span>27/08/2023</span>
            </li>
            <li>
              <span>3:00 PM</span>
            </li>
            <li>
              <span>3:10 PM</span>
            </li>
            <li>
              <span>4:00</span>
            </li>
            <li>
              <span>
                {socketData?.creditPoint
                  ? socketData.creditPoint
                  : '000'}
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
                    {/* <Link to={AppConstant.HISTORY}>History</Link> */}
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
