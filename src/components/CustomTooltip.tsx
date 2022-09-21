import React from 'react';

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active: boolean;
  payload: {
    value: number;
  }[];
  label: string;
}) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p>{`${label} の記録`}</p>
        <p>{`問題数: ${payload[0].value}`}</p>
        <p>{`正解数: ${payload[1].value}`}</p>
        <p>{`正解率: ${payload[2].value}%`}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
