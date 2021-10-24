import React from "react";
import QRCode from "react-qr-code";


// create forwardRef to pass the ref down to the DOM node
// make this functional component async
export const ComponentToPrint = React.forwardRef((props, ref) => {
  
  // declare a qrCodes array to hold the qr codes
  var qrCodes  = []; // todo: empty array during actual run

  // make a fetch request to the server to get the qr codes
  fetch("http://localhost:3000/qrCodes") // replace with http://donocode.com/qrcode/generatecode
    .then(response => response.json())
    .then(data => {
      // loop through the qr codes and push them to the qrCodes array
      for (var i = 0; i < data["qrCodes"].length; i++) {
        qrCodes.push(data["qrCodes"][i]);
      }
    })
    .catch(error => console.log(error));
    
  
  return (
    <div style={{display: "grid", gridTemplateColumns: "auto auto auto", padding: "10px"}} ref={ref} className="component-to-print">
      {qrCodes.map((item, index) => {
        return (
          <div  style={{padding: "5px", borderRadius: "2px", border: "#808080"}}>
            <QRCode 
            value={`https://donocode.com//${item}`} 
            size={100}
            bgColor="#FFFFFF"
            fgColor="#000000"
            level="Q"
            />
            <h1>Instructions!</h1>
            <p>1. -----------</p>
            <p>2. -----------</p>
            <p>3. -----------</p>
            <p>4. -----------</p>
          </div>
        );
      })}
    </div>
  );
});

