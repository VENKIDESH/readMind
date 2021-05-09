import React from "react";

function Instructions(props) {
  return (
    <div style={outer}>
      <div style={inner}>
        <div
          style={{ fontSize: "25px", fontWeight: "bold", marginTop: "10px" }}
        >
          Game Instructions
        </div>
        <div style={{ marginTop: "20px", fontSize: "20px", color: "#303030" }}>
          1. Choose any two digit number between 1 and 100.
          <br /> <i>Example: 25</i>
          <br />
          <br />
          2. Add the digits of that number.
          <br />
          <i>Example:2+5=7</i>
          <br />
          <br />
          3. Subtract the sum from the number chosen.
          <br />
          <i>Example:25-7=18</i>
          <br />
          <br />
          4.Look for symbol near the previous result(ie 18)
          <br />
          <br />
          5.Visualize that symbol in your mind.
        </div>
        <div
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "100%",
            background:
              "linear-gradient(90deg, rgba(229, 93, 135, 0.1) 0%, rgba(95, 195, 228, 0.1) 100%)",
            marginTop: "20px",
            marginLeft: "200px",
            alignContent: "center",
            padding: "1px",
            boxShadow:
              "inset 2.46667px -2.46667px 2.46667px rgba(136, 121, 152, 0.4), inset -2.46667px 2.46667px 2.46667px rgba(255, 255, 255, 0.4)",
          }}
        >
          <div onClick={props.ansPageHandler()}
            style={{
              marginTop: "45px",
              fontSize: "25px",
              fontFamily: "sans-serif",
              background: "-webkit-linear-gradient(90deg, #E74C3C, #000000)",
              webkitBackgroundClip: "text",
              cursor: 'pointer',
              webkitTextFillColor: "transparent",
            }}
          >
            <b>CLICK</b>
            <br />
            HERE
          </div>
        </div>
      </div>
    </div>
  );
}

const outer = {
  background: "#eee",
  width: "544px",
  height: "585px",
  marginTop: "25px",
  padding: "1px",
};
const inner = {
  marginTop: "10px",
  marginLeft: "10px",
  width: "524px",
  height: "565px",
  padding: "1px",
  background: "linear-gradient(90deg, #9796F0 10%, #FBC7D4 100%)",
};

export default Instructions;
