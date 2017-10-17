import React from 'react';
import ReactDOM from 'react-dom';
// サーバーからデータを取得するための関数
import {fetchHackerNews} from '../api';

import News from '../08-render-news/News';
import FilteringText from './FilterlingText';

const container = document.querySelector('.js-app');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: null,
      filterText: '',
    };
  }
  componentDidMount() {
    fetchHackerNews().then((news) => {
      this.setState({news});
    })
  }
  render() {
    const {news, filterText} = this.state;
    if (!news) return <p>loading...</p>;
    const filteredNews = filterText ? news.filter((item) => item.title.toLowerCase().indexOf(filterText.toLowerCase()) !== -1) : news;
    return (
      <div>
        <FilteringText
          value={filterText}
          onChange={(value) => this.setState({filterText: value})}
        />
        <News news={filteredNews} />
      </div>
    )
  }
}

ReactDOM.render(<App />, container);
