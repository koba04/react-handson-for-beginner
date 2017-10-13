import React from 'react';
import ReactDOM from 'react-dom';

// ここでHelloのComponentを読み込んでみましょう
import Hello from './Hello';

const container = document.querySelector('.js-app');

// 読み込んだHelloのComponentのnameに好きな値を渡して表示してみましょう
ReactDOM.render(
  <Hello name="React" />,
  container
);
