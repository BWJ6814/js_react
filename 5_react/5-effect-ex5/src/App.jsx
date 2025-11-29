import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react';
import { useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]); // 서버에서 가져온 사용자 목록
  const [loading, setLoading] = useState(true) // 로딩상태
  const [error, setError] = useState(null); // 에러 메세지

  useEffect(() => {
    console.log("사용자 데이터 요청 시작!")
    // 비동기 함수를 effect안에서 바로 async로 만들지 말고
    // 안쪽에 별도 함수로 만드는 패턴이 일방적
    // ⭐ await는 “약속(Promise) 완료될 때까지 잠깐 기다려”
    // ⭐ async는 “이 함수 안에서는 await 쓸 수 있어
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log("사용자 데이터 응답: " + data);

        setUsers(data);  // state에 데이터 저장
        setLoading(false); // 로딩 끝
      } catch (err) {
        setError(err.message); // 에러 메세지 저장
        setLoading(false);
      }
    }
    fetchUsers();
  }, [])

  if(loading){
    return (
      <div style={{ padding: 24 }}>
        <h1>사용자 목록</h1>
        <p>⏳ 데이터를 불러오는 중입니다...</p>
      </div>
    )
  }

    if (error) {
    return (
      <div style={{ padding: 24 }}>
        <h1>사용자 목록</h1>
        <p style={{ color: "red" }}>에러 발생: {error}</p>
      </div>
    );
  }

   return (
    <div style={{ padding: 24 }}>
      <h1>useEffect 예제 5 - API 데이터 가져오기</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: 8 }}>
            <strong>{user.name}</strong> ({user.username}) - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
