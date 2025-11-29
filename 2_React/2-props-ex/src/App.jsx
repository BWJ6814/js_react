import { useState } from "react";
import UserCard from "./components/UserCard.jsx";

function App() {
  // 여러 유저 데이터(state로 관리)
  const [users, setUsers] = useState([
    { id: 1, name: "홍길동", job: "Frontend Developer", likes: 0 },
    { id: 2, name: "김민수", job: "Backend Engineer", likes: 0 },
    { id: 3, name: "이영희", job: "UI Designer", likes: 0 },
  ]);

  // 특정 유저의 likes 증가시키기
  const handleLike = (id) => {
    // map으로 새로운 배열 생성 (기존 데이터 불변성 유지)
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, likes: user.likes + 1 } : user
    );  // user 객체를 새로 복사해서 상태를 변화(user.likes+1)
    // state 갱신
    setUsers(updatedUsers);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>👥 사용자 카드 리스트</h1>
      {users.map((user) => (
        <UserCard key={user.id} user={user} onLike={handleLike} />
      ))}
    </div>
  );
}

export default App;