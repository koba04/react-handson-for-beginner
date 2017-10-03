import React from 'react';
import ReactDOM from 'react-dom';
// HelloのComponentを読み込んでみよう

const container = document.querySelector('.js-app');

// 読み込んだHelloのComponentのnameに好きな値を渡して表示してみよう
class App extends React.Component {
  render() {
    return (
      <div>
        <input type="text" value="Hello" />
        <p>Hello</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, container);
