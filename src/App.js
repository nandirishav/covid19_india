import React, { useState, useEffect, useMemo } from "react";
import { Table } from "./Table";

function App() {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://api.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData.statewise);
    setData(actualData.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>COVID 19 INDIA DASHBOARD</h1>
      <Table Data={data} />
    </div>
  );
}

export default App;
