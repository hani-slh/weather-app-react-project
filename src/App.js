import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Arak" />
        <footer>
          Open-source code by{" "}
          <a href="https://github.com/hani-slh/weather-app-react-project">
            Haniye Salehi
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
