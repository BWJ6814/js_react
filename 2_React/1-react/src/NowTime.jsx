

function NowTime() {
    const time = new Date().toLocaleTimeString();
    return <p>현재시간은 {time}</p>
}

export default NowTime