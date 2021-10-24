import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { isClassExpression } from 'typescript';
import { makeStyles } from "@material-ui/core";

import { ComponentToPrint } from './ComponentToPrint';
// import useStyles from './PrintComponents.styles';

const useStyles = makeStyles((theme)=> ({ 
  printButton: {
    position: 'relative',
    backgroundColor: "#D9AF00",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px",
    fontSize: "20px",
    cursor: "pointer",
    zIndex: "2",
    marginLeft: "20px",
    marginBottom: "20px",
  },

}));

export const PrintContent = () => {

  const classes = useStyles()

  const componentRef = useRef(null)//componentRef.current!
  const handlePrint = useReactToPrint({
    // print the ref content
    
    content: () => componentRef.current,
  });
  
  return (
    <div style={{display: "block"}}>
      <div>
      <ComponentToPrint ref={componentRef}/>
      </div>
      <div>
      
      <button className={classes.printButton} onClick={handlePrint}>Print this out!</button>
      </div>
    </div>
  );
};