import React, { useEffect } from 'react';
const { ThermalPrinter, CharacterSet, BreakLine } = require('node-thermal-printer');

const PrintPos = () => {
  const handlePrint = async () => {
    const printer = new ThermalPrinter({
      type: ThermalPrinter?.PrinterTypes?.STAR, // Printer type: 'star' or 'epson'
      interface: 'localhost/printer', // localhost/printerPrinter interface (replace with your printer's IP)
      characterSet: CharacterSet.SLOVENIA, // Printer character set - default: SLOVENIA
      removeSpecialCharacters: false, // Removes special characters - default: false
      lineCharacter: "=", // Set character for lines - default: "-"
      breakLine: BreakLine.WORD, // Break line after WORD or CHARACTERS. Disabled with NONE - default: WORD
      options: {
        timeout: 5000, // Connection timeout (ms) [applicable only for network printers] - default: 3000
      },
    });
    console.log('printer',printer)
    try {
      // Set printer properties and content
      printer.alignCenter();
      printer.print('Hello, Thermal Printer!');
      printer.cut();
      await printer.execute();

      console.log('Print successful');
    } catch (error) {
      console.error('Printing error:', error);
    }
  };

  useEffect(() => {
    handlePrint()
  }, []);

  return (
    <>
      
    </>
  );
};

export default PrintPos;
