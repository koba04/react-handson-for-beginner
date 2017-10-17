import React from 'react';
import ReactDOM from 'react-dom';
// サーバーからデータを取得するための関数
import {fetchHackerNews} from '../api';

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
    return (
      <div>
        <pre>
          {JSON.stringify(this.state.news, null, "  ")}
        </pre>
      </div>
    )
  }
}

ReactDOM.render(<App />, container);
