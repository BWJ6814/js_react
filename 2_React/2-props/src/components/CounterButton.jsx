// src/components/CounterButton.jsx
// 부모가 준 onClick 함수를 "그대로 호출"만 하는 단순 버튼
function CounterButton({ label = '클릭', onClick }) {
  // onClick이 안 오면 에러 방지용 no-op(아무 것도 안 하는 함수)
  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick()
    }
  }

  return (
    <button
      onClick={handleClick} // JSX에서 이벤트는 camelCase (onclick X → onClick O)
      style={{
        padding: '8px 12px',
        borderRadius: '8px',
        border: '1px solid #ddd',
        cursor: 'pointer',
        background: 'white',
      }}
    >
      {label}
    </button>
  )
}

export default CounterButton
