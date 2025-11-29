import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyInfo from './MyInfo'
import NowTime from './NowTime'
import NowTimeBtn from './NowTimeBtn'

function App() {
  const name="운조님"

  return (
    <>
    <h2>반가워요 {name}!</h2>
    <MyInfo />
    <NowTime />
    <NowTimeBtn />
    </>
  ); 
}

/* {중괄호}는 JSX에서 JS값 출력 문법 */
// 
export default App
