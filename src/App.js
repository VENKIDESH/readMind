import "./App.css";
import Home from "./Components/Home";

function App() {
  var ansRand = Math.floor(Math.random() * 16);

  return (
    <div
      style={{
        background: "linear-gradient(90deg, #9796F0 0%, #FBC7D4 100%)",
        height: "100vh",
      }}
    >
      <div className="App">
        <div
          style={fontStyle
          }
        >
          READ YOUR MIND
        </div>
        <Home ansRand={ansRand} />
      </div>
    </div>
  );
}

const fontStyle = {
  fontSize: "5rem",
  fontWeight: 'bold',
  background: '-webkit-linear-gradient(90deg, #000000, #E74C3C)',
  webkitBackgroundClip: 'text',
  webkitTextFillColor: 'transparent',
  textShadow:'-6px 6px 4px rgba(0, 0, 0, 0.25)',
}

export default App;
