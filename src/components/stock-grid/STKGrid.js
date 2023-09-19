import React, { useEffect, useState, useCallback } from "react";
import "./STKGrid.css";
import { useSocket } from "../Context/SocketContext";
import Footer from "../common/Footer/Footer";
// import ListScreen from "../common/List-screen/ListScreen";
import MRKListScreen from "../common/listScreen/ListScreen";
import PrintPos from "../user/Print-pos/PrintPos";
// import PrintPos from "../user/Print-pos/PrintPos";

const GRID_SIZE = 10;
const TOTAL_CELLS = GRID_SIZE * GRID_SIZE;
const ARROW_UP = "ArrowUp";
const ARROW_DOWN = "ArrowDown";
const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";
const TAB = "Tab";
// const NUMBER_REGX = /^\d{0,8}$/;

const STKGrid = () => {
  const { emitEvent, mainData, statues,betClose } = useSocket();
  const [activeCellIndex, setActiveCellIndex] = useState(-1);
  const [gridArray, setGridArray] = useState([]);
  // const [modifiedValues, setModifiedValues] = useState([...gridArray]);
  const [modifiedValues, setModifiedValues] = useState([]);
  const [reset, setReset] = useState(false);
  const [inputValue, setInputValue] = useState(null);
  const [status, setStatus] = useState(null);
  const [listScreen, setListScreen] = useState(false);
  const [playerID,setPlayerID] = useState();
  const [printData,setPrintData] = useState({
    gameName: "stockskill",
    playerId: null,
    position: null,
    betPoint: null,
  })
  const [isProcessing,setIsProcessing] = useState(false);

  var BID_ARRAY = [];
  var setPlace = null
  const placeBid = () => {
    var total;
    modifiedValues.filter((bid) => {
      if (bid.price) {
        total = +bid.price * 10;
        BID_ARRAY = [...BID_ARRAY, bid];
        emitEvent("placeBet", {
          gameName: "stockskill",
          playerId: playerID,
          position: BID_ARRAY,
          betPoint: total,
        });
        // setPlace = {
        //   gameName: "stockskill",
        //   playerId: playerID,
        //   position: BID_ARRAY,
        //   betPoint: total,
        // }
        setPrintData({
          gameName: "stockskill",
          playerId: playerID,
          position: BID_ARRAY,
          betPoint: total,
        })
        setIsProcessing(true);
        localStorage.setItem('lastOrder',JSON.stringify(printData))
        // setListScreen(true);
        // <PrintPos data={setPlace}/>
      } else {
        return false;
      }
    });

    setModifiedValues(gridArray.map((item) => ({ ...item })));
  };

  useEffect(() => {
    if (mainData?.data?.stock) {
      setGridArray(mainData?.data?.stock);
      setModifiedValues(mainData?.data.stock.map((item) => ({ ...item })));
      setPlayerID(mainData?.data?.user._id)
    }
    if (statues) {
      setStatus(statues);
    }
    setListScreen(betClose)
  }, [mainData, statues,betClose]);

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
  }, [reset, listScreen]);

  const handleInputBlur = useCallback(() => {
    if (activeCellIndex !== -1) {
      setActiveCellIndex(-1);
    }
  }, [activeCellIndex]);

  const handleInputChange = useCallback(
    (e, index) => {
      // if(startGame !== 1) return false;
      const updatedValue = e.target.value;
      const updatedModifiedValues = modifiedValues.map((item, i) =>
        i === index
          ? { ...item, price: updatedValue, className: "row_selected" }
          : item
      );
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
    // if(startGame !== 1) return false;
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
        updatedArray[currentIndex].price = 0;
        updatedArray[currentIndex].className = null;
      }
      setModifiedValues(updatedArray);
    }
  };

  const changeRow = (e, index) => {
    // if(startGame !== 1) return false;
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
        updatedArray[currentIndex].price = 0;
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
      {!listScreen ? (
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
                  disabled={status !== 1}
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
                  disabled={status !== 1}
                />
              ))}
            </div>
            <div className="grid_wrapper">
              {modifiedValues.length ? (
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
                            disabled={status !== 1}
                          />
                        ) : (
                          <p> {item.price ? item.price : item.number}</p>
                          // <p>{item.number}</p>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="_no_grid">
                  <h3>No Grid Found.</h3>
                </div>
              )}
            </div>
          </div>
          {isProcessing && <PrintPos data={setPlace}/>}
        </>
      ) : (
        <MRKListScreen />
      )}
      <Footer
        placeBid={placeBid}
        setReset={setReset}
        modifiedValues={modifiedValues}
        setListScreen={setListScreen}
      />
    </>
  );
};

export default STKGrid;
