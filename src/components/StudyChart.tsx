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
import { studyData } from '../studyData';

const StudyChart = (): JSX.Element => {
  return (
    <div className="container">
      <LineChart
        width={700}
        height={300}
        data={studyData}
        margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis dataKey="問題数" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="問題数" stroke="#8884d8" />
        <Line type="monotone" dataKey="正解数" stroke="#3ba2f6" />
        <Line type="monotone" dataKey="正解率" stroke="#ff0092" />
      </LineChart>
    </div>
  );
};

export default StudyChart;
