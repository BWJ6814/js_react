import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './component/ProductList'

/*
⭐ 즐겨찾기 토글 리스트
[전체 보기] [즐겨찾기만 보기]

🍎 사과 – 3000원      ⭐
🍌 바나나 – 2000원    ⭐
🥕 당근 – 1500원      ⭐

(⭐ 누르면 노란색이 됨)

상태는 부모(App)가 관리해야 한다

props는 읽기 전용 → 절대 수정하면 안 됨

state는 절대 직접 수정 X → setState 사용

map에는 반드시 return 필요

필터링은 ProductList에서 처리

props 3개 (products, category, onToggle) 필수로 넘겨야 함


*/

function App() {
  const [category, setCategory] = useState("전체보기")
  const [products,setProducts] = useState([
    { id: 1, name: "사과", price: 3000, isFav: false },
    { id: 2, name: "바나나", price: 2000, isFav: false },
    { id: 3, name: "당근", price: 1500, isFav: false },
  ])

  const onclickStyle = (clicked) => ({
    background : clicked ? "lightblue" : ""
  })


  // 즐겨찾기 토글함수
  const toggleFav = (id) =>{
    setProducts(products.map((p)=>{
      p.id === id ? {...p, isFav : !p.isFav} : p
    }) 

    )
  }


  return (
    <div>
      ⭐ 즐겨찾기 토글 리스트<br />
      <button style = {onclickStyle(category === "전체보기")} onClick={() => {setCategory("전체보기")}}>전체보기</button>
      <button style = {onclickStyle(category === "즐겨찾기 보기")} onClick={() => {setCategory("즐겨찾기 보기")}}>즐겨찾기 보기</button><br />
       <ProductList />
    </div>
  )
}

export default App

