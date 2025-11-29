function FAQItem({ item, isOpen, onToggle }) {
  const { id, question, answer } = item;

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        marginBottom: "10px",
        background: "white",
        cursor: "pointer",
      }}
      onClick={() => onToggle(id)}  // 클릭 시 부모로 id 전달!
    >
      {/* 질문 영역 */}
      <h3 style={{ margin: "0 0 8px" }}>
        {question}
      </h3>

      {/* 답변 : isOpen이 true일 때만 표시 */}
      {isOpen && (
        <p
          style={{
            margin: 0,
            color: "#555",
            background: "#fafafa",
            padding: "10px",
            borderRadius: "6px",
          }}
        >
          {answer}
        </p>
      )}
    </div>
  );
}

export default FAQItem;
