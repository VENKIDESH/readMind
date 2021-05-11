import React, { useState } from "react";
import Number from "./Number";
import Answer from "./Answer";
import Instructions from "./Instructions"

function Home(props) {
  const [ansPage, setAnsPage] = useState(false);
//   const [answer,setAnswer] = useState('');


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
 const answer = symbol[props.ansRand];
//   if(!ansPage && count==0 ){
//       setAnswer(symbol[ansRand]);
//   }

  const ansPageHandler = () => {
    setAnsPage(!ansPage);
    console.log(ansPage);
  };

  if (ansPage) {
    return (
      <div>
        <Answer ansPageHandler={() => ansPageHandler} answer={answer} />
      </div>
    );
  } else {
    return (
      <div style={{display:"flex"}}>
      <div style={{width:'53%',marginLeft:"7%"}}>
        <Number answer={answer} />
      </div>
      <div>
        <Instructions ansPageHandler={() => ansPageHandler} />
      </div>
      </div>
    );
  }
}

export default Home;
