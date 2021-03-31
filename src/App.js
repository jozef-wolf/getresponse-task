import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import Table from "./components/Table/Table";
import Aside from "./components/aside/Aside";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section />
      <Table />
      <Aside />
    </div>
  );
}

export default App;
