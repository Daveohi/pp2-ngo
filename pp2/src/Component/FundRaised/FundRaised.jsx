import React from "react";
import "./FundRaised.css";
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { BsGraphUpArrow } from "react-icons/bs";

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

const FundRaised = () => {
  return (
    <div className="fundraised">
      <div className="framediv">
        <div className="total-fundraised-parent">
          <div className="total-fundraised">Total Fundraised</div>
          <div className="ellipse-grp">
            <div className="ellipse-div" />
            <div className="ellipse-div" />
            <div className="ellipse-div" />
          </div>
        </div>
        <div className="frameparent1">
          <div className="pa-rent">
            <div className="total-fundraised">$10,000.00</div>
            <div className="frameparent2">
              <div className="framewrapper">
                <div className="grp">
                  <div className="div-4">10%</div>
                  <div className="icon-button">
                    <BsGraphUpArrow
                      className="icontrending-up"
                    />
                  </div>
                </div>
              </div>
              <div className="framewrapper1">
                <div className="framewrapper">
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
};

export default FundRaised;
