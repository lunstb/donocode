import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { makeStyles } from "@material-ui/core";

import { ComponentToPrint } from './ComponentToPrint';
// import useStyles from './PrintComponents.styles';

const useStyles = makeStyles((theme)=> ({ 
 
  printButton: {
    backgroundColor: "#D9AF00",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px",
    fontSize: "20px",
    cursor: "pointer",
    zIndex: "2",
    bottom: "50px",
    marginLeft: "5%",
    marginBottom: "20px",
    
    // left:"9.08%"
  }

}));

export const PrintContent = () => {

  const classes = useStyles()

  const componentRef = useRef(null)//componentRef.current!
  const handlePrint = useReactToPrint({
    // print the ref content
    
    content: () => componentRef.current,
  });
  
  return (
    <div >
      <div className={classes.printableContainer}>
      <ComponentToPrint ref={componentRef}/>
      </div>
      {/* <div> */}
      <br/>
      <div className={classes.buttonDiv}>
      <br/>
      <button className={classes.printButton} onClick={handlePrint}>Print this out!</button>
      </div>
      
      {/* </div> */}
    </div>
  );
};