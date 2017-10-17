# React in 5minutes

## Reactとは

Facebookが開発しているオープンソースのUIライブラリです。

## Hello World

```js
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hello</h1>, document.getElementById('app'));
```

## Create React App

コマンド1つでアプリケーションが作成される`create-react-app`があるので、webpackの設定などに悩むことなく開発を始めることができます。

```
% npm install --global create-react-app
% create-react-app my-app
% npm start
```

このサンプルでは、`create-react-app`を使わずに最低限の設定で使用しています。

## JSX

JavaScriptの中に書かれていたHTMLみたいなものはJSXというものです。

* JSX

```html
// classでなくclassNameになっている点に注意
<div className="foo">Hello</div>
```

* JavaScript

```js
React.createElement('div', {className: 'foo'}, 'Hello');
```

`{}`の中にJavaScriptの式を書くことができます。

```js
<div>{1 + 1}</div>
```

## Component

独自のComponentを作ることができます。
Component名は大文字で始める始める必要があります。

```js
function App() {
    return <div>Hello</div>
}

const App = () => <div>Hello</div>

class App extends React.Component {
    render() {
        return <div>Hello</div>
    }
}
```

## Props

ComponentはHTMLのように属性値を受け取ります。
Propには関数も渡すことができます。

```js

const Text = (props) => <div>Text: {props.text}</div>

// <Text text="foo">
```

## State

Componentは状態を持つことができます

```js
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }
    render() {
        return (
            <div>
                <button onClick={() => this.setState((state) => ({count: state.count + 1}))} />
                {this.state.count}
            </div>
        )
    }
}
```

## DOM

DOMは`ref`のPropを使うことで参照できます。

```js
const App = () => (
    <div
        ref={(dom) =>{
            if (dom) console.log(dom.innerHTML) // Hello
        }}
    >
        Hello
    </div>
);
```

## Lifecycle Methods

Componentの状態に応じて下記のようなライフサイクルメソッドを持っています。

* `componentWillMount()`
    * Componentがマウントされる前
* `componentDidMount()`
    * Componentがマウントされる後
* `componentWillReceiveProps(nextProps)`
    * 新しいPropを受け取ったとき
* `shouldComponentUpdate(nextProps, nextState)`
    * Componentを再renderするかどうか返す
* `componentWillUpdate(nextProps, nextState)`
    * Componentが更新される前
* `componentDidUpdate(prevProps, prevState)`
    * Componentが更新される後
* `componentWillUnmount()`
    * Componentがアンマウントされる前
* `componentDidCatch(error, info)`
    * 子のComponentのrender中またはライフサイクルメソッドの呼び出し中◊にエラーが発生した時
