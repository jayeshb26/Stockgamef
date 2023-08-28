import React, { useEffect, useState, useCallback } from "react";
import "./STKGrid.css";
import { useSocket } from "../Context/SocketContext";
import Footer from "../common/Footer/Footer";
import { toast } from "react-toastify";
// import ReactLoading from "react-loading";

const GRID_SIZE = 10;
const TOTAL_CELLS = GRID_SIZE * GRID_SIZE;
const ARROW_UP = "ArrowUp";
const ARROW_DOWN = "ArrowDown";
const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";
const TAB = "Tab";
const NUMBER_REGX = /^\d{0,8}$/;

const STKGrid = () => {
  const { emitEvent, mainData } = useSocket();
  const [activeCellIndex, setActiveCellIndex] = useState(-1);
  const [gridArray, setGridArray] = useState([]);
  // const [modifiedValues, setModifiedValues] = useState([...gridArray]);
  const [modifiedValues, setModifiedValues] = useState([]);
  const [reset, setReset] = useState(false);
  const [inputValue, setInputValue] = useState(null);
  var BID_ARRAY = [];

  // console.log('mainData',mainData)
  const placeBid = () => {
    var updtedBid;
    var bidObj = {};
    var total
    modifiedValues.filter((bid) => {
      if (bid.price) {
        total = +bid.price*10
        BID_ARRAY = [...BID_ARRAY, bid];
      }
    });
    // bidObj = {
    //   gameName:"stockskill",
    //   playerId:"622596708f8ea7140b372572",
    //   position:BID_ARRAY,
    //   betPoint:total
    // }
    // console.log("works", bidObj);
    emitEvent("placeBet", {
      gameName:"stockskill",
      playerId:"622596708f8ea7140b372572",
      position:BID_ARRAY,
      betPoint:total
    });
    // if(bid){
    //   toast.info(bid.data.result)
    // }
  };

  useEffect(() => {
    if (mainData?.data?.stock) {
      setGridArray(mainData?.data?.stock);
      setModifiedValues(mainData?.data.stock.map((item) => ({ ...item })));
    }
    // console.log('gridArray',gridArray)
  }, [mainData]);
  useEffect(() => {
    if (reset) {
      setModifiedValues(gridArray.map((item) => ({ ...item }))); // Reset to defaultArray
      setActiveCellIndex(-1); // Reset active cell

      // Delay resetting gridArray to the next render cycle
      setTimeout(() => {
        setGridArray(gridArray.map((item) => ({ ...item }))); // Reset gridArray
        setReset(false);
      }, 0);
    }
  }, [reset]);
  const handleInputBlur = useCallback(() => {
    if (activeCellIndex !== -1) {
      setActiveCellIndex(-1);
    }
  }, [activeCellIndex]);

  const handleInputChange = useCallback(
    (e, index) => {
      const updatedValue = e.target.value;
      const updatedModifiedValues = modifiedValues.map((item, i) =>
        i === index
          ? { ...item, price: updatedValue, className: "row_selected" }
          : item
      );
      console.log("updatedModifiedValues", updatedModifiedValues);
      setModifiedValues(updatedModifiedValues);
    },
    [modifiedValues]
  );

  const handleKeyDown = useCallback(
    (e) => {
      const handleArrowKey = (offset) => {
        e.preventDefault();
        const newIndex = activeCellIndex + offset;
        if (newIndex >= 0 && newIndex < TOTAL_CELLS) {
          handleInputBlur();
          setActiveCellIndex(newIndex);
        }
      };

      switch (e.key) {
        case ARROW_UP:
          handleArrowKey(-GRID_SIZE);
          break;
        case ARROW_DOWN:
          handleArrowKey(GRID_SIZE);
          break;
        case ARROW_LEFT:
          handleArrowKey(-1);
          break;
        case ARROW_RIGHT:
          handleArrowKey(1);
          break;
        case TAB:
          handleArrowKey(e.shiftKey ? -1 : 1);
          break;
        default:
          break;
      }
    },
    [activeCellIndex, handleInputBlur]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const changeColumn = (e, index) => {
    const updatedValue = e.target.value;
    const updatedArray = [...modifiedValues];
    if (updatedValue !== "") {
      for (let i = 0; i < GRID_SIZE; i++) {
        const currentIndex = index + i * GRID_SIZE;
        updatedArray[currentIndex].price = updatedValue;
        updatedArray[currentIndex].className = "colmun_selected";
      }
      setModifiedValues(updatedArray);
    } else {
      for (let i = 0; i < GRID_SIZE; i++) {
        const currentIndex = index + i * GRID_SIZE;
        updatedArray[currentIndex].price = null;
        updatedArray[currentIndex].className = null;
      }
      setModifiedValues(updatedArray);
    }
  };

  const changeRow = (e, index) => {
    const updatedValue = e.target.value;
    setInputValue(updatedValue);
    const updatedArray = [...modifiedValues];
    if (updatedValue !== "") {
      for (let i = 0; i < GRID_SIZE; i++) {
        const currentIndex = i + index * GRID_SIZE;
        updatedArray[currentIndex].price = updatedValue;
        updatedArray[currentIndex].className = "row_selected";
      }
      setModifiedValues(updatedArray);
    } else {
      for (let i = 0; i < GRID_SIZE; i++) {
        const currentIndex = i + index * GRID_SIZE;
        updatedArray[currentIndex].price = null;
        updatedArray[currentIndex].className = null;
      }
      setModifiedValues(updatedArray);
    }
  };

  const handleCellClick = (index) => {
    setActiveCellIndex(index);
  };
  const gridKeydown = (e) => {
    console.log("inputValue <= 0 ", inputValue < 0);
    // if ((inputValue?.length >= 8 || inputValue.startsWith("-")) && e.key !== "Backspace") {
    //   e.preventDefault();
    // }
  };

  return (
    <>
      <div className="d-flex">
        <div className="top_black_block"></div>
        <div className="TopSTKGrid">
          {Array.from({ length: GRID_SIZE }).map((_, index) => (
            <input
              type="number"
              placeholder={index}
              key={index}
              onChange={(e) => changeColumn(e, index)}
              name=""
              id=""
            />
          ))}
        </div>
      </div>
      <div className="d-flex">
        <div className="LeftSTKGrid">
          {Array.from({ length: GRID_SIZE }).map((_, index) => (
            <input
              type="number"
              placeholder={index}
              onChange={(e) => changeRow(e, index)}
              onKeyDown={gridKeydown}
              key={index}
              name=""
              id=""
            />
          ))}
        </div>
        <div className="grid_wrapper">
          <ul>
            {modifiedValues.map((item, index) => (
                <li
                  key={index}
                  className={`stocks ${item.className}`}
                  onClick={() => handleCellClick(index)}
                >
                  <a href="javascript:void(0);">
                    <span>{item.name}</span>
                    {activeCellIndex === index ? (
                      <input
                        type="number"
                        // value={modifiedValues[index].number}
                        onChange={(e) => handleInputChange(e, index)}
                        onBlur={handleInputBlur}
                        autoFocus
                      />
                    ) : (
                      <p> {item.price ? item.price : item.number}</p>
                      // <p>{item.number}</p>
                    )}
                  </a>
                </li>
              ))}
              </ul>
            
        </div>
      </div>
      <Footer placeBid={placeBid} setReset={setReset} />
    </>
  );
};

export default STKGrid;
// ) : (
            //   <div
            //     className=""
            //     style={{
            //       width: "100%",
            //       display: "flex",
            //       height: "100vh",
            //       justifyContent: "center",
            //       alignItems:'center'
            //     }}
            //   >
            //     <ReactLoading
            //       className="page-loader"
            //       type="spin"
            //       color="#fff"
            //       height={50}
            //       width={50}
            //     />
            //   </div>
            // )}
          // </ul>