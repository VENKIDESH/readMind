import React from "react";

function card(props) {
  var rand = Math.floor(Math.random() * 16);
  var symbol = [
    "α",
    "β",
    "δ",
    "ε",
    "ζ",
    "η",
    "θ",
    "λ",
    "μ",
    "ξ",
    "π",
    "ρ",
    "σ",
    "φ",
    "ψ",
    "ω",
  ];
  var sum = 0;
  var value = props.number;
  while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
  }
  console.log(props.ansRand);
  return (
    <div style={fontStyle} >
      {props.number} -  <b>{sum == 9 ? props.ansRand : symbol[rand]}</b>
    </div>
  );
}

const fontStyle = {
  width:'80%',
  height:'7vh',
  background: 'linear-gradient(90deg, rgba(0, 65, 106, 0.089) 0%, rgba(228, 229, 230, 0.089) 100%)',
  borderRadius: '20px',
  boxShadow: 'inset 6.66667px -6.66667px 6.66667px rgba(87, 112, 128, 0.089), inset -6.66667px 6.66667px 6.66667px rgba(255, 255, 255, 0.089)',
  backdropFilter: 'blur(14.9333px)',
  display:'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export default card;
