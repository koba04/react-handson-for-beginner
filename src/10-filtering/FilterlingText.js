import React from 'react';

const FilteringText = (props) => (
  <input
    type="text"
    value={props.value}
    placeholder="検索したい文字列を入力してください"
    onChange={(e) => {
      props.onChange(e.target.value);
    }}
  />
);
export default FilteringText;
