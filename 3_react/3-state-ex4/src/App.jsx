import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState("")
  const [todos,setTodos] = useState([
    {id:1, title:"React 설치", done:true},
    {id:2, title:"useState 학습", done:false},
  ])

  const addTodo = () => {
    const title = text.trim()
    if (!title) return      // truthy , falsy  text를 받고선  빈문자열이 아닐때!
      const newTodo = {
        id: Date.now(), // 간단한 고유값
        title,
        done: false,
    }
    setTodos((prev)=>[...prev,newTodo])
    setText("")
  }

  const toggleTodo = (id) => {

    setTodos((prev)=>
      prev.map((t)=>(t.id === id ? {...t,done: !t.done}:t))
    )
  }

  const removeTodo = (id) => {
    setTodos((prev)=>prev.filter((t)=>t.id !==id))
  }



  return (
     <section style={{ marginTop: 24 }}>
      <h2>TodoList (배열/객체 상태)</h2>

      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="할 일 입력"
          style={{ padding: 8 }}
        />
        <button onClick={addTodo} style={{ marginLeft: 8 }}>
          추가
        </button>
      </div>

      <ul style={{ marginTop: 12 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: 8 }}>
            <label style={{ cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(todo.id)}
              />
              <span
                style={{
                  marginLeft: 8,
                  textDecoration: todo.done ? "line-through" : "none",
                  color: todo.done ? "#94a3b8" : "inherit",
                }}
              >
                {todo.title}
              </span>
            </label>
            <button
              onClick={() => removeTodo(todo.id)}
              style={{ marginLeft: 8 }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default App
