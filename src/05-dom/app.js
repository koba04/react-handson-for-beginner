import React from 'react';
import ReactDOM from 'react-dom';

const container = document.querySelector('.js-app');

// 4で作成したComponentを元に、画面が表示されたタイミングで、テキストボックスにフォーカスをあててみよう。
// https://reactjs.org/docs/state-and-lifecycle.html
// https://reactjs.org/docs/refs-and-the-dom.html

class App extends React.Component {
  render() {
    return (
      <div>
        <input type="text" value="Hello" onChange={() => {}} />
        <p>Hello</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, container);
