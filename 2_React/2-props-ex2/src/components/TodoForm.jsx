import { useState } from "react";

function TodoForm({ onAdd }) {  // {}는 객체 구조 분해임  {onAdd: addTodo 함수}
  // 부모컴포넌트가 넘겨준 props 객체에서 필요한 onAdd 프로퍼티만 구조분해할당으로 꺼내온것
  // {onAdd} 선언하면 onAdd를 쓸수 있는데 const onAdd = props.onAdd; 랑 같음
  // 입력창에서 입력한 내용을 저장
  const [text, setText] = useState(""); // 이 컴포넌트 안에서 바뀌는 값 을 만들때 쓰는 함수
  // 텍스트를 입력할때마다 저장하기 위해 선언
  // 배열구조 분해 할당 useState("")는 ["",함수]을 리턴함 

  // 폼 제출 시 실행
  const handleSubmit = (e) => { // e는 이벤트 객체 폼이 제출될 때 브라우저/React가 handleSubmit을 부르면서
    // "이번에 일어난 이벤트 정보"를 e에 담아서 넘김

    e.preventDefault(); // 기본 폼 새로고침 막기 , 이벤트객체 e의 메서드 
    // SPA(리액트 앱)에서는 새로고침 하지말고, JS로만 처리하고 싶다
    // -> 그래서 PRE..로 기본동작(새로고침)을 막는것
    onAdd(text);        // 부모(App)에게 text 전달  / addTodo(text) 호출
    // 부모 컴포넌트(App)가 새로운 state로 다시 렌더링됨
    // 그래서 화면에 새로운 할 일(todo)이 보이는거
    // 즉 부모가 준함수(addTodo)를 호출하면서, 자식이 가진 입력값(text)을 부모에게 넘겨주는거
    // 데이터 흐름)   입력창 → TodoForm(text state) → onAdd(text) → App의 addTodo → 
    // // todos state 업데이트 → 화면 렌더링
    setText("");        // 입력창 비우기
  };

  return (
    
    <form onSubmit={handleSubmit} style={{ marginBottom: "16px" }}>
      {/*엔터를 치거나 버튼 type = submit을 누르면 handlesumit 실행*/}
      
      <input
        type="text"
        value={text}                     // 입력창에 현재 state값 표시
        onChange={(e) => setText(e.target.value)} // 사용자가 입력 할 때마다 e.target.value(현재 입력된 문자열)
                                                      // 을 state 에 저장
        placeholder="할 일을 입력하세요"
        style={{
          width: "70%",                  // 입력창 너비 70%
          padding: "8px",                // 안쪽 여백 8px
          border: "1px solid #ccc",      // 연한 회색 테두리
          borderRadius: "6px",           // 모서리 둥글게 6px
          fontSize: "14px",              // 글자 크기 14px
        }}
      />
      <button
        type="submit"
        style={{
          marginLeft: "8px",             // 입력창과 버튼 사이 여백
          padding: "8px 12px",           // 세로 8px, 가로 12px 안쪽 여백
          border: "none",                // 기본 테두리 제거
          borderRadius: "6px",           // 둥근 모서리
          background: "#007bff",         // 파란색 배경 (#007bff는 bootstrap 기본색)
          color: "white",                // 흰색 글씨
          cursor: "pointer",             // 마우스 올리면 손모양 커서
        }}
      >
        추가
      </button>
    </form>
  );
}

export default TodoForm;
