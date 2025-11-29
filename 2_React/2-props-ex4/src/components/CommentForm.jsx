import { useState } from "react";

function CommentForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();   // 기본 새로고침 막기
    onAdd(text);          // 부모(App)에게 입력된 text 전달
    setText("");          // 입력창 비우기
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "16px" }}>
      {/* 입력창 */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}  // 입력할 때마다 state 변경
        placeholder="댓글을 입력하세요"
        style={{
          width: "75%",               // 입력창 넓이
          padding: "8px",             // 안쪽 여백
          border: "1px solid #ccc",   // 테두리
          borderRadius: "6px",        // 둥근 모서리
        }}
      />

      {/* 등록 버튼 */}
      <button
        type="submit"
        style={{
          marginLeft: "8px",           // 입력창과 간격
          padding: "8px 12px",         // 버튼 안쪽 여백
          background: "#007bff",       // 파란 배경
          color: "white",              // 흰 글자
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        등록
      </button>
    </form>
  );
}

export default CommentForm;
