import React from 'react';
import ReactDOM from 'react-dom';
// サーバーからデータを取得するための関数
import {fetchHackerNews} from '../api';

const container = document.querySelector('.js-app');

class App extends React.Component {
  render() {
    return (
      <div>
        {/* テキストボックスを表示するComponentを用意して、タイトルでフィルターできるようにしてみよう */}
      </div>
    )
  }
}

ReactDOM.render(<App />, container);
