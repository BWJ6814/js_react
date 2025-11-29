import { useState } from "react";
import "./App.css"; // CSS 파일 불러오기
import { use } from "react";

function App() {
  const [text, setText] = useState("") // input에 입력 초기 값은 빈문자열..
  const [submittedText, setSubmittedText] = useState("")

  const handleChange = (e) => {
    setText(e.target.value); // 입력중인 텍스트 state 업데이트
  }
  // form 제출시 실행되는 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();

    // 빈문자열이면..
    if (!trimmed) {
      alert("내용을 입력하세요!")
      return;
    }
    setSubmittedText(trimmed);
    setText("")
  }



  return (
    <div className="app">
      <h1>React 폼 & 이벤트 연습 ✏️</h1>

      {/* form 태그 : onSubmit으로 엔터/버튼 두 가지 모두 처리 */}
      <form onSubmit={handleSubmit} className="form">
        <label className="label">
          메모를 입력하세요
          <input
            type="text"
            className="input"
            value={text}          // ✅ state와 연결 (Controlled input)
            onChange={handleChange} // ✅ 입력이 바뀔 때마다 state 업데이트
            placeholder="예: 오늘 리액트 공부함 ㅋㅋ"
          />
        </label>

        <button type="submit" className="button">
          저장하기
        </button>
      </form>

      {/* 제출된 텍스트 보여주는 영역 */}
      <div className="result-box">
        <h2>마지막 입력값</h2>
        {/* submittedText가 비었으면 안내 문구, 있으면 그 내용 */}
        {submittedText ? (
          <p className="result-text">✨ {submittedText}</p>
        ) : (
          <p className="placeholder-text">아직 저장된 내용이 없습니다.</p>
        )}
      </div>
    </div>
  );
}
export default App;