import React from "react";
import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import "./ReportsPage.css";
import Donut from "./Donut";
import Bar from "./Bar";
import Line from "./Line";

const Reports = () =>{




    return(
        <div className="App">
      <div className="container">
        <h1>Reports</h1>
        <div className="section">
            {/* <Donut/>
            <Bar /> */}
        <Line/>
        </div>
      </div>
    </div>
    )
}
export default Reports;