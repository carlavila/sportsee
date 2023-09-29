import { LineChart as LineC, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from "prop-types"
import formatData from "../../utils/FormatData";

const LineChart = ({data}) => {
  const format = new formatData();
  const formatedSessions = format.formatDataLineChart(data);
    return (
      <>
        <ResponsiveContainer width="100%" height="100%">
          <LineC
              width={500}
              height={300}
              data={formatedSessions}
              margin={{top: 70, right: 20, bottom: 10, left: 20}}
              >
              <text
                x="15%"
                y="15%"
                fontSize={14}
                fontWeight={500}
                width={100}
                fill="#ffffffa4"
              >
                Durée moyenne des
                <tspan x="15%" y="27%">
                  sessions
                </tspan>
              </text>
              <XAxis dataKey="day" axisLine={false} tickLine={false} stroke='white'/>
              <Tooltip filterNull={false} separator="" 
              itemStyle={{
                color: "#000000",
                backgroundColor: "#ffffff",
                fontSize: "9px",
                padding: "px",
                margin: 7,
                border: 0,
                fontWeight: "500"
              }}
              formatter={(day, value) => [" min", day]}
              contentStyle={{
                padding: ".4rem",
                backgroundColor: "#ffffff",
                border: 0,
              }}
              labelStyle={{
                display: "none",
              }}/>
              <Line
                  type="monotone"
                  dataKey="sessionL"
                  stroke="#FFFFFF"
                  dot={false}
                  strokeWidth={2}
              />
          </LineC>
        </ResponsiveContainer>
      </>
    );
}

export default LineChart

LineChart.propTypes = {
  data: PropTypes.object.isRequired,
}