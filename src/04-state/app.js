import React from 'react';
import ReactDOM from 'react-dom';

const container = document.querySelector('.js-app');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello',
    };
  }
  render() {
    const {text} = this.state;
    return (
      <div>
        {/* inputの値とp要素の値が同期させるようにしてみましょう */}
        <input
          type="text"
          value={text}
          onChange={(e) => {
            this.setState({text: e.target.value});
          }}
        />
        <p>{text}</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, container);
