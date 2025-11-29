import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((prev) => prev + 1)
  }
  const decrement = () => setCount((prev) => prev - 1)  // prev는 react가 넘겨주는 현재 count 값
  const reset = () => setCount(0)



  return (
    <main style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h1>useState - Counter</h1>
      <p>현재 카운트: <b>{count}</b></p>

      {/* onClick: JSX에서 이벤트 속성. 함수 레퍼런스를 전달 */}
      <button onClick={increment}>+1</button>
      <button onClick={decrement} style={{ marginLeft: 8 }}>-1</button>
      <button onClick={reset} style={{ marginLeft: 8 }}>초기화</button>

      {/* JSX 문법 팁:
         - {} 안에는 JS 표현식 가능 (변수/연산/삼항연산자 등)
         - style은 객체 리터럴 사용 (카멜케이스 속성명) */}
    </main>
  )
}

export default App
