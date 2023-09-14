import React, { useEffect, useRef } from 'react';
import BWIPJS from 'bwip-js';

function BarcodeGenrate({ id }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // Generate the barcode
    BWIPJS.toCanvas(canvas, {
      bcid: 'code128', // Barcode type (Code 128 in this example)
      text: id,
      scale: 2, // Adjust the size as needed
    });
  }, [id]);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default BarcodeGenrate;
