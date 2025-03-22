import logo from './logo.svg';
import './App.css';

//Appコンポーネントを定義
function App() {
  //描画内容を返す
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          こんにちは、react!
        </a>
      </header>
    </div>
  );
}
//Appコンポーネントをエクスポート
export default App;
