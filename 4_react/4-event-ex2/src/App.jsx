// src/App.jsx
import { useState } from "react";
import "./App.css";

function App() {
  // 각각의 입력값을 관리하는 state
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // 사람 목록을 저장할 state (배열)
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedAge = age.trim();

    if (!trimmedName || !trimmedAge) {
      alert("이름과 나이를 모두 입력하세요!");
      return;
    }

    // 새 사람 객체 생성
    const newPerson = {
      id: Date.now(),    // 간단한 고유 번호 (timestamp)
      name: trimmedName, // 이름 문자열
      age: trimmedAge,   // 나이 (지금은 문자열로 둬도 됨)
    };

    // 기존 people 배열 + 새 사람
    // ...people : 기존 배열을 풀어서 넣기 (스프레드 문법)
    setPeople([...people, newPerson]);

    // 입력창 비우기
    setName("");
    setAge("");
  };

  return (
    <div className="app">
      <h1>간단 방명록 📖</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          className="input"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)} // 화살표함수로 바로 처리
        />
        <input
          type="number"
          className="input"
          placeholder="나이"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit" className="button">
          추가
        </button>
      </form>

      <div className="result-box">
        <h2>방명록 목록</h2>
        {people.length === 0 ? (
          <p className="placeholder-text">아직 등록된 사람이 없습니다.</p>
        ) : (
          <ul>
            {people.map((person) => (
              <li key={person.id}>
                {/* 템플릿 문자열로 예쁘게 출력 */}
                {person.name} ({person.age}세)
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
