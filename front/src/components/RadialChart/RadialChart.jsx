import React, { PureComponent } from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import formatData from "../../utils/FormatData";

export default class RadarChart extends PureComponent {
  render() {
    const score = this.props.data?.todayScore
      ? this.props.data?.todayScore
      : this.props.data?.score;
    const format = new formatData();
    const formatedData = format.formatedDataRadial(score);
    const perfValue = score * 100;
    const startAngle = 90;
    return (
      <div className="radialChart">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            width={330}
            height={250}
            innerRadius={65}
            outerRadius={80}
            data={formatedData}
            startAngle={startAngle}
            endAngle={90 + (perfValue * 360) / 100}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <RadialBar
              name="score"
              dataKey="value"
              stroke-linejoin="round"
              fill="#E60000"
              cornerRadius={100}
            />
            <text textAnchor="middle" fontSize={15} fontWeight={600}>
              <tspan x="50%" y="50%" fontSize={22}>
                {perfValue}%
              </tspan>
              <tspan x="50%" y="65.5%" fill={"#74798c"}>
                de votre{" "}
              </tspan>
              <tspan x="50%" y="77%" fill={"#74798c"}>
                objectif
              </tspan>
            </text>
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

RadarChart.propTypes = {
  data: PropTypes.object.isRequired,
};
