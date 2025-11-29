function ProductList({ products, category, onToggle }) {

  // 🧠 필터링 로직
  const filtered =
    category === "전체보기"
      ? products
      : products.filter((p) => p.isFav);

  return (
    <div style={{ marginTop: "20px" }}>
      {filtered.map((p) => (
        <div
          key={p.id}
          style={{
            background: "#f5f5f5",
            margin: "10px 0",
            padding: "10px",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>
            {p.name} - {p.price}원
          </span>

          {/* ⭐ 즐겨찾기 버튼 */}
          <button
            onClick={() => onToggle(p.id)}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              fontSize: "20px",
              color: p.isFav ? "gold" : "#aaa",
            }}
          >
            ⭐
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
