import React, { useEffect, useState } from "react";
import MrkHeader from "../../common/Navbar/MrkHeader";
import api from "../../Service/API/api";
import { AppConstant } from "../../../AppConstant";
import { Table } from "react-bootstrap";
import { HistoryRows } from "../../../Utilities";
import "./History.css";
import { useSocket } from "../../Context/SocketContext";
const History = () => {
  const socket = useSocket();
  const mainData = socket ? socket.mainData : null;
  const [hisory, setHistory] = useState();
  useEffect(() => {
    if(mainData){
      getHistory();
      console.log("HistoryRows", HistoryRows);
    }
  }, [mainData]);
  useEffect(()=>{
    getHistory()
  },[])
  const getHistory = async () => {
    const url = AppConstant.END_POINTS.BET_HISTORY;
    await api
      .get(url)
      .then((response) => {
        if (response.data) {
          setHistory(response.data.data);
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  return (
    <div>
      <div className="haeder_wrap">
        {/* {mainData ? <MrkHeader />: <div>Loading...</div>} */}
        <MrkHeader />
      </div>
      <div className="history_wrapper">
        <div className="container">
          <div className="row">
            <div className="history_details">
              {/* {HistoryRows &&
                HistoryRows.map((heading, index) => {
                  return (
                    <th key={index}>{Object.values(heading)[0]}</th>
                  );
                })} */}
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
                  {hisory ? hisory.map((item, index)=>{
                    return <tr>
                        <td key={index}>{+index + 1}</td>
                        <td key={index}>{item.userName}</td>
                        <td key={index}>{`${item.DrDate} - ${item.DrTime}`}</td>
                        <td key={index}>{item.won.toFixed(2)}</td>
                        <td key={index}>{item.startPoint.toFixed(2)}</td>
                        <td key={index}>{item.winPosition}</td>
                        <td key={index}>{item.bet}</td>
                        </tr>
                  }): <td colSpan={7}>No data found...</td> }
                </tbody>
              </Table>
              {/* {hisory ? (
                hisory.map((item, index) => {
                  return (
                    <Table responsive="sm">
                      <thead>
                        <tr>
                          <th key={index}>User Name</th>
                          <th key={index}>Dr Date</th>
                          <th key={index}>Dr Time</th>
                          <th key={index}>Game Type</th>
                          <th key={index}>Start Point</th>
                          <th key={index}>Win Position</th>
                          <th key={index}>Bet</th>
                        </tr>
                      </thead>
                      <tbody>
                        <td key={index}>{item.userName}</td>
                        <td key={index}>{item.DrDate}</td>
                        <td key={index}>{item.DrTime}</td>
                        <td key={index}>{item.game}</td>
                        <td key={index}>{item.startPoint.toFixed(2)}</td>
                        <td key={index}>{item.winPosition}</td>
                        <td key={index}>{item.bet}</td>
                      </tbody>
                    </Table>
                  );
                })
              ) : (
                <Table responsive="sm">
                  <thead>
                    <tr>
                      <th key={1}>User Name</th>
                      <th key={1}>Dr Date</th>
                      <th key={1}>Dr Time</th>
                      <th key={1}>Game Type</th>
                      <th key={1}>Start Point</th>
                      <th key={1}>Win Position</th>
                      <th key={1}>Bet</th>
                    </tr>
                  </thead>
                  <tbody>
                    <td colSpan={7}>No Details Found</td>
                  </tbody>
                </Table>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
