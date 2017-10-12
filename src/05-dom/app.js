import React from 'react';
import ReactDOM from 'react-dom';

const container = document.querySelector('.js-app');

// 4で作成したComponentを05-dom以下にコピーして、画面が表示されたタイミングで、テキストボックスにフォーカスをあててみましょう。
// 下記も参考にしてみてください
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
