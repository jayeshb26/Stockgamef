import React, { useEffect } from "react";
import { useState } from "react";
import { listArray } from "../../../Utilities";
import './ListScreen.css'
const MRKListScreen = () => {
  const [List, setList] = useState(listArray);
  // Function to generate a random color (green, red, or blue)
  const getRandomColor = () => {
    const colors = ["green", "red", "blue"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  // Function to shuffle the list array randomly
  const shuffleList = () => {
    const shuffledList = [...List];
    for (let i = shuffledList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
    }
    return shuffledList;
  };
  useEffect(() => {
    // Function to update the list with new random colors and shuffle it
    const updateList = () => {
        const shuffledList = shuffleList().map(item => ({
          ...item,
          color: getRandomColor(),
        }));
        setList(shuffledList);
      };
  
      // Initially update the list
      updateList();
  
      // Set up an interval to update the list every 3 seconds
      const intervalId = setInterval(updateList, 3000);
  
      // Clear the interval when the component unmounts
      return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="list_sreen">
        <div class="container-fluid">
          <div class="row">
            <div class="custom-table col-md-6">
              <div class="table-header sticky">
                <div>Sr No</div>
                <div>Stock Name</div>
                <div>Symbol</div>
                <div>Stock Market</div>
                <div>Number</div>
              </div>
              <div class="table-content">
                {List && List.map((item ,index)=>{
                    index = index +1;
                    return <> {index <= 50 &&<div class="table-row" style={{ background: item.color }}>
                    <div>{index}</div>
                    <div>{item.name}</div>
                    <div>{item.symbol}</div>
                    <div>{item.market}</div>
                    <div>
                      {item.number}
                    </div>
                  </div>}
                  </>
                })}
              </div>
            </div>
            {/*  */}
            <div class="custom-table col-md-6">
              <div class="table-header sticky m-done">
                <div>Sr No</div>
                <div>Stock Name</div>
                <div>Symbol</div>
                <div>Stock Market</div>
                <div>Number</div>
              </div>
              <div class="table-content">
                {List && List.map((item ,index)=>{
                    index = index +1;
                    return <> {index > 50 && index <= 100 &&<div class="table-row" style={{ background: item.color }}>
                    <div>{index}</div>
                    <div>{item.name}</div>
                    <div>{item.symbol}</div>
                    <div>{item.market}</div>
                    <div>
                      {item.number}
                    </div>
                  </div>}
                  </>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MRKListScreen;
