import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <h1>Weather App</h1>
        <Weather defaultCity="Winnipeg" />
        <footer>
          This project was coded by Daria Mikita{" "}
          <a
            href="https://github.com/nauticalstars/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            My Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
