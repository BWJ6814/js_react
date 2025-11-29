import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [form, setForm] = useState({
    subscribe:false,
    gender:"male",
    topic:"frontend",
  })

  const handleChange = (e) =>{
    const {name, type, checked, value} = e.target;

    const newValue = type === "checkbox" ? checked:value;

    setForm((prev) => ({
      ...prev,
      [name]:newValue,
    }));
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    alert(JSON.stringify(form,null,2))
  }

  return (
  <main style={{ padding: 24 }}>
      <h1>✅ 체크박스, 라디오, 셀렉트 처리</h1>

      <form onSubmit={handleSubmit}>
        {/* 체크박스 */}
        <div style={{ marginBottom: 8 }}>
          <label>
            <input
              type="checkbox"
              name="subscribe"
              checked={form.subscribe}   // 체크박스는 checked로 제어
              onChange={handleChange}
            />
            뉴스레터 구독
          </label>
        </div>

        {/* 라디오 버튼: 같은 name을 공유해야 그룹이 됨 */}
        <div style={{ marginBottom: 8 }}>
          성별:{" "}
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={form.gender === "male"}
              onChange={handleChange}
            />
            남성
          </label>
          {"  "}
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={form.gender === "female"}
              onChange={handleChange}
            />
            여성
          </label>
        </div>

        {/* select 박스 */}
        <div style={{ marginBottom: 8 }}>
          <label>
            관심 분야:{" "}
            <select
              name="topic"
              value={form.topic}
              onChange={handleChange}
            >
              <option value="frontend">프론트엔드</option>
              <option value="backend">백엔드</option>
              <option value="ai">AI / 머신러닝</option>
            </select>
          </label>
        </div>

        <button type="submit">설문 제출</button>
      </form>

      <hr style={{ margin: "16px 0" }} />

      <h2>현재 상태</h2>
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </main>
  )
}

export default App
