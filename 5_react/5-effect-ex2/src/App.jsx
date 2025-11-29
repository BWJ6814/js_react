import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    console.log("👍 count가 변경되었습니다:", count);
    document.title = `현재 카운트 : ${count}`;
  },[count])

  return (
    <div>
      <h1>useEffect 예제2 - count 감지</h1>
      <p>현재 count:{count}</p>
      <button onClick={()=> setCount((prev)=> prev+1)}>+1</button>
      
      {/* onClick={setCount((prev) => prev + 1)} 이런 식으로 쓰면
      렌더링 할 때 바로 실행돼버리고,
      클릭했을 때 실행되는 게 아님. */}
       
      <button onClick={()=> setCount((prev)=> prev-1)}>-1</button>
    </div>

  )
}

export default App
