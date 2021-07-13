import "./default.scss";
import Header from "./components/Header";
import Homepage from "./pages/HomePage";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
