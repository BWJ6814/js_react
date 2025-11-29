import { useState } from "react";

import TodoItem from "./components/TodoItem.jsx";
import TodoForm from "./components/TodoForm.jsx";

function App() {
  // todo리스트를 만드는 홈페이지를 위한 코드입니다.
  // 해야할일을 추가하고 삭제해야하기 때문에 상태관리가 필요함(자식요소에게 porps 전달해야함)
  // 그래서 useState를 사용해보자
  // 일단은 해야할 일을 추가 삭제 하기 위해 todo 리스트를 관리하는 [todos, setTodos] 배열구조분해?로 변수를 만들고
  // 그변수안에는 useState로 값을 넣는다 근데 useState는 값을 넣는 변수(지금 코드에서는 todos)와
  // todos 값을 변경하는 함수(지금 코드에서는 setTodos)를 리턴함 
  // 그래아래에 있는 [id, setId]는 todo리스트를 추가 삭제를 위해 만든 리스트하나하나에 id값을 부여하기위한
  // 배열구조분해? 이다(정확한 표현좀 알려줘)
  const [todos, setTodos] = useState([]);                   
  const [id, setId] = useState(1);                          

  /*아래는 사용자가 작성한 텍스트를 받았을 때 처리할 함수내용 
    텍스트가 비어있는지 먼저 확인을한다 text.trim 부분
    newTodo 라는 객체를 만든다  객체형태지만 {id, text} 으로 표현 된거는 키값이랑 벨류값이 같다는 표현(정확한 단어좀)
    여기서 헷갈리는게 있는데 id는 아직 받지를 않았는데 왜 썻는지 위에 선언한 전변변수 [id, setId]에 id 사용하는듯?
    그리고 todos 값을 변경하기위해 spread로 todos안에 newTodo 추가! 그러면 현제 todos는
    {id:id, text:text} 상태라고 보면되는건가 ?
    그리고나서 id값 변경을 위해 id+1 해줌 (각 리스트마다 고유 id가 생기는거)
  */ 
  const addTodo = (text) => {
    if (text.trim() === "") return alert("내용을 입력하세요!");
    const newTodo = { id, text };
    setTodos([...todos, newTodo]);
    setId(id + 1); 
  };
  /*
    deleteTodo는 아래주석보면서 설명하지말아줘 생각 더 해보려고
    삭제할때는 id값을 받아서 하는데
    filter()는 조건에 맞는 요소를 제거해서 새로운 배열을 반환하는거임
    updated라는 변수에 값을 할당해야하는데 filter() 안에 매개변수는 어떠한 조건이 들어가야겠지?
    그래서 불린값을 리턴하는 함수를 넣어놨음 매개변수 t를 받고(t가 뭔지는 모르겠음 아마 함수호출하는 곳에서 
    봐야하는데 t.id 있는거 보면 todos같은 객체형 배열일듯?)
    무튼 매개변수로 받은 t의 id와 현재 id가 같지않다면 ?? 음 .. 이부분 헷갈린다
    
    
  */
  
  const deleteTodo = (id) => {
    const updated = todos.filter((t) => t.id !== id);
    setTodos(updated);
  };

  return (
    <div
      style={{
        padding: "20px",          
        maxWidth: "400px",       
        margin: "0 auto",         
      }}
    >
      <h1>📝 Todo List</h1>

      {/* 만들어 놓은 todoForm컴포넌트에 프로퍼티를 보내주는 부분이고 프로퍼티는 useState로 생성한 함수 addTodo
      임 프로퍼티를 넘기려면 {}를 써야함  */}      
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