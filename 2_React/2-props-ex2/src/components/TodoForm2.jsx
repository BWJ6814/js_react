import { useState } from "react";


function TodoForm({ onAdd }) {

  const [text, setText] = useState("");  

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    onAdd(text);        
    setText("");        
  };

  return (
    // form 형식선언 onSubmit 이라는 이벤트핸들러 안에 handleSumbit 함수넣기
    // 근데 css에서는 onsubmit="handleSubmit" 이런식으로 쓰는거 아닌가? react는 형식이 저거야 ?
    // 그리고 style에는 {{}} 2개의 중괄호로 되어있는데 react는 css형식을 쓸때 두개써야해? 정확한 기준좀 알려줘
    // 내가 html이 약한데 이벤트는 버튼에서 발생하는데 폼에서 onsubmit을 왜써? 폼형태를 제출해야해서?
    // 그러면 왜 텍스트는 이벤트처리를 input 태그안에서 처리해?
    <form onSubmit={handleSubmit} style={{ marginBottom: "16px" }}>
      <input
        type="text"
        value={text}                    
        onChange={(e) => setText(e.target.value)} // 이부분도 자세히 설명좀 
        placeholder="할 일을 입력하세요"
        style={{
          width: "70%",                  
          padding: "8px",                
          border: "1px solid #ccc",     
          borderRadius: "6px",           
          fontSize: "14px",              
        }}
      />
      <button
        type="submit"
        style={{
          marginLeft: "8px",            
          padding: "8px 12px",           
          border: "none",                
          borderRadius: "6px",          
          background: "#007bff",         
          color: "white",               
          cursor: "pointer",             
        }}
      >
        추가
      </button>
    </form>
  );
}

export default TodoForm;
