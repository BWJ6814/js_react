import { useState } from "react";
import ProductCard from "./components/ProductCard.jsx";

function App() {
  // 🧠 상품 목록 state
  const [products, setProducts] = useState([
    { id: 1, name: "노트북", price: 1200000, cartCount: 0 },
    { id: 2, name: "스마트폰", price: 980000, cartCount: 0 },
    { id: 3, name: "헤드폰", price: 180000, cartCount: 0 },
  ]);

  // 🛒 장바구니 추가 함수 (상품 하나의 cartCount 증가)
  const addToCart = (id) => {
    const updated = products.map((p) =>
      p.id === id ? { ...p, cartCount: p.cartCount + 1 } : p
    );
    setProducts(updated);
  };

  // 🧾 총 장바구니 개수 계산
  const totalItems = products.reduce((sum, p) => sum + p.cartCount, 0);

  return (
    <div
      style={{
        padding: "20px",             // 전체 여백
        maxWidth: "500px",           // 가운데 폭 제한
        margin: "0 auto",            // 가운데 정렬
        fontFamily: "sans-serif",    // 기본 폰트 설정
      }}
    >
      <h1>🛍️ My React Shop</h1>

      {/* 상품 리스트 출력 */}
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={addToCart} />
      ))}

      {/* 총 개수 표시 */}
      <hr style={{ margin: "20px 0" }} />
      <h3>🛒 총 담은 개수: {totalItems}개</h3>
    </div>
  );
}

export default App;
