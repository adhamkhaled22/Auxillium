import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
class PiePie extends React.Component {
   COLORS = ["#FFBB28", "#82ca9d"];
   pieData = [
      {
         name: "Male",
         value: 30.85
      },
      {
         name: "Female",
         value: 47.91
      }
   ];
   CustomTooltip = ({ active, payload, label }) => {
      if (active) {
         return (
         <div
            className="custom-tooltip"
            style={{
               backgroundColor: "#ffff",
               padding: "2.1px",
               border: "2px solid #cccc"
            }}
         >
            <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
         </div>
      );
   }
   return null;
};
render() {
   return (
      <PieChart width={240} height={340}>
      <Pie
         data={this.pieData}
         color="#000000"
         dataKey="value"
         nameKey="name"
        //  cx="50%"
        //  cy="50%"
       outerRadius={115}
         fill="#8884d8"
      >
         {this.pieData.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={this.COLORS[index % this.COLORS.length]}
            />
         ))}
      </Pie>
      <Tooltip content={<this.CustomTooltip />} />
      <Legend />
      </PieChart>
      );
   }
}
export default PiePie;