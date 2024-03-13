import "./FundsToday.css";
import React from "react";
import { BsArrowUpRight, BsArrowUpRightSquare, BsGraphUpArrow } from "react-icons/bs";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
const data = [
  {
    name: 'Page A',
    uv: 500,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
];

const FundsToday = () => {
  return (
    <div className="funds-raised-today">
      <div className="frameparent6">
        <div className="fundraised-today-parent">
          <div className="total-fundraised">Fundraised Today</div>
          <div className="ellipse-grp">
            <div className="ellipse-div" />
            <div className="ellipse-div" />
            <div className="ellipse-div" />
          </div>
        </div>
        <div className="frameparent7">
          <div className="parent2">
            <div className="div-7">$5,000</div>
            <div className="frameparent8">
              <div className="grp">
                <div className="div-4">30%</div>
                <div className="icon-button2">
                  <BsGraphUpArrow
                    className="icontrending-up"
                    
                  />
                </div>
              </div>
              <div className="framewrapper1">
                <div className="framewrapper">
                  <div className="vs-the-last">6% vs the last 7 days</div>
                </div>
              </div>
            </div>
          </div>
          {/* <ResponsiveContainer width="100%" height="100%">
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
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer> */}
          <img className="grp-icon" alt="" src="/group-35.svg" />
        </div>
      </div>
    </div>
  );
};

export default FundsToday;
