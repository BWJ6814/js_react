// src/components/Avatar.jsx
// 단일 책임: 이미지(아바타) 보여주기
function Avatar({ src, alt = '사용자 아바타', size = 48 }) {
  // size 같은 숫자 props로 스타일 계산 가능
  // alt 기본값처럼 "기본 파라미터"로 default props를 간단히 처리 가능
  const style = {
    width: size,
    height: size,
    borderRadius: '50%',
    objectFit: 'cover',
    border: '1px solid #ddd',
  }

  // src가 없으면 대체 UI 보여주기(조건부 렌더링)
  if (!src) {
    return (
      <div style={{ ...style, display: 'grid', placeItems: 'center', color: '#999' }}>
        N/A
      </div>
    )
  }

  return <img src={src} alt={alt} style={style} />
}

export default Avatar
