import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
// import React, { useEffect } from 'react';
// const { ThermalPrinter, CharacterSet, BreakLine } = require('node-thermal-printer');

// const PrintPos = () => {
//   const handlePrint = async () => {
//     const printer = new ThermalPrinter({
//       type: ThermalPrinter?.PrinterTypes?.STAR, // Printer type: 'star' or 'epson'
//       interface: 'localhost/printer', // localhost/printerPrinter interface (replace with your printer's IP)
//       characterSet: CharacterSet.SLOVENIA, // Printer character set - default: SLOVENIA
//       removeSpecialCharacters: false, // Removes special characters - default: false
//       lineCharacter: "=", // Set character for lines - default: "-"
//       breakLine: BreakLine.WORD, // Break line after WORD or CHARACTERS. Disabled with NONE - default: WORD
//       options: {
//         timeout: 5000, // Connection timeout (ms) [applicable only for network printers] - default: 3000
//       },
//     });
//     console.log('printer',printer)
//     try {
//       // Set printer properties and content
//       printer.alignCenter();
//       printer.print('Hello, Thermal Printer!');
//       printer.cut();
//       await printer.execute();

//       console.log('Print successful');
//     } catch (error) {
//       console.error('Printing error:', error);
//     }
//   };

//   useEffect(() => {
//     handlePrint()
//   }, []);

//   return (
//     <>
      
//     </>
//   );
// };

// export default PrintPos;

// import React from 'react';
// import electronPosPrinter from 'electron-pos-printer';

// const PrintPos = () => {
//   const handlePrint = () => {
//     const printer = electronPosPrinter.init();

//     const options = {
//       width: 204,
//       height: 842,
//       margins: {
//         top: 10,
//         bottom: 10,
//         left: 10,
//         right: 10,
//       },
//       silent: true,
//     };

//     const data = [
//       {
//         type: 'text',
//         value: 'Hello, World!',
//         style: 'text-align:center;font-weight:bold;',
//       },
//       {
//         type: 'text',
//         value: 'This is a test receipt.',
//         style: 'text-align:center;',
//       },
//       // Add more text or items as needed
//     ];

//     printer.print(data, options).then(
//       () => {
//         console.log('Printing complete');
//       },
//       (error) => {
//         console.error('Printing error:', error);
//       }
//     );

//     // Example of using ipcRenderer to send a message to the main process
//     // ipcRenderer.send('print-complete', 'Receipt printed successfully');
//   };

//   return (
//     <div>
//       <h2>Print Component</h2>
//       <button onClick={handlePrint}>Print Receipt</button>
//     </div>
//   );
// };

// export default PrintPos;



// Create a component for the content you want to print
const ReceiptContent = ({ data }) => {
  return (
    <div>
      <h1>Receipt</h1>
      <p>Date: {new Date().toLocaleDateString()}</p>
      <p>Items: {data.items}</p>
      <p>Total: {data.total}</p>
    </div>
  );
};

const PrintPos = () => {
  const receiptRef = useRef();
  const data = {
    items: "Example Item 1, Example Item 2",
    total: "$50.00",
  };

  const handlePrint = useReactToPrint({
    content: () => receiptRef.current,
  });

  return (
    <div>
      <button onClick={handlePrint}>Print</button>
      <div style={{ display: 'none' }}>
        <ReceiptContent ref={receiptRef} data={data} />
      </div>
    </div>
  );
};

export default PrintPos;

