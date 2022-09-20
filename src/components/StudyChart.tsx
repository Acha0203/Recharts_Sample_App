import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import studyDataList from './studyData';
// import CustomTooltip from './CustomTooltip';

const pStyle = {
  color: 'blue',
};

const divStyle = {
  background: 'linear-gradient(to right, #fff, #fff8)',
  fontWeight: 'bold',
  border: 'solid 2px blue',
};

const StudyChart = () => (
  <div className="container">
    <LineChart
      width={700}
      height={300}
      data={studyDataList}
      margin={{
        top: 5,
        right: 5,
        left: 5,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="5 1" />
      <XAxis
        dataKey="date"
        interval={0}
        angle={-30}
        dx={-10}
        dy={5}
        tick={{
          fontSize: 10,
          fill: '#000',
        }}
      />
      <YAxis dataKey="問題数" tickCount={8} />
      <Line type="monotone" dataKey="問題数" stroke="#8054d8" />
      <Line type="monotone" dataKey="正解数" stroke="#3ba2f6" />
      <Line type="monotone" dataKey="正解率" stroke="#ff0092" strokeWidth={2} />
      <Legend
        verticalAlign="top"
        height={30}
        iconSize={20}
        iconType="plainline"
      />
      <Tooltip
        contentStyle={divStyle}
        labelStyle={pStyle}
        separator=" "
        cursor={{ stroke: 'blue', strokeWidth: 2 }}
      />
      {/* <Tooltip content={<CustomTooltip active={false} payload={[]} label="" />} /> */}
    </LineChart>
  </div>
);

export default StudyChart;
