import LikeButton from "./LikeButton";

function UserCard({ user, onLike }) {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "16px",
    marginBottom: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div style={cardStyle}>
      <div>
        <h2 style={{ margin: "0 0 6px" }}>{user.name}</h2>
        <p style={{ margin: 0, color: "#666" }}>{user.job}</p>
      </div>

      {/* onLike를 LikeButton으로 내려줌 */}
      <LikeButton likes={user.likes} onClick={() => onLike(user.id)} />
    </div>
  );
}

export default UserCard;