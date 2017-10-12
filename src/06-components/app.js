import React from 'react';
import ReactDOM from 'react-dom';

const container = document.querySelector('.js-app');

class App extends React.Component {
  render() {
    return (
      <div>
        {/* TextとTextStyleとPreviewのComponentを配置してみましょう */}
      </div>
    )
  }
}

ReactDOM.render(<App />, container);
