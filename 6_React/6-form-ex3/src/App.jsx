import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,   // 기존 필드들 유지
      [name]: value  // name 키만 value로 덮어쓰기
      ,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim()) {
      alert("이름과 이메일은 필수입니다!")
      return;
    }

    alert(
      `제출!\n이름: ${form.name}\n이메일: ${form.email}\n나이: ${form.age}`
    );

  }



  return (
     <main style={{ padding: 24 }}>
      <h1>🧾 여러 input 한 번에 관리하기</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 8 }}>
          {/* name 속성이 키 역할을 함 */}
          <label>
            이름:{" "}
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </label>
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>
            이메일:{" "}
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </label>
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>
            나이:{" "}
            <input
              name="age"
              value={form.age}
              onChange={handleChange}
            />
          </label>
        </div>

        <button type="submit">제출</button>
      </form>

      <hr style={{ margin: "16px 0" }} />

      <h2>📌 현재 form state</h2>
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </main>
  );
}

export default App
