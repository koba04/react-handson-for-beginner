import React from 'react';
import ReactDOM from 'react-dom';

const container = document.querySelector('.js-app');

class App extends React.Component {
  render() {
    return (
      <div>
        {/* inputの値とp要素の値が同期させるようにしてみましょう */}
        <input type="text" value="Hello" onChange={() => {}} />
        <p>Hello</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, container);
