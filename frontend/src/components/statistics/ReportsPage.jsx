import React from "react";
import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import "./ReportsPage.css";
import Donut from "./Donut";

const Reports = () =>{




    return(
        <div className="App">
      <div className="container">
        <h1>Build React Graphs The Easy Way</h1>
        <div className="section">
          <Donut />
        </div>
      </div>
    </div>
    )
}
export default Reports;