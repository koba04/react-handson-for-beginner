import React from 'react';
import ReactDOM from 'react-dom';

import Text from './Text';
import TextStyle from './TextStyle';
import Preview from './Preview';

const container = document.querySelector('.js-app');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
      textStyle: '',
    };
  }
  render() {
    const {textValue, textStyle} = this.state;
    return (
      <div>
        <Text
          value={textValue}
          onChange={(value) => this.setState({textValue: value})}
        />
        <TextStyle
          value={textStyle}
          onChange={(value) => this.setState({textStyle: value})}
        />
        <Preview textValue={textValue} textStyle={textStyle} />
      </div>
    )
  }
}

ReactDOM.render(<App />, container);
