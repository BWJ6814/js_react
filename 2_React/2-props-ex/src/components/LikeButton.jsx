function LikeButton({ likes, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "white",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "8px 12px",
        cursor: "pointer",
      }}
    >
      ❤️ 좋아요 {likes}
    </button>
  );
}

export default LikeButton;