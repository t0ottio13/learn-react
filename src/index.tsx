import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Hello from './components/Hello'
import Message from './components/Message';
import Parent from './components/ContainerSamples';
import Page from './components/ContextSample';
import reportWebVitals from './reportWebVitals';
import Counter from './components/Counter';

// ReactDOM.createRootにHTMLの設置先を設定し、rootオブジェクトを作成
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // 不適切なコードを検知するためのヘルパー
  <React.StrictMode>
    {/* この中はJSX */}
    {/* import App from './App'; <=してるから使える*/}
    {/* <App />  */}

    <Hello />
    <Message />
    <Parent />
    <Page />
    <Counter initialValue={0} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
