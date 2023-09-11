import React from 'react';
import escpos from 'escpos';

const device = new escpos.USB();
const printer = new escpos.Printer(device);

const PrintPos = () => {
  const data = [
    { heading: 'betclose', details: 1694460843.089 },
    { heading: 'creditPoint', details: 4980 },
    { heading: 'date', details: '2023-09-11 07:33:08' },
  ];

  const printData = () => {
    try {
      device.open(() => {
        printer
          .font('A')
          .align('lt') // Left align the text
          .style('bu')
          .size(1, 1);

        data.forEach((item) => {
          printer.text(`${item.heading} : ${item.details}`);
        });

        printer.cut().close();
      });
    } catch (error) {
      console.error('Error printing:', error);
    }
  };

  return (
    <div>
      <button onClick={printData}>Print Data</button>
    </div>
  );
}

export default PrintPos;
