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
            <div class="custom-table col-md-6 b-right">
              <div class="table-header sticky">
                <a>Sr No</a>
                <a>Stock Name</a>
                <a>Symbol</a>
                <a>Stock Market</a>
                <a>Number</a>
              </div>
              <ul class="table-content">
                {List && List.map((item ,index)=>{
                    index = index +1;
                    return <li class="table-row" > {index <= 50 &&< >
                    <a style={{ background: item.color }}>{index}</a>
                    <a style={{ background: item.color }}>{item.name}</a>
                    <a style={{ background: item.color }}>{item.symbol}</a>
                    <a style={{ background: item.color }}>{item.market}</a>
                    <a style={{ background: item.color }}>
                      {item.number}
                    </a>
                  </>}
                  </li>
                })}
              </ul>
            </div>
            {/*  */}
            <div class="custom-table col-md-6">
              <div class="table-header sticky m-done">
                <a>Sr No</a>
                <a>Stock Name</a>
                <a>Symbol</a>
                <a>Stock Market</a>
                <a>Number</a>
              </div>
              <ul class="table-content">
                {List && List.map((item ,index)=>{
                    // index = 50
                    index = index + 1;
                    return<> {index >= 51 && index<=100 &&  <li class="table-row" >
                    <a style={{ background: item.color }}>{index}</a>
                    <a style={{ background: item.color }}>{item.name}</a>
                    <a style={{ background: item.color }}>{item.symbol}</a>
                    <a style={{ background: item.color }}>{item.market}</a>
                    <a style={{ background: item.color }}>
                      {item.number}
                    </a>
                  </li>
                    }
                  </>
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MRKListScreen;
