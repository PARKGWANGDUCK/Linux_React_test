import "./App.css";
import PrintMyname from "./components/PrintMyName";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PrintMyname name="와"></PrintMyname>
        <PrintMyname name="후"></PrintMyname>
        <PrintMyname name="에메이징"></PrintMyname>
      </header>
    </div>
  );
}

export default App;
