import React, { useEffect, useState } from "react";
import "./MrkHeader.css";
import { Dropdown } from "react-bootstrap";
import Profile from "../../user/Profile";
import { useNavigate } from "react-router-dom";
import { AppConstant } from "../../../AppConstant";
import { useDispatch } from "react-redux";
import { logOut } from "../../../Redux/Auth/AuthAction";
import { useSocket } from "../../Context/SocketContext";
import Avatar from 'react-avatar';

const MrkHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const socket = useSocket();
  // const [isProfilevisible, setProfileVisible] = useState(false);
  const [socketData,setSocketData] = useState(null)
  // const profileClick = () => {
  //   setProfileVisible((prevState) => !prevState);
  // };
  useEffect(()=>{
    if(socket){
      setSocketData(socket.data)
    }
  },[socket])
  // const [showModal, setShowModal] = useState(false);
  // const showModalComp = () => {
  //   setShowModal(true);
  // };
  const logout = () =>{
    dispatch(logOut())
    navigate('/login')
  }

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
              <span>{socketData?.creditPoint}</span>
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
              {/* <span>
                <a href="#" onClick={profileClick} className="display-picture">
                  <img src="https://i.pravatar.cc/85" width={30} alt="" />
                </a>
                <div
                  className={`${
                    isProfilevisible ? "show_profile" : "hidden"
                  } card`}
                >
                  <ul className="profile_UL">
                    <li>
                      <a
                        href="javascript:void(0);"
                        onClick={() => showModalComp()}
                      >
                        <Profile
                          showModal={showModal}
                          setShowModal={setShowModal}
                        />
                      </a>
                    </li>
                    <li>
                      <Link href="javascript:void(0);" to={AppConstant.HISTORY}>Histoy</Link>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Settings</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" onClick={logout}>Log Out</a>
                    </li>
                  </ul>
                </div>
              </span> */}
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                >
                  <Avatar name="User" size="30" round={true}  />
                </Dropdown.Toggle>

                <Dropdown.Menu >
                  <Dropdown.Item className="profileItem" href="javascript:void(0);"><Profile/></Dropdown.Item>
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
