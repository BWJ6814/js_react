import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [on, setOn] = useState(false)

  const toggle = () => setOn((prev) => !prev)

  return (
    <section style={{ marginTop: 24 }}>
      <h2>Toggle</h2>
      <button onClick={toggle}>{on ? "ON" : "OFF"}</button>

      {/* 상태에 따라 스타일 변경 */}
      <div
        style={{
          width: 120,
          height: 120,
          marginTop: 12,
          borderRadius: 8,
          backgroundColor: on ? "#4ade80" : "#94a3b8", // 초록/회색
          transition: "background-color .2s",
        }}
      />
    </section>
  )
}

export default App
