import React, { useEffect, useState } from "react";
import { AppConstant } from "../../../AppConstant";
import api from "../../Service/API/api";
import { toast } from "react-toastify";
const ProfileDetails = () => {
  const [profileData, setProfileData] = useState();
  useEffect(() => {
    getProfileDetails();
  }, []);
  const getProfileDetails = async () => {
    api
      .get(`${AppConstant.END_POINTS.PROFILE}`)
      .then((response) => {
        if (response.data) {
          setProfileData(response.data.data);
        }
      })
      .catch((error) => {
        toast.error(error)
        console.log("ERROR", error);
      });
  };

  return (
    <div>
      {profileData ? <div className="profile_wrapper">
        <div className="profile_field row">
          <div className="profile_heading col-md-2"></div>
          <div className="profile_heading col-md-3">
            <p>User Name</p>
          </div>
          <div className="profile_heading col-md-1">:</div>
          <div className="profile_field_detail col-md-4">
            <p>{profileData.userName}</p>
          </div>
        </div>
        <div className="profile_field row">
          <div className="profile_heading col-md-2"></div>
          <div className="profile_heading col-md-3">
            <p>Role</p>
          </div>
          <div className="profile_heading col-md-1">:</div>
          <div className="profile_field_detail col-md-4">
            <p>{profileData.role}</p>
          </div>
        </div>
        <div className="profile_field row">
          <div className="profile_heading col-md-2"></div>
          <div className="profile_heading col-md-3">
            <p>Won Points</p>
          </div>
          <div className="profile_heading col-md-1">:</div>
          <div className="profile_field_detail col-md-4">
            <p>{profileData.wonPoint.toFixed(2)}</p>
          </div>
        </div>
        <div className="profile_field row">
          <div className="profile_heading col-md-2"></div>
          <div className="profile_heading col-md-3">
            <p>Credit Point</p>
          </div>
          <div className="profile_heading col-md-1">:</div>
          <div className="profile_field_detail col-md-4">
            <p>{profileData.creditPoint.toFixed(2)}</p>
          </div>
        </div>
      </div> : <p>No Details found..</p> }
    </div>
  );
};

export default ProfileDetails;
