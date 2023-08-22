import React, { useEffect, useState, useCallback } from "react";
import "./STKGrid.css";

const GRID_SIZE = 10;
const TOTAL_CELLS = GRID_SIZE * GRID_SIZE;
const ARROW_UP = "ArrowUp";
const ARROW_DOWN = "ArrowDown";
const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";
const TAB = "Tab";
const Colarray = Array.from({ length: 10 });
const Rowarray = Array.from({ length: 10 });
const array = [];
for (let index = 0; index < 100; index++) {
  array.push({ value: index * 2, className: null });
}
const STKGrid = () => {
  const [currentColor, setCurrentColor] = useState("white");
  const [showModal, setShowModal] = useState(false);
  const [addPrice, setAddStockPrice] = useState("");
  const [activeCellIndex, setActiveCellIndex] = useState(-1);
  const [modifiedValues, setModifiedValues] = useState(array);
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor(getRandomColor());
    }, 1000);

    return () => clearInterval(interval);
  }, [addPrice]);

  useEffect(() => {
    setMyData(
      array
    );
  }, [array]);

  const handleCellClick = (index) => {
    setActiveCellIndex(index);
  };

  const handleInputBlur = useCallback(() => {
    if (activeCellIndex !== -1) {
      updateModifiedValue();
    }
  }, [activeCellIndex]);

  const updateModifiedValue = () => {
    console.log('Mydata',myData)
    const newModifiedValues = [...array];
    newModifiedValues[activeCellIndex] = myData[activeCellIndex].value;
    setModifiedValues(newModifiedValues);
  };

//   const handleInputChange = useCallback((e, index) => {
//     const newMyData = [...myData];
//     newMyData[index].value = e.target.value;
//     setMyData(newMyData);
//   }, [myData]);
const handleInputChange = useCallback((e, index) => {
    const newMyData = [...myData];
    const data = { ...newMyData[index], value: e.target.value };
    newMyData[index] = { ...newMyData[index], value: Number(data.value) };
    // newMyData[index] = Number(data.value)
    setMyData(newMyData);

    const updatedArray = [...array];
    const inputValue = e.target.value;
    updatedArray[index].value = +inputValue;
    setMyData(updatedArray); // Add this line to update the main array
    console.log('MYARRAY',myData)
  }, [array, myData]);

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

  const changeColumn = (e, index) => {
    for (let i = 0; i < 10; i++) {
      var currentIndex = index + 1 * i * 10;
      array[currentIndex].value = e.target.value;
      array[currentIndex].className = "colmun_selected";
    }
  };
  const changeRow = (e, index) => {
    for (let i = 0; i < 10; i++) {
      var currentIndex = i + index * 10;
      array[currentIndex].value = e.target.value;
      array[currentIndex].className = "row_selected";
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const getRandomColor = useCallback(() => {
    const colors = ["#E60000", "#32cd32", "#0069cf", "#fd5602"];
    return colors[Math.floor(Math.random() * colors.length)];
  }, []);

  return (
    <>
      <div className="d-flex">
        <div className="top_black_block"></div>
        <div className="TopSTKGrid">
          {Colarray.map((item, index) => {
            return (
              <input
                type="number"
                placeholder={index}
                key={index}
                onChange={(e) => changeColumn(e, index)}
                name=""
                id=""
              />
            );
          })}
        </div>
      </div>
      <div className="d-flex">
        <div className="LeftSTKGrid">
          {Rowarray.map((item, index) => {
            return (
              <input
                type="number"
                placeholder={index}
                onChange={(e) => changeRow(e, index)}
                key={index}
                name=""
                id=""
              />
            );
          })}
        </div>
        <div className="grid_wrapper">
          <ul>
            {array.map((item, index) => (
              <li
                key={index}
                className={`stocks ${item.className}`}
                onClick={() => handleCellClick(index)}
                // style={{ color: getRandomColor(index) }}
              >
                <a href="javascript:void(0);">
                  <span>Reliance</span>
                  {activeCellIndex === index ? (
                    <input
                      type="number"
                      value={myData[index].value.value}
                      onChange={(e) => handleInputChange(e, index)}
                      onBlur={() => handleInputBlur(index)}
                      autoFocus
                    />
                  ) : (
                    <p>{item.value}</p>
                  )}
                  {/* <p>{item.value}</p> */}
                  {/* <input type="text" value={item.value} /> */}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* <CommonModal
          show={showModal}
          onHide={handleCloseModal}
          title="Bid Price"
          body={
            <Inputs addPrice={addPrice} setAddStockprice={setAddStockprice} />
          }
          footer={<Footer close={handleCloseModal} />}
        /> */}
      </div>
    </>
  );
};

export default STKGrid;
