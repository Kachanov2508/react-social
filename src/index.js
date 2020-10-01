import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
  { id: 1, name: "Татьяна" },
  { id: 2, name: "Николай" },
  { id: 3, name: "Александра" },
  { id: 4, name: "Евгений" },
  { id: 5, name: "Дмитрий" },
  { id: 6, name: "Мария" },
];

let messageData = [
  {id: 1, message: "Привет"},
  {id: 2, message: "Добрый день"},
  {id: 3, message: "Разработка на реакт"},
]

let postsData = [
  { id: 1, message: "Hi, how are you?", likesCount: "9" },
  { id: 2, message: "It's my first post", likesCount: "15" },
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messageData={messageData} postsData={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
