import React from 'react';

const Preview = (props) => {
  if (props.textStyle === 'bold') {
    return <p style={{fontWeight: 'bold'}}>{props.textValue}</p>;
  } else if (props.textStyle === 'italic') {
    return <p><i>{props.textValue}</i></p>;
  }
  return <p>{props.textValue}</p>;
};
export default Preview;
