import React from 'react';
import ReactDOM from 'react-dom';

const container = document.querySelector('.js-app');

// 4で作成したComponentを05-dom以下にコピーして、画面が表示されたタイミングで、テキストボックスにフォーカスをあててみましょう。
// 下記も参考にしてみてください
// https://reactjs.org/docs/state-and-lifecycle.html
// https://reactjs.org/docs/refs-and-the-dom.html

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello',
    };
  }
  componentDidMount() {
    this.input.focus();
  }
  render() {
    const {text} = this.state;
    return (
      <div>
        <input
          type="text"
          ref={(input) => this.input = input}
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
