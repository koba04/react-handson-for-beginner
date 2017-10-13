import React from 'react';

const Text = (props) => (
  <input
    type="text"
    value={props.value}
    onChange={(e) => {
      props.onChange(e.target.value);
    }}
  />
);
export default Text;
