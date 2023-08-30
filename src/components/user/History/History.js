import React, { useEffect, useState } from "react";
import { useSocket } from "../../Context/SocketContext";
import { toast } from "react-toastify";
import api from "../../Service/API/api";
import { AppConstant } from "../../../AppConstant";
import { Table } from "react-bootstrap";
import "./History.css";
import MrkHeader from "../../common/Navbar/MrkHeader";

const History = () => {
  const socket = useSocket();
  const mainData = socket ? socket.mainData : null;
  const [history, setHistory] = useState([]);
  useEffect(() => {
    if (mainData) {
      // getHistory();;
    }
  }, [mainData]);
  useEffect(() => {
    getHistory();
  }, []);
  const getHistory = async () => {
    const url = AppConstant.END_POINTS.BET_HISTORY;
    try {
      const response = await api.get(url);
      if (response.data) {
        setHistory(response.data.data);
      }
    } catch (error) {
      toast.error(error);
      console.log("Error", error);
    }
  };
  return (
    <>
      <div className="haeder_wrap"><MrkHeader /></div>
      <div className="history_wrapper">
        <div className="container">
          <div className="row">
            <div className="history_details">
              <Table responsive="sm">
                <thead className="postion_sticky">
                  <tr>
                    <th key={1}>Sr No</th>
                    <th key={1}>User Name</th>
                    <th key={1}>Date & Time</th>
                    <th key={1}>Order success</th>
                    <th key={1}>Start Point</th>
                    <th key={1}>Win Position</th>
                    <th key={1}>Order point</th>
                  </tr>
                </thead>
                <tbody>
                  {history ? (
                    history.map((item, index) => {
                      return (
                        <tr>
                          <td key={index}>{+index + 1}</td>
                          <td key={index}>{item.userName}</td>
                          <td key={index}>{item.createDate}</td>
                          <td key={index}>{item.won.toFixed(2)}</td>
                          <td key={index}>{item.startPoint.toFixed(2)}</td>
                          <td key={index}>{item.winPosition.symbol}</td>
                          <td key={index}>{item.bet}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={7}>No data found...</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
