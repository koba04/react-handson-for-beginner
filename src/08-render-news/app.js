import React from 'react';
import ReactDOM from 'react-dom';
// サーバーからデータを取得するための関数
import {fetchHackerNews} from '../api';

const container = document.querySelector('.js-app');

class App extends React.Component {
  render() {
    return (
      <div>
        {/* サーバーからデータを取得したあとは、NewsのComponentを表示して、その中でNewsItemのComponentを表示してみましょう */}
      </div>
    )
  }
}

ReactDOM.render(<App />, container);
