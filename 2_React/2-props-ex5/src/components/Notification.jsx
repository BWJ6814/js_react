function Notification({ title, message }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",    // 연한 테두리
        padding: "16px",             // 내부 여백
        borderRadius: "10px",        // 둥근 모서리
        background: "#fffbe6",       // 옅은 노란 배경
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)", // 그림자
        maxWidth: "350px",
      }}
    >
      <h2 style={{ marginTop: 0 }}>🔔 {title}</h2>
      <p style={{ marginBottom: 0 }}>{message}</p>
    </div>
  );
}

export default Notification;
