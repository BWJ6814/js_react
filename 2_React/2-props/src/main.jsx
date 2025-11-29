import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// JSX를 브라우저에 붙이는 진입파일입니다..

createRoot(document.getElementById('root')).render(
  // <React.StrintMode>는 개발 중 경고/검사를 강화해줌
  <StrictMode>
    <App />
  </StrictMode>,
)
