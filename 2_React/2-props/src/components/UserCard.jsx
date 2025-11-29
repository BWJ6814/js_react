// src/components/UserCard.jsx
// 사용자 정보를 "props"로 받아 카드 형태로 보여주는 컴포넌트
import Avatar from "./Avartar"

function UserCard({ user, highlight = false }) {
  // 매개변수에서 { user, highlight = false }처럼 "구조 분해 + 기본값" 가능
  // props.user.name 대신 user.name으로 바로 접근 가능

  // JSX 안에서는 {}로 JS 표현식을 넣음
  const cardStyle = {
    border: '1px solid #ddd',
    padding: '12px',
    borderRadius: '10px',
    background: highlight ? '#fffbe6' : '#fff',
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  }

  return (
    <div style={cardStyle}>
      {/* 자식에게 또 props 전달(avatarUrl, alt) */}
      <Avatar src={user.avatarUrl} alt={`${user.name}의 아바타`} size={60} />
      <div>
        <div style={{ fontWeight: 700, fontSize: '18px' }}>{user.name}</div>
        <div style={{ color: '#666' }}>{user.job}</div>
      </div>
    </div>
  )
}

export default UserCard