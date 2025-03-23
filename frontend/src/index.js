import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyHello from './MyHello';
import EventBasic from './EventBasic';
import StateBasic from './StateBasic';

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
  root.render(
    <React.StrictMode>
      <StateBasic init={0} />
      {/* <EventBasic /> */}
      {/* <MyHello name="五十嵐" age={24} /> */}
      {/* <App />
      <p>現在時刻：{new Date().toLocaleString()}</p> */}
    </React.StrictMode>
  );
}
, 1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
