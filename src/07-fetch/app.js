import React from 'react';
import ReactDOM from 'react-dom';
// サーバーからデータを取得するための関数
import {fetchHackerNews} from '../api';

const container = document.querySelector('.js-app');

class App extends React.Component {
  render() {
    return (
      <div>
        <pre>
          {/* ここにサーバーから取得したデータをそのまま出力してみましょう */}
        </pre>
      </div>
    )
  }
}

ReactDOM.render(<App />, container);
