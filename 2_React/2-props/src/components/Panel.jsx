// src/components/Panel.jsx
// "children"은 열고닫는 태그 사이에 적힌 모든 JSX를 의미
// <Panel>여기에 있는 내용이 children</Panel>


function Panel({ title, children }) {
  return (
    <section style={{ margin: '16px 0', padding: '12px', border: '1px solid #eee', borderRadius: '10px' }}>
      <h2 style={{ marginTop: 0 }}>{title}</h2>  {/* js표현식이라 중괄호 두번넣어야함 */}
      <div>{children}</div>
    </section>
  )
}

export default Panel