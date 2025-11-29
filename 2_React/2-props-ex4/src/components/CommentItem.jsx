function CommentItem({ comment, onLike, onDelete }) {
  const { id, text, likes } = comment;

  return (
    <div
      style={{
        border: "1px solid #ddd",        // 테두리
        padding: "12px",                 // 내부 여백
        borderRadius: "8px",             // 둥근 모서리
        marginBottom: "10px",            // 댓글 사이 간격
        background: "#fafafa",           // 밝은 배경
        display: "flex",                 // 가로 배치
        justifyContent: "space-between", // 양쪽으로 정렬
        alignItems: "center",            // 세로 중앙
      }}
    >
      {/* 왼쪽: 댓글 텍스트 */}
      <span>{text}</span>

      {/* 오른쪽: 버튼들 */}
      <div>
        {/* 좋아요 버튼 */}
        <button
          onClick={() => onLike(id)}
          style={{
            marginRight: "8px",         // 버튼 사이 간격
            padding: "6px 10px",
            background: "pink",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          ❤️ {likes}
        </button>

        {/* 삭제 버튼 */}
        <button
          onClick={() => onDelete(id)}
          style={{
            padding: "6px 10px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          삭제
        </button>
      </div>
    </div>
  );
}

export default CommentItem;
