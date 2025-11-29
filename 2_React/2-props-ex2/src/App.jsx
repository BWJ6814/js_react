import { useState } from "react";

import TodoItem from "./components/TodoItem.jsx";
import TodoForm from "./components/TodoForm.jsx";

function App() {
  // 🧠 todos: 할 일 목록을 저장하는 state
  const [todos, setTodos] = useState([]);    // useState가 리턴하는 값을 넣기위해 배열구조 분해할당               
  // 🧠 id: 각 할 일을 구분하기 위한 고유 번호
  const [id, setId] = useState(1);                          

/*
1.text가 비어있는지 검사
2. 비어 있으면 경고(alert) 띄우고 함수 종료
3. 비어 있지 않으면 { id, text } 형태의 새 todo 객체 생성
4. 기존 todos 배열 뒤에 이 객체를 붙인 새 배열을 만들어서 setTodos로 상태 업데이트
5. 다음에 쓸 id를 위해 id 값을 1 증가
*/  

  const addTodo = (text) => {
    if (text.trim() === "") return alert("내용을 입력하세요!");
    const newTodo = { id, text };  // 객체 축약표현 현재 id값을 저장한 state의 현재값
    // 이 id는 컴포넌트(App)안에서 공유되는 State 값이야 (클로저)
                                   // react 컴포넌트는 랜더링 될때 이값을 기억하고 있다
    // 기존 배열(todos)을 복사하고 새 객체 추가 (불변성 유지!)
    setTodos([...todos, newTodo]);
    setId(id + 1); // id 증가
  };

  // ✨ 특정 할 일 삭제 함수
  const deleteTodo = (id) => {
    // filter()는 조건에 맞는 요소만 남겨서 새 배열 반환
    const updated = todos.filter((t) => t.id !== id);
    setTodos(updated);
  };
// jsx에서 문자열이 아닌 js 값을 넘길 때는 {}로 감싸야함 addTodo는 함수라 {}
  return (
    <div
      style={{
        padding: "20px",          // 전체 여백 20px
        maxWidth: "400px",        // 화면 너비 최대 400px
        margin: "0 auto",         // 화면 가운데 정렬 (좌우 auto)
      }}
    >
      <h1>📝 Todo List</h1>

      {/* ✨ 입력창 + 추가버튼 */}
      <TodoForm onAdd={addTodo} />

      {/* ✨ 할 일 목록 */}
      <ul
        style={{
          padding: 0,             // 기본 ul 안쪽 여백 제거
          listStyle: "none",      // 기본 ● 리스트 점 없애기
        }}
      >
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export default App;