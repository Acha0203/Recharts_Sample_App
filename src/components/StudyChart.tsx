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

const pStyle = {
  color: 'blue',
};

const divStyle = {
  background: 'linear-gradient(to right, #fff, #fff8)',
  fontWeight: 'bold',
  border: 'solid 2px blue',
};

const StudyChart = () => {
  // const [currentDate, setCurrentDate] = useState('10/01');

  const getAccuracy = (date: string): number => {
    for (let i = 0; i < studyDataList.length; i += 1) {
      if (studyDataList[i].date === date) {
        return studyDataList[i].正解率;
      }
    }
    // 該当する日のデータが無かった場合
    return 0;
  };

  const getMessage = (accuracy: number): string => {
    let message = '';
    if (accuracy > 90) {
      message = '🎉大変よくできました🎊';
    } else if (accuracy <= 90 && accuracy > 70) {
      message = '🌸がんばりました🌼';
    } else {
      message = '🥺がんばりましょう🥺';
    }

    return message;
  };

  const handleClickXAxis = (event: never): void => {
    // eslint-disable-next-line no-console, dot-notation, no-alert
    alert(getMessage(getAccuracy(event['value'])));
  };

  return (
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
            cursor: 'pointer',
          }}
          onClick={handleClickXAxis}
        />
        <YAxis dataKey="問題数" tickCount={8} />
        <Line type="monotone" dataKey="問題数" stroke="#8054d8" unit="問" />
        <Line type="monotone" dataKey="正解数" stroke="#3ba2f6" unit="問" />
        <Line
          type="monotone"
          dataKey="正解率"
          stroke="#ff0092"
          strokeWidth={2}
          unit="%"
        />
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
      </LineChart>
    </div>
  );
};

export default StudyChart;
