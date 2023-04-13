import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Winnipeg" />
      </div>
      <footer>
        This project was coded by Daria Mikita{" "}
        <a
          href="https://github.com/nauticalstars/weather-react"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none"
        >
          {" "}
          My Github
        </a>
      </footer>
    </div>
  );
}

export default App;
