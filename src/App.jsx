import "./App.css";
import { Search } from "./components/search";
import { Weather } from "./components/weather";

function App() {
  return (
    <>
      <div className="container">
        <Weather />
      </div>
    </>
  );
}

export default App;
