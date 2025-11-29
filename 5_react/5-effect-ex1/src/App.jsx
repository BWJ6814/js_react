import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    //[] 이기 때문에 컴포넌트가 "처음 나타날 때" 딱 한 번만 실행
    console.log("App 컴포넌트가 마운드 되었습니다.");
  }, []) // 의존형 배열 마운트 시 1번만..

  return (
    <div style={{padding:24}}>
      <h1>useEffcet 기본예제 1</h1>
      <p>콘솔을 열어보면 마운드 시 메세지가 딱 1번 찍힙니다.</p>

    </div>

  )
}

export default App
