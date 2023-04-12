import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const assignments = [
  { assignment_number: "first", mark: 50, fm:60 },
  { assignment_number: "second", mark: 58, fm:60 },
  { assignment_number: "third", mark: 58, fm:60 },
  { assignment_number: "fourth", mark: 59, fm:60 },
  { assignment_number: "fifth", mark: 53, fm:60 },
  { assignment_number: "sixth", mark: 60, fm:60 },
  { assignment_number: "seventh", mark: 60, fm:60 },
];

const Statistics = () => {
  return (
    <div className=" container  mx-auto">
     <div>
     <h1 className="mb-24 text-center font-semibold text-2xl">seven Assignment mark Area chart</h1>
        <AreaChart
          width={1000}
          height={600}
          data={assignments}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="assignment_number" />
          <YAxis dataKey="fm" />
          <Area type="monotone" dataKey="mark" stackId="1" stroke="#8884d8" fill="#B3F8DB " />
        </AreaChart>
      
     </div>
    </div>
  );
};

export default Statistics;
