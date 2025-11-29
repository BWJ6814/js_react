import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("") // 문자열 상태

  const onChange = (e) => setName(e.target.value) // 이벤트가 발생한 대상의 value 값을 가져온다

  const clear = ()=> setName("")


  return (
        <section style={{ marginTop: 24 }}>
      <h2>Controlled Input</h2>
      <input
        placeholder="이름을 입력하세요"
        value={name}           // 상태 → 화면
        onChange={onChange}    // 화면 입력 → 상태
        style={{ padding: 8 }}
      />
      <button onClick={clear} style={{ marginLeft: 8 }}>지우기</button>

      <p style={{ marginTop: 8 }}>
        {name ? `안녕하세요, ${name}님!` : "아직 이름이 없습니다."}
      </p>
    </section>
  )
}

export default App
