import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoint.map((ele) => ele.value); // return array of value like 12 months so 12 values
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoint.map((ele) => (
        <ChartBar
          key={ele.label}
          value={ele.value}
          maxValue={totalMaximum}
          label={ele.label}
        />
      ))}
    </div>
  );
};

export default Chart;
