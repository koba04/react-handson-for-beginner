import React from 'react';

const TextStyle = (props) => (
  <select
    value={props.textStyle}
    onChange={(e) => {
      props.onChange(e.target.value);
    }}
  >
    <option value="">未選択</option>
    <option value="bold">bold</option>
    <option value="italic">italic</option>
  </select>
);
export default TextStyle;
