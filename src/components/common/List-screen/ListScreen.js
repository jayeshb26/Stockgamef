// import React, { useState, useEffect } from 'react';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import './ListScreen.css'; // Import your CSS file with transition styles
// import { listArray } from '../../../Utilities';

// function ListScreen() {
//   const [stocks, setStocks] = useState([]);
//   const stockList = listArray;

//   // Function to generate random stock data
//   const generateRandomStockData = () => {
//     // const newStocks = [];

//     // for (const stock of stockList) {
//     //   const price = (Math.random() * 1000).toFixed(2);
//     //   const change = (Math.round(Math.random()  * 10)).toFixed(2);
//     //   const colorClass = getColorClass(change);
//     //   newStocks.push({ ...stock, price, change, colorClass });
//     // }

//     // return newStocks;
//     const newStocks = [];
//     const colors = shuffleArray(['red', 'blue', 'green']); // Shuffle the colors array
  
//     for (const stock of stockList) {
//       const price = (Math.random() * 1000).toFixed(2);
//       const change = (Math.round(Math.random() * 10)).toFixed(2);
//       const colorClass = colors[newStocks.length % colors.length]; // Assign colors randomly
//       newStocks.push({ ...stock, price, change, colorClass });
//     }
  
//     return newStocks;
//   //   const newStocks = [...stockList];

//   // // Assign random background colors and arrow colors to stock items
//   // newStocks.forEach((stock) => {
//   //   const randomColor = ['red', 'blue', 'green'][Math.floor(Math.random() * 0.6)];
//   //   stock.colorClass = randomColor;
//   //   stock.arrowColor = randomColor; // Assign the same color to the arrow
//   //   const price = (Math.random() * 1000).toFixed(2);
//   //   const change = (Math.random() * 20 - 10).toFixed(2);
//   //   stock.price = price;
//   //   stock.change = change;
//   // });

//   // // Shuffle the array to randomize positions
//   // for (let i = newStocks.length - 1; i > 0; i--) {
//   //   const j = Math.floor(Math.random() * (i + 1));
//   //   [newStocks[i], newStocks[j]] = [newStocks[j], newStocks[i]];
//   // }

//   // return newStocks;
//   };

//   // Function to determine the color class of a stock item
//   // const getColorClass = (change) => {
//   //   if (change > 0) {
//   //     return 'green';
//   //   } else if (change < 0) {
//   //     return 'red';
//   //   } else {
//   //     return 'blue';
//   //   }
//   // };
//   const shuffleArray = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   };
//   const getRandomColor = () => {
//     const colors = ['red', 'blue', 'green'];
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     return colors[randomIndex];
//   };

//   // Use useEffect to update stock data every minute
//   useEffect(() => {
//     // Function to update stock data
//     const updateStockData = () => {
//       const newStockData = generateRandomStockData(stockList);
//       setStocks(newStockData);
//     };

//     // Initial update
//     updateStockData();

//     // Set up a timer to update stock data every minute
//     const interval = setInterval(() => {
//       updateStockData();
//     }, 600);

//     // Clean up the interval when the component unmounts
//     return () => clearInterval(interval);
//   }, [stockList]);

//   // Sort stocks based on their color class
//   const sortedStocks = [...stocks].sort((a, b) => {
//     if (a.colorClass < b.colorClass) return -1;
//     if (a.colorClass > b.colorClass) return 1;
//     return 0;
//   });

//   return (
//     <div>
//       <h1>Stock Data</h1>
//       <ul className="stock-list">
//         <TransitionGroup>
//           {sortedStocks.map((stock, index) => {
//             const color = stock.colorClass;
//             const icon = stock.change > 0 ? (
//               <i className="fa-solid fa-arrow-up" style={{ color: '#34cd32' }}></i>
//             ) : stock.change < 0 ? (
//               <i className="fa-solid fa-arrow-down" style={{ color: '#d84b4b' }}></i>
//             ) : (
//               <i className="fa-solid fa-arrow-right" style={{ color: '#5386df' }}></i>
//             );
//             return (
//               <CSSTransition
//                 key={index}
//                 classNames="stock-item"
//                 timeout={300}
//               >
//                 <li className={`stock-item ${color}`}>
//                   {stock.symbol}: {stock.price} {icon}
//                 </li>
//               </CSSTransition>
//             );
//           })}
//         </TransitionGroup>
//       </ul>
//     </div>
//   );
// }

// export default ListScreen;
import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './ListScreen.css'; // Import your CSS file with transition styles
import { listArray } from '../../../Utilities';

function ListScreen() {
  const [stocks, setStocks] = useState([]);
  const stockList = listArray;

  // Function to generate random stock data
  const generateRandomStockData = () => {
    const newStocks = [];
  const colors = ['red', 'blue', 'green']; // Define the colors array

  for (const stock of stockList) {
    const price = (Math.random() * 1000).toFixed(2);
    const change = (Math.round(Math.random() * 10) * 10).toFixed(2); // Random change between -5 and 5
    const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Choose a random color
    newStocks.push({ ...stock, price, change, colorClass: randomColor });
  }

  return newStocks;
  };
  // Function to get a random color
  const getRandomColor = (colors) => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors.splice(randomIndex, 3)[0];
  };

  // Use useEffect to update stock data every minute
  useEffect(() => {
    // Function to update stock data
    const updateStockData = () => {
      const newStockData = generateRandomStockData(stockList);
      setStocks(newStockData);
    };

    // Initial update
    updateStockData();

    // Set up a timer to update stock data every minute
    const interval = setInterval(() => {
      updateStockData();
    }, 600);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [stockList]);

  // Sort stocks based on their color class
  const sortedStocks = [...stocks].sort((a, b) => {
    if (a.colorClass < b.colorClass) return -1;
    if (a.colorClass > b.colorClass) return 1;
    return 0;
  });

  return (
    <div>
      <h1>Stock Lists</h1>
      <ul className="stock-list">
        <TransitionGroup>
          {sortedStocks.map((stock, index) => {
            const color = stock.colorClass;
            const icon = stock.change > 0 ? (
              <i className="fa-solid fa-arrow-up" style={{ color: '#34cd32' }}></i>
            ) : stock.change < 0 ? (
              <i className="fa-solid fa-arrow-down" style={{ color: '#d84b4b' }}></i>
            ) : (
              <i className="fa-solid fa-arrow-right" style={{ color: '#5386df' }}></i>
            );
            return (
              <CSSTransition
                key={index}
                classNames="stock-item"
                timeout={300}
              >
                <li className={`stock-item ${color}`}>
                  {stock.symbol}: {stock.price} {icon}
                </li>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </ul>
    </div>
  );
}

export default ListScreen;

