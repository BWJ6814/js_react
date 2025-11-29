
/*
┌──────────────────────────────────────────┐
│ 💬 댓글 리스트                            │
│------------------------------------------│
│ [ 댓글을 입력하세요............... ] [등록] │
│------------------------------------------│

│ 첫 댓글입니다!                        ❤️ 0 [삭제]
│------------------------------------------│

│ 리액트 공부중이에요 😎                 ❤️ 0 [삭제]
│------------------------------------------│
└──────────────────────────────────────────┘

id 
*/
// 상태관리가 필요한 댓글 텍스트랑 삭제할 때 필요한 id , 좋아요

import { useState } from "react";
import CommentForm from "./components/CommentForm.jsx";
import CommentItem from "./components/CommentItem.jsx";

function App() {
  // 🧠 댓글 리스트 state
  const [comments, setComments] = useState([
    { id: 1, text: "첫 댓글입니다!", likes: 0 },
    { id: 2, text: "리액트 공부중이에요 😎", likes: 0 },
  ]);

  const [id, setId] = useState(3); // 다음 댓글 id

  // ✏️ 댓글 추가 함수
  const addComment = (text) => {
    if (text.trim() === "") return alert("내용을 입력해주세요!");

    const newComment = { id, text, likes: 0 };
    setComments([...comments, newComment]); // 기존 배열 복사 + 새 댓글 추가
    setId(id + 1);
  };

  // ❤️ 좋아요 증가 함수
  const likeComment = (id) => {
    const updated = comments.map((c) =>
      c.id === id ? { ...c, likes: c.likes + 1 } : c
    );
    setComments(updated);
  };

  // ❌ 댓글 삭제
  const deleteComment = (id) => {
    const updated = comments.filter((c) => c.id !== id);
    setComments(updated);
  };

  return (
    <div
      style={{
        maxWidth: "500px",         // 전체 넓이 제한
        margin: "0 auto",          // 가운데 정렬
        padding: "20px",           // 안쪽 여백
        fontFamily: "sans-serif",  // 폰트
      }}
    >
      <h1>💬 댓글 리스트</h1>

      {/* 댓글 입력 폼 */}
      <CommentForm onAdd={addComment} />

      {/* 댓글 목록 */}
      {comments.map((c) => ( // comment 배열안에 있는 "각 댓글 객체"하나가 c
        <CommentItem
          key={c.id}  // div 각요소를 구분할 유일한 값이 필요 이게 key 변수로 사용하지 않고 오직 react내부에서만 사용
                     // props로 전달되지 않음
          comment={c}
          onLike={likeComment}
          onDelete={deleteComment}
        />
      ))}
    </div>
  );
}

export default App;
