import React, { useRef, useEffect } from 'react';
import JsBarcode from 'jsbarcode';

const BarcodeDisplay = ({ value }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      JsBarcode(svgRef.current, value, {
        format: 'CODE128', // Barcode format
        width: 2, // Width of the bars
        height: 40, // Height of the bars (adjusted from 100 to 40)
        displayValue: true, // Show the value text below the barcode
        fontSize: 20, // Font size of the value text
      });
    }
  }, [value]);

  return (
    <div>
      <h1>Barcode Display</h1>
      <svg ref={svgRef} />
    </div>
  );
};

export default BarcodeDisplay;
