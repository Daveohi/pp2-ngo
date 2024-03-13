// import React from 'react';
import { BsGraphUpArrow } from "react-icons/bs";
import "./FundRaised1.css";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 500,
    // pv: 50,
    // amt: 2400,
  },
  {
    name: "Page B",
    uv: 2200,
    // pv: 1398,
    // amt: 2210,
  },
  {
    name: "Page C",
    uv: 400,
    // pv: 9800,
    // amt: 2290,
  },
  {
    name: "Page D",
    uv: 3000,
    // pv: 9800,
    // amt: 2290,
  },
];

const FundRaised1 = () => {
  return (
    <div className="fundraised1">
      <div className="framedivv">
        <div className="total-fundraised-pa-rentt">
          <div className="total-fundraised">Campaign Goal</div>
          <div className="ellipse-grpp">
            <div className="ellipse-div" />
            <div className="ellipse-div" />
            <div className="ellipse-div" />
          </div>
        </div>
        <div className="frameparentt1">
          <div className="pa-rentt">
            <div className="total-fundraised">$1,000</div>
            <div className="frameparentt2">
              <div className="framewrapperr">
                <div className="grpp">
                  <div className="divv-4">10%</div>
                  <div className="iconbuttonn">
                    <BsGraphUpArrow
                      className="icontrending-up"
                      
                    />
                  </div>
                </div>
              </div>
              <div className="framewrapperr1">
                <div className="framewrapperr">
                  <div className="vs-the-last">6% vs the last 7 days</div>
                </div>
              </div>
            </div>
          </div>
          
          <ResponsiveContainer width="50%" height="100%">
            <AreaChart
              width={200}
              height={60}
              data={data}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
              }}
            >
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#29339b"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default FundRaised1