import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { isPropertySignature } from 'typescript';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {items.map((item: Item) => (
            <li key = {item.id}>{item.title}</li>
          ))}
        </ul>
        <div className="App">
          <Child  />
        </div>
        <LinkButton />
      </header>
    </div>
  );
}

function LinkButton() {
  const [count, setCount] = useState(999)
  const handlClick = () => {
    setCount(count + 1);
  }
  return <span className='likeButton' onClick={handlClick}>💛{count}</span>
}

type Item = {
  id: number
  title: string
}

const items: Item[] = [
  {
    id: 1,
    title: "ハリーポッターと賢者の石"
  },
  {
    id: 2,
    title: "ハリーポッターと死の秘宝"
  }
]

function Child(){
  return (
    <div>
      <p>これは子コンポーネントです。</p>
    </div>
  )
}
export default App;
