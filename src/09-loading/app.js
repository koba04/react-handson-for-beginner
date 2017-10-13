import React from 'react';
import ReactDOM from 'react-dom';
// サーバーからデータを取得するための関数
import {fetchHackerNews} from '../api';

import News from '../08-render-news/News';

const container = document.querySelector('.js-app');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: null
    };
  }
  componentDidMount() {
    fetchHackerNews().then((news) => {
      this.setState({news});
    })
  }
  render() {
    if (!this.state.news) return <p>loading...</p>;
    return (
      <div>
        <News news={this.state.news} />
      </div>
    )
  }
}

ReactDOM.render(<App />, container);
