import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import Table from "./components/Table/Table";
import Aside from "./components/aside/Aside";
import "./App.css";
import React, { useState, useEffect } from "react";
import "./css/"
function App() {
  const [meals, setMeals] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/meals")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMeals(data);
      });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Section />
      {/* Conditional templating in react */}
      {meals && <Table meals={meals} />}
      <Aside />
    </div>
  );
}

export default App;
