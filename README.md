# React Hands-on for beginner

このリポジトリは、下記ハンズオンのためのものです。

* https://reactjs-meetup.connpass.com/event/63845/

## Start

`npm install`または`yarn install`コマンドで依存パッケージをインストールします。

* npm

```
% npm install
```

* yarn

```
% yarn install
```

インストールが終了後、`npm start`コマンドでアプリケーションを起動します。

```
% npm start
> react-handson-for-beginner@1.0.0 start
> webpack-dev-server

Project is running at http://localhost:8080/
webpack output is served from /
Content not from webpack is served from /react-handson-for-beginner/public
Hash: e1fe83922e4369739067
Version: webpack 3.6.0
Time: 1505ms
              Asset     Size  Chunks                    Chunk Names
    01-hello/app.js  1.15 MB       0  [emitted]  [big]  01-hello/app
01-hello/app.js.map  1.36 MB       0  [emitted]         01-hello/app
  [24] ./node_modules/react/index.js 190 bytes {0} [built]
  [49] multi (webpack)-dev-server/client?http://localhost:8080 ./src/01-hello/app.js 40 bytes {0} [built]
  [50] (webpack)-dev-server/client?http://localhost:8080 7.23 kB {0} [built]
  [51] ./node_modules/url/url.js 23.3 kB {0} [built]
  [57] ./node_modules/strip-ansi/index.js 161 bytes {0} [built]
  [59] ./node_modules/loglevel/lib/loglevel.js 7.74 kB {0} [built]
  [60] (webpack)-dev-server/client/socket.js 1.04 kB {0} [built]
  [92] (webpack)-dev-server/client/overlay.js 3.73 kB {0} [built]
  [93] ./node_modules/ansi-html/index.js 4.26 kB {0} [built]
  [94] ./node_modules/html-entities/index.js 231 bytes {0} [built]
  [97] (webpack)/hot nonrecursive ^\.\/log$ 170 bytes {0} [built]
  [99] (webpack)/hot/emitter.js 77 bytes {0} [built]
 [101] ./src/01-hello/app.js 148 bytes {0} [built]
 [103] ./node_modules/react/cjs/react.development.js 55.3 kB {0} [built]
 [104] ./node_modules/react-dom/index.js 1.36 kB {0} [built]
    + 103 hidden modules
webpack: Compiled successfully.
```

`webpack: Compiled successfully.`が出力された後、`http://localhost:8080`をブラウザで開きます。

## React in 5minutes

* [React in 5minutes](./React-in-5minutes.md)
