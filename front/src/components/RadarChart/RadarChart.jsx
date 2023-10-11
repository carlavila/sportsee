import React from "react";
import {
  Radar,
  RadarChart as RadarC,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import PropTypes from "prop-types";
import formatData from "../../utils/FormatData";

const RadarChart = ({ data }) => {
  console.log("data:", data.data);
  //console.log("data.data.kind:", data.data.kind);

  const format = new formatData();
  const formatedData = format.formatDataRadarChart(data);

  return (
    <div className="radarChart">
      <RadarC
        outerRadius={90}
        width={300}
        height={300}
        data={formatedData}
        background={{ fill: "#282D30" }}
      >
        <PolarGrid gridType="polygon" radialLines={false} />
        <PolarAngleAxis
          dataKey="subject"
          axisLine={false}
          tickLine={false}
          tick={{
            dy: 4,
            fill: "#fff",
            fontSize: 12,
          }}
        />
        <PolarRadiusAxis tick={false} axisLine={false} />
        <Radar
          name="Mike"
          dataKey="grade"
          stroke="#8884d8"
          fill="red"
          fillOpacity={0.7}
        />
      </RadarC>
    </div>
  );
};

export default RadarChart;

RadarChart.propTypes = {
  data: PropTypes.object.isRequired,
};
