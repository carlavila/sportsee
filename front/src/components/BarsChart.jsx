import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from "prop-types"
import formatData from "../services/FormatData";
import '../style/_barschart.scss';


/*const formatDataBarsChart = (data) => {
  let formatedSessions = [];
  for(let i = 0; i < data.sessions.length; i++){
    const sessions = data.sessions[i];
    const { kilogram, calories } = sessions;
    formatedSessions.push({
      day: i+1,
      kg: kilogram,
      calories: calories
    })
  }
  return formatedSessions
}*/

const CustomToolTip = ({active, payload}) => {
  if(active){
    return (
      <div className="tooltip">
        <p className="tooltip__calories">{payload[0].value}kg</p>
        <p className="tooltip__kg">{payload[1].value}Kcal</p>
      </div>
    )
  }
  return null
}

export default class BarsChart extends PureComponent {
  render(){
	const format = new formatData();
    const formattedData = format.formatDataBarsChart(this.props.data);
    return (
      <div className='barsChart__wrapper'>
        <div className="barsChart__titleWrapper">
            <div className="barsChart__title">Activité quotidienne</div>
            <div className="barsChart__legend">
              <div className="barsChart__legend-item barsChart__legend-item--grey-dot">Poids (kg)</div>
              <div className="barsChart__legend-item barsChart__legend-item--red-dot">Calories brûlées (kCal)</div>
          </div>
        </div>
        <ResponsiveContainer>
          
          <BarChart
            width={500}
            height={300}
            barSize={7}
            barGap={8}
            margin={{
              bottom: 60,
            }}
            data={formattedData}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" tickLine={false} tickMargin={15} dy={15} stroke="1 1"/>
            <YAxis 
              yAxisId="right"
              dataKey="kg"
              orientation="right"
              axisLine={false}
              tickLine={false}
              tickMargin={35}    
              domain={[0, 'dataMax + 10']}        
              />
            <YAxis
              yAxisId="left"
              dataKey="calories"
              orientation="left"
              hide={true}
            />
            <Tooltip content={<CustomToolTip />} offset={50}/>
            <Bar yAxisId="right" dataKey="kg" fill="#282D30" radius={[10, 10, 0, 0]}/>
            <Bar yAxisId="left" dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
BarsChart.propTypes = {
  data: PropTypes.object.isRequired,
}