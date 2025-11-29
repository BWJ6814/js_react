import { useState } from "react";
import FAQItem from "./components/FAQItem.jsx";

function App() {
  // 🧠 어떤 FAQ가 펼쳐져 있는지 상태로 관리
  const [openId, setOpenId] = useState(null); 
  // null이면 아무것도 안 열려 있는 상태

  // FAQ 목록 데이터
  const faqs = [
    { id: 1, question: "React란 무엇인가요?", answer: "UI를 만들기 위한 JS 라이브러리!" },
    { id: 2, question: "props는 뭐에요?", answer: "부모가 자식에게 전달하는 데이터!" },
    { id: 3, question: "state는 뭐에요?", answer: "컴포넌트 안에서 바뀌는 값!" },
  ];

  // 클릭 시 특정 FAQ를 열거나 닫음
  const toggle = (id) => {
    // 같은 걸 다시 누르면 접힘
    if (openId === id) setOpenId(null);   
    else setOpenId(id); 
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "500px", margin: "0 auto" }}>
      <h1>❓ 간단한 FAQ 아코디언</h1>

      {faqs.map((item) => (
        <FAQItem
          key={item.id}
          item={item}          // 해당 FAQ 객체 전달
          isOpen={openId === item.id}   // 지금 이 FAQ가 열렸는지 여부
          onToggle={toggle}    // 클릭했을 때 실행할 함수
        />
      ))}
    </div>
  );
}

export default App;
