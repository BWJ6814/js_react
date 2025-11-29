import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    // 기본 폼 제출 동작(새로고침) 막기
    e.preventDefault();

    // 간단 유효성 검사
    if (!id.trim() || !pw.trim()) {
      setError("아이디와 비밀번호를 모두 입력해주세요..");
      return; // 여기서 함수 종료
    }

    setError("");
    alert(`로그인 시도\n아이디: ${id}\n비밀번호: ${pw}`);
    
  };

  return (
    <main style={{ padding:24 }}>
      <h1>🔐로그인 폼 예제</h1>

      <form onSubmit={handleSubmit}>
        <div style={{marginBottom:8}}>
          <label>
            아이디:{" "}
            <input type="text" value={id}
            onChange={(e)=> setId(e.target.value)}/>
          </label>
        </div>

        <div style={{marginBottom:8}}>
          <label>
            비밀번호:{" "}
            <input type="text" value={pw}
            onChange={(e)=> setPw(e.target.value)}/>
          </label>
        </div>

        {error && (
          <p style={{ color: "red", marginBottom: 8 }}>{error}</p>
        )}

        <button type='submit'>로그인</button>
      </form>
    </main>
  )
}

export default App
