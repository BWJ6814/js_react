import { useState } from "react";
// 리액트의 햄심 - 상태(state) 관리와 이벤트처리
// useState는 리액트가 제공하는 훅(hook) 중 하나
// 리액트 컴포넌트는 기본적으로 함수지만 
// 함수안에서 데이터를 저장하고 바뀌면 자동으로 화면을 다시 그려주는 기능을 하려면
// useState를 사용해야함
function NowTimeBtn() {
    // 배열구조분해 문법
    // useState는 배열 [현재값, 값변경함수] 형태를 반환함
    const [time,setTime] = useState(new Date().toLocaleTimeString());

    const updateTime = () =>{ // react에게 상태를 업데이트하라고 명령
        setTime(new Date().toLocaleTimeString())   
    }; // 새로운 값을 매개변수로 받아서 상태를 새로운 값으로 교체하고, 화면을 다시 랜더링 시킨다

    return(
        <div>
            <p>현재시각 : {time}</p>
            <button onClick={updateTime}>시간 새로고침</button>
        </div>
    );
}

export default NowTimeBtn;