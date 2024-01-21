import React from 'react';

const Slider = ({value, onChange}) => {
  return (
    <div>
      <h1>Current Value: {value}</h1>
      <input
        type="range"
        min={1}
        max={120}
        value={value || 50}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
};

export default Slider;
