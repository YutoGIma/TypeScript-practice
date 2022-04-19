import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Child from './child'
import Input from './input'
import RouteTest from './routeTest'
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {items.map((item: Item) => (
            <li key = {item.id}>{item.title}</li>
          ))}
        </ul>
        <div className="App">
          <Child message="親コンポーネントより記述"  number="1">子コンポーネント</Child>
          <Child message="親コンポーネントより記述"  number="2">子コンポーネント</Child>
        </div>
        <Input children="料理"></Input>
        <LinkButton />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/router" element={<RouteTest />} />
        </Routes>
      </BrowserRouter>
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


export default App;