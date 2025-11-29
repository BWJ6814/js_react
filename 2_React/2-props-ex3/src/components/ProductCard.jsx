function ProductCard({ product, onAdd }) {
  // props로 받은 product 객체를 구조분해
  const { id, name, price, cartCount } = product;

  return (
    <div
      style={{
        border: "1px solid #ddd",       // 연한 테두리
        borderRadius: "10px",           // 둥근 모서리
        padding: "16px",                // 내부 여백
        marginBottom: "12px",           // 카드 사이 간격
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // 그림자
        background: "#fff",             // 배경 흰색
      }}
    >
      {/* 상품명 */}
      <h2 style={{ margin: "0 0 8px" }}>📦 {name}</h2>

      {/* 가격 (3자리마다 콤마 추가) */}
      <p style={{ margin: "4px 0", color: "#555" }}>
        💰 {price.toLocaleString()}원
      </p>

      {/* 장바구니 버튼 */}
      <button
        onClick={() => onAdd(id)}        // 부모의 addToCart 호출
        style={{
          background: "#007bff",        // 파란색 배경
          color: "white",               // 흰 글씨
          border: "none",               // 테두리 없음
          padding: "8px 12px",          // 여백
          borderRadius: "6px",          // 둥근 모서리
          cursor: "pointer",            // 손가락 모양 커서
          marginTop: "8px",             // 위쪽 간격
        }}
      >
        🛒 장바구니 담기 ({cartCount})
      </button>
    </div>
  );
}

export default ProductCard;
