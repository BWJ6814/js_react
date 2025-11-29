import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'


function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("⏱ 타이머 시작!");

    // 1초마다 seconds를 1씩 증가시키는 interval 생성
    const id = setInterval(() => {
      // 함수형 업데이트 사용 (prev가 이전 값)
      setSeconds((prev) => prev + 1);
    }, 1000);

    // cleanup 함수: 컴포넌트가 언마운트 될 때 실행
    return () => {
      console.log("🧹 타이머 정리! clearInterval");
      clearInterval(id); // interval 중지
    };
  }, []); 
  // [] → 마운트 시 한 번 interval 설정, 언마운트 시 cleanup 실행

  return (
    <div style={{ marginTop: 16 }}>
      <h2>타이머: {seconds}초</h2>
    </div>
  );
}

function App() {
  const [showTimer, setShowTimer] = useState(true)

  return (
    <div style={{ padding: 24 }}>
      <h1>useEffect 예제 4 - cleanup / 언마운트</h1>
      <button onClick={() => setShowTimer((prev) => !prev)}>
        {showTimer ? "타이머 숨기기" : "타이머 보이기"}
      </button>

      {showTimer && <Timer />}
    </div>
  );
}

export default App
