import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);
  
  return (
    <main style={{padding:24}}>
      <h1>📝제어 컴포넌트 기본</h1>
      <input type="text" placeholder='아무 글이나 써보세요' 
       value={text} onChange={handleChange} style={{padding:8,width:250}}/>

      <p style={{marginTop:16}}>
        현재 입력값:{" "}
        <b>{text||"아직 아무것도 입력하지 않았어요 😅"}</b>
      </p>
    </main>
  )
}

export default App
