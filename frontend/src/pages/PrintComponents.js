import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import { ComponentToPrint } from './ComponentToPrint';


export const PrintContent = () => {
  const componentRef = useRef(null)//componentRef.current!
  const handlePrint = useReactToPrint({
    // print the ref content
    
    content: () => componentRef.current,
  });
  
  return (
    <div>
      <ComponentToPrint ref={componentRef}/>
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};