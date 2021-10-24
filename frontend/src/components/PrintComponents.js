import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { makeStyles } from "@material-ui/core";
import firebase from './../firebase'


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

export const PrintContent = React.forwardRef((props, ref) => {

  const classes = useStyles()

  const componentRef = useRef(null)//componentRef.current!
  const handlePrint = useReactToPrint({
    // print the ref content
    
    content: () => componentRef.current,
  });
  console.log("linked to account", props.linkAccount,firebase.auth().currentUser.uid)
  return (
    <div >
      <div className={classes.printableContainer}>
      <ComponentToPrint qrCodes={props.qrCodes} ref={componentRef}/>
      </div>
      {/* <div> */}
      <br/>
      <div className={classes.buttonDiv}>
      <br/>
      <button className={classes.printButton} onClick={()=>{
        let donations = []
        for(let i = 0; i<props.qrCodes.length; ++i){
          donations[i] = {
            "qrId": props.qrCodes[i],
            "fireId": props.linkAccount ? firebase.auth().currentUser.uid : "",
            "phone": "",
            "message": ""
          }
        }
        fetch("http://localhost:3001/api/qr/register", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "qrCodes": donations
          })
        });
        handlePrint()
      }}>Print this out!</button>
      </div>
      
      {/* </div> */}
    </div>
  );
});