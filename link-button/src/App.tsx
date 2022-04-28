import React, {useState} from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
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
        <Input children={"料理"} />
        <LinkButton />
        <RouteTest />
      </header>
    </div>
  );
}

function LinkButton() {
  const [count, setCount] = useState(999)
  const handlClick = () => {
    setCount(count + 1);
  }
  let over =""
  if (count > 1020){
    over = "1020Likeを超えました。"
  }else if(count > 1000){
    over = "1000Likeを超えました。"
  }
  return(
    <div>
      <span className='likeButton' onClick={handlClick}>💛{count}</span>
      <p>{over}</p>
    </div>
  ) 
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