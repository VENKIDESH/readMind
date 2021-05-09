import React from "react";
import Card from "./Card";

function Number(props) {
  var numb = [];

  for (let i = 1; i < 101; i++) {
    numb.push(i);
  }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "auto auto auto auto auto auto auto auto auto auto auto auto",
        // width:'60%',
        height:'650px',
        alignContent:'space-evenly'  
      }}
    >
      {numb.map((numb) => {
        return <Card number={numb} ansRand={props.answer} />;
      })}
    </div>
  );
}

export default Number;
