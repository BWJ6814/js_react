import { useState } from "react";
import Notification from "./components/Notification.jsx";

function App() {
  // 🧠 현재 알림 박스를 보여줄지 말지 상태로 관리
  const [show, setShow] = useState(false);

  // 버튼 누르면 true/false 토글
  const toggle = () => {
    setShow((prev) => !prev); // prev: 이전 값
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>🔔 간단한 알림 예제</h1>

      <button
        onClick={toggle}
        style={{
          background: "#007bff",
          color: "white",
          padding: "10px 16px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          marginBottom: "16px",
        }}
      >
        {show ? "알림 숨기기" : "알림 보기"}
      </button>

      {/* show가 true일 때만 Notification 표시 */}
      {show && (
        <Notification
          title="새로운 알림이 있습니다!"
          message="React 공부 너무 잘하고 있음 ㅋㅋ🔥"
        />
      )}
    </div>
  );
}

export default App;
