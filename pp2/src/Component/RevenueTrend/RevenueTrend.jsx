import "./RevenueTrend.css";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", uv: 0 },
  { name: "Feb", uv: 600 },
  { name: "Mar", uv: 1100 },
  { name: "Apr", uv: 1100 }, 
  { name: "May", uv: 1190 },
  { name: "June", uv: 1390 },
  { name: "July", uv: 1490 },
  { name: "Aug", uv: 1590 },
  { name: "Sep", uv: 1690 },
  { name: "Oct", uv: 1790 },
  { name: "Nov", uv: 1890 },
  { name: "Dec", uv: 1490 },
];

const RevenueTrend = () => {
  return (
    <div className="revenue-trend">
      <div className="revenue-trend1">Revenue Trend</div>
      <div className="lineparent">
        {/* <div className="group-child" /> */}
        {/* <div className="group-item" /> */}
        <div className="group-inner" />
        <div className="linediv" />
        <div className="group-child1" />
        {/* <div className="months">
          <div className="search-here">Jan</div>
          <div className="search-here">Feb</div>
          <div className="search-here">Mar</div>
          <div className="search-here">Apr</div>
          <div className="search-here">May</div>
          <div className="search-here">Jun</div>
          <div className="search-here">Jul</div>
          <div className="search-here">Aug</div>
          <div className="search-here">Sep</div>
          <div className="search-here">Oct</div>
          <div className="search-here">Nov</div>
          <div className="search-here">Dec</div>
        </div> */}
        {/* <img className="vector-icon" alt="" src="/vector-16.svg" /> */}
        
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line connectNulls type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RevenueTrend