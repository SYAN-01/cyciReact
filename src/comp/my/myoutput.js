import { useEffect, useState } from "react";

export default function MyOutput() {

    const [메세지, 변경메세지] = useState('');
    const [메세지2, 변경메세지2] = useState('');
    const [메세지3, 변경메세지3] = useState('');
    const [메세지4, 변경메세지4] = useState('');
    const [메세지5, 변경메세지5] = useState('');

    function start() {
        const data = localStorage.getItem('id');
        const data2 = localStorage.getItem('password');
        const data3 = localStorage.getItem('gender');
        const data4 = localStorage.getItem('hobby');
        const data5 = localStorage.getItem('birth');

        if(data !== '' && data !== 'null') {
            변경메세지(data);
            변경메세지2(data2);
            변경메세지3(data3);
            변경메세지4(data4);
            변경메세지5(data5);
        }
    }

    //처음 화면이 마운트 되었을 때 ( java 이벤트 헨들러: onLoad하고 비슷하다. )
    useEffect(() => {
        start();
    }, [])

    return (
        <div>
            <h1>회원가입 정보</h1>
            id: {메세지}<br></br>
            pw: {메세지2}<br></br>
            성별: {메세지3}<br></br>
            취미: {메세지4}<br></br>
            생년: {메세지5}
        </div>
    )
}