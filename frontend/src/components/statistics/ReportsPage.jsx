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
        <div class="flex-container"> 
            <div className="section">
                <Donut/>     
            </div>
            <div className="section">
                <Bar />     
            </div>
            <div className="section">
                <Line/>    
            </div>
        </div>
        
        
            
      </div>
    </div>
    )
}
export default Reports;