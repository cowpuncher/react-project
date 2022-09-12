import Message from './Message';
import './App.css';

const hello = 'Hi Dude!';
const text = 'You proger?';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message hello={hello} name={text} />
      </header>
    </div>
  );
}

export default App;
