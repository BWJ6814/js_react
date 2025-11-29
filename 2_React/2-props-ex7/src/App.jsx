import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 버튼을 클릭하면 아래 텍스트가 나타난다
// 버튼 = 자식, 텍스트지역 //  버튼이 눌렸는지 안눌렸는지

function App() {
  const [isClick, setIsClick] = useState(false)

  return (
    <div>
      <span>프로필 박스 예제</span>

    </div>
  )
}

export default App
