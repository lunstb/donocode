import React from "react";
import QRCode from "react-qr-code";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)=> ({ 
  qrcode: {
    position: "relative",
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    border: "3px dashed #000000",
    boxSizing: "border-box",
    width: "188px",
    height: "190px",
    fontSize: "8px",
    float: "left",
    marginRight: "-5px",
    marginTop: "-5px",
    padding: "5px",
  },
  compToPrint: {
    border: "#808080",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto auto auto",
    textAlign: "center",
    marginTop: "50px",
    marginBottom: "0px",
  },

  toPrintPage: {
    left: "9.08%",
    right: "65.88%",
    top: "6.06%",
    bottom: "89.07%",
    fontFamily: "Nunito",
    fontStyle: "normal",
    margin: "5%",
    backgroundColor: "white",

  },

  titleLogo: {
    color: "#D9AF00",
    position: "relative",
    fontWeight: "800",
    fontSize: "40px",
    lineHeight: "41px",
  },
  center: {
    textAlign: "center",
  },

  instructions: {
    fontSize: "18px",
  }
  }))

// create forwardRef to pass the ref down to the DOM node
// make this functional component async
export const ComponentToPrint = React.forwardRef((props, ref) => {

  const classes = useStyles()
  
  // declare a qrCodes array to hold the qr codes
  var qrCodes  = ['1234', '5455', '1343', '134324', '13434', '13243', '1342']; // todo: empty array during actual run

  // make a fetch request to the server to get the qr codes
  fetch("http://localhost:3000/generatecode") // replace with http://donocode.com/qrcode/generatecode
    .then(response => response.json())
    .then(data => {
      // loop through the qr codes and push them to the qrCodes array
      for (var i = 0; i < data["qrCodes"].length; i++) {
        qrCodes.push(data["qrCodes"][i]);
      }
    })
    .catch(error => console.log(error));
    
  
  return (
    <div className={classes.toPrintPage} >
      <div className={classes.instructions}>
        <h1 className={classes.titleLogo}>DonoCode</h1>
        <h2>Instructions</h2>
        <p>Cut out the DonoCodes along the dotted line</p>
        <p><b>Not linked to your account: </b>Distribute a DonoCode to any donor would like to keep
        track of their donation</p>
        <p><b>Linked to your account: </b>Tape the appropriate DonoCode on any item you would like to keep track of. When a recipient 
        recieves your donated item, they will be able to see your personalized message as well as the option to send a thank you message back. </p>
        <p>View the status of your donations in the “My Donations” dashboard. </p>
      </div>
      <div className={classes.compToPrint} ref={ref}>
        {qrCodes.map((item, index) => {
          return (
            <div  className={classes.qrcode}>
              <p><b>DonoCode</b></p>
              <article>Scan the QR below for a message from this item’s donor!</article>
              <p><b>item {index}</b></p>
              <QRCode 
              value={`https://donocode.com/generatecode/${item}`} 
              size={100}
              bgColor="#FFFFFF"
              fgColor="#000000"
              level="Q"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default useStyles;

