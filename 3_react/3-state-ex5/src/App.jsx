import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  const updateTime = () => {
    setTime(new Date().toLocaleTimeString())
  }

  return (
     <section style={{ marginTop: 24 }}>
      <h2>Clock (버튼으로 갱신)</h2>
      <p>현재 시각: {time}</p>
      <button onClick={updateTime}>시간 새로고침</button>
    </section>
  )
}

export default App
