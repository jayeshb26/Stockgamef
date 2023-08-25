import React, { useEffect, useState, useCallback } from "react";
import "./STKGrid.css";

const GRID_SIZE = 10;
const TOTAL_CELLS = GRID_SIZE * GRID_SIZE;
const ARROW_UP = "ArrowUp";
const ARROW_DOWN = "ArrowDown";
const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";
const TAB = "Tab";

const defaultArray = Array.from({ length: TOTAL_CELLS }, (_, index) => ({
  value: index * 2,
  className: null,
}));
const defaultArray1 = Array.from({ length: TOTAL_CELLS }, (_, index) => ({
  value: index * 2,
  className: null,
}));

const STKGrid = ({ reset,setReset}) => {
  const [activeCellIndex, setActiveCellIndex] = useState(-1);
  const [modifiedValues, setModifiedValues] = useState([...defaultArray]);
  useEffect(async () => {
    if (reset) {
      console.log('inner',reset)
      // debugger
      await setModifiedValues(defaultArray1);
      await setActiveCellIndex(-1); // Reset active cell
      setReset(false)
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
        i === index ? { ...item, value: updatedValue } : item
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
    const updatedValue = e.target.value;
    const updatedArray = [...modifiedValues];
    if (updatedValue !== "") {
      for (let i = 0; i < GRID_SIZE; i++) {
        const currentIndex = index + i * GRID_SIZE;
        updatedArray[currentIndex].value = updatedValue;
        updatedArray[currentIndex].className = "colmun_selected";
      }
      setModifiedValues(updatedArray);
    }
    else{
      for (let i = 0; i < GRID_SIZE; i++) {
        const currentIndex = index + i * GRID_SIZE;
        updatedArray[currentIndex].value = defaultArray1[i].value;
        updatedArray[currentIndex].className = null;
      }
      setModifiedValues(updatedArray);
    }
  };

  const changeRow = (e, index) => {
    const updatedValue = e.target.value;
    const updatedArray = [...modifiedValues];
    if (updatedValue !== "") {
      for (let i = 0; i < GRID_SIZE; i++) {
        const currentIndex = i + index * GRID_SIZE;
        updatedArray[currentIndex].value = updatedValue;
        updatedArray[currentIndex].className = "row_selected";
      }
      setModifiedValues(updatedArray);
    }else{
      for (let i = 0; i < GRID_SIZE; i++) {
        const currentIndex = i + index * GRID_SIZE;
        updatedArray[currentIndex].value = defaultArray1[i].value;
        updatedArray[currentIndex].className = null;
      }
      setModifiedValues(updatedArray);
    }
  };

  const handleCellClick = (index) => {
    setActiveCellIndex(index);
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
                  <span>Reliance</span>
                  {activeCellIndex === index ? (
                    <input
                      type="number"
                      value={modifiedValues[index].value}
                      onChange={(e) => handleInputChange(e, index)}
                      onBlur={handleInputBlur}
                      autoFocus
                    />
                  ) : (
                    <p>{item.value}</p>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default STKGrid;
