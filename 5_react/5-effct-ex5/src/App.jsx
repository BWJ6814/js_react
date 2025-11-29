import { useState, useEffect } from "react";

function App() {
  // users : 서버에서 불러온 데이터(배열)를 저장할 변수
  // setUsers : users를 변경하는 함수
  const [users, setUsers] = useState([]);

  // loading : 서버에서 데이터를 가져오는 중인지 표시 (true/false)
  const [loading, setLoading] = useState(true);

  // error : 에러가 발생했을 때 에러 메시지를 저장하는 변수
  const [error, setError] = useState(null);

  /*
    useEffect(() => { ... }, []);
    → 컴포넌트가 화면에 "처음 나타날 때(마운트)" 딱 한 번 실행되는 영역.
    화면이 보이고 난 뒤 실행해야 하는 코드(API 요청 등)를 이 안에 넣음.
  */
  useEffect(() => {
    console.log("📡 사용자 데이터 요청 시작!");

    /*
      fetchUsers = async () => { ... }
      → async는 "비동기 함수"를 만든다는 뜻.

      비동기 = 시간이 오래 걸리는 작업을 기다리지 않고, 
               잠시 뒤에 결과를 받는 방식.

      서버에서 데이터를 가져오는(fetch) 작업은 시간이 걸리므로
      async/await 문법을 사용하면 동기식처럼 코드가 깔끔하게 보임.
    */
    const fetchUsers = async () => {
      /*
        try { ... } catch (err) { ... }

        try 안에 있는 코드를 실행하다가
        문제가 생기면(에러 발생),
        자동으로 catch로 이동함.

        → 안전하게 에러 처리를 하기 위해 자주 사용함.
      */
      try {
        /*
          fetch("URL")
          → 특정 주소(URL)로 요청을 보내서 데이터를 가져오는 함수.

          "이 사이트에 있는 데이터를 좀 주세요!" 하고 요청 보내는 개념.
          fetch는 기다리지 않고 바로 다음 코드를 실행함 → 비동기.

          await fetch(...)
          → "fetch가 데이터를 받아올 때까지 잠깐 기다려!" 라는 의미.
          await는 async 함수 안에서만 사용 가능.
        */
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        /*
          response.ok
          → 요청이 성공했는지(true/false) 알려주는 값.

          정상 요청이면 true  
          서버 오류면 false

          서버에서 404, 500 같은 오류가 뜨면 false가 됨.
        */
        if (!response.ok) {
          // 오류 상황을 개발자가 임의로 만들어서 던짐
          throw new Error("서버에서 오류가 발생했습니다.");
        }

        /*
          response.json()
          → 서버가 보내준 데이터를 "JSON → 자바스크립트 객체"로 바꿔주는 함수.

          이것도 시간이 걸리는 작업이기 때문에 await를 써서 기다림.
        */
        const data = await response.json();
        console.log("✅ 사용자 데이터 응답:", data);

        /*
          setUsers(data);
          → users라는 state에 서버에서 받아온 데이터를 저장.
          → state가 변경되면 화면이 다시 렌더링됨.
        */
        setUsers(data);

        // 로딩이 끝났음을 표시 (loading = false)
        setLoading(false);

      } catch (err) {
        // 위 try{} 안에서 에러가 발생하면 이쪽으로 넘어옴

        console.error("❌ 에러 발생:", err);

        // error state에 에러 메시지를 저장 (화면에서 보여주기 위함)
        setError(err.message);

        // 로딩 중 상태 종료
        setLoading(false);
      }
    };

    // 위에서 만든 비동기 함수 실행
    fetchUsers();
  }, []); // [] = 페이지 처음 로드될 때 딱 1번만 실행됨

  /*
    로딩 중일 때 보여줄 화면
    아직 서버에서 데이터를 받아오지 않았다면 loading = true
  */
  if (loading) {
    return (
      <div style={{ padding: 24 }}>
        <h1>사용자 목록</h1>
        <p>⏳ 데이터를 불러오는 중입니다...</p>
      </div>
    );
  }

  /*
    에러가 발생했을 때만 실행되는 화면
    예) 인터넷이 끊겼을 때, URL이 잘못됐을 때
  */
  if (error) {
    return (
      <div style={{ padding: 24 }}>
        <h1>사용자 목록</h1>
        <p style={{ color: "red" }}>에러 발생: {error}</p>
      </div>
    );
  }

  /*
    loading = false 이고
    error = null 이면 정상 화면을 보여줌
  */
  return (
    <div style={{ padding: 24 }}>
      <h1>useEffect 예제 5 - API 데이터 가져오기</h1>

      <ul>
        {/* 
           users.map(...)
           → users 배열을 돌면서 각 사용자 정보를 li로 만들어 줌

           예)
           [
             {id: 1, name: "홍길동"},
             {id: 2, name: "김철수"}
           ]
           이런 배열이라면 두 개의 li가 만들어짐.

           key={user.id} 는 React가 리스트 구분하는 데 필요함.
        */}
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: 8 }}>
            <strong>{user.name}</strong> ({user.username}) - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
