import React from 'react';
import ReactDOM from 'react-dom';

// ここでHelloのComponentを読み込んでみましょう
import Hello from './Hello';

const container = document.querySelector('.js-app');

// ここで読み込んだHelloのComponentを表示してみましょう
ReactDOM.render(
  <Hello />,
  container
);
