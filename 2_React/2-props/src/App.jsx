import { useState } from 'react'
import UserCard from './components/UserCard'
import Panel from './components/Panel'
import CounterButton from './components/CounterButton'

function App() {
  // ✅ state: 이 컴포넌트 안에서 바뀌는 값
  // 배열 구조 분해: time은 현재 값, setTime은 값을 바꾸는 함수
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  // 함수도 props로 내려줄 수 있음(자식이 버튼 클릭 시 부모 state 변경)
  const updateTime = () => {
    setTime(new Date().toLocaleTimeString())
  }

  // 화면에 그릴 "예제 데이터"
  const user = {
    name: '홍길동',
    job: 'Frontend Developer',
    avatarUrl: 'https://i.pravatar.cc/120?img=12',
  }

  return (
    <>
      <h1>React 컴포넌트 & Props 기초</h1>

      {/* Panel은 children을 받아서 박스로 감싸주는 "레이아웃 컴포넌트" */}
      <Panel title="1) UserCard: 부모 → 자식 데이터 전달">
        {/* UserCard에 user 객체를 props로 전달 */}
        <UserCard user={user} highlight />
      </Panel>

      <Panel title="2) CounterButton: 부모 state/함수 내려주기">
        {/* time과 updateTime 함수를 props로 전달 */}
        <p>현재 시각: <strong>{time}</strong></p>
        <CounterButton label="시간 새로고침" onClick={updateTime} />
      </Panel>
    </>
  )
}

export default App