function TodoItem({ todo, onDelete }) {
  return (
    <li
      style={{
        border: "1px solid #eee",       // 옅은 회색 테두리
        padding: "10px 12px",           // 위아래 10px, 좌우 12px 여백
        marginBottom: "8px",            // 각 아이템 간격 8px
        borderRadius: "8px",            // 둥근 모서리
        display: "flex",                // flex로 가로 정렬
        justifyContent: "space-between",// 왼쪽(텍스트)과 오른쪽(버튼) 간격 띄우기
        alignItems: "center",           // 세로 중앙 정렬
      }}
    >
      {/* 왼쪽: 할 일 텍스트 */}
      <span>{todo.text}</span>

      {/* 오른쪽: 삭제 버튼 */}
      <button
        onClick={() => onDelete(todo.id)}
        style={{
          border: "none",               // 기본 테두리 제거
          background: "red",            // 배경 빨강
          color: "white",               // 글자 흰색
          borderRadius: "6px",          // 모서리 둥글게
          padding: "6px 10px",          // 안쪽 여백
          cursor: "pointer",            // 클릭 가능 손가락 모양
        }}
      >
        삭제
      </button>
    </li>
  );
}

export default TodoItem;
