import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Text가 변경됨요", text);
  }, [text]); // text가 바뀔때 마다 effect 실행..

  return (
    <div>
      <h1>useEffect 예제 3 - 입력값 감시..</h1>
      <input type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='아무글이나 입력해보세요' />
      <p>현재 입력값: {text || "아직 입력 없음"}</p>
    </div>
  )
}

export default App
