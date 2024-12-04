import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function MyInput() {

  const [idp, setIdp] = useState('');
  const [passwdp, setPasswdp] = useState('');
  const [gender, setGender] = useState('');
  const [sel, setSel] = useState('2000');
  const [hobby, setHobby] = useState([]);
  const navigate = useNavigate();

  const hobbyList = [
    {
      name: '축구'
    },
    {
      name: '농구'
    }, {
      name: '야구'
    }
  ]

  function changeGender(e) {
    setGender(e.target.value);
    console.log('변경 된 값: ', gender);
  }

  function handleHobby(e) {
    if (hobby.includes(e.target.value)) {
      setHobby(
        hobby.filter(item => item !== e.target.value)
      )
    }
    else {
      setHobby([...hobby, e.target.value]);
    }
  }

  return (
    <div className="App">

      <input type='text' placeholder='id' value={idp} onChange={
        e => setIdp(e.target.value)
      }/>
      <br></br>

      <input type='text' placeholder='password' value={passwdp}  onChange={
        e => setPasswdp(e.target.value)
      }/>
      <br></br>

      <input
        type='radio'
        name='gender'
        value='남'
        onChange={
          e => changeGender(e)
        } />남
      <input
        type='radio'
        name='gender'
        value='여'
        onChange={
          e => changeGender(e)
        } /> 여
      <br></br>

      {hobbyList.map((item, index) => (
        <div key={index}>
          <input
            type='checkbox'
            value={item.name}
            checked={hobby.includes(item.name)}
            onChange={handleHobby}
          />{item.name}
        </div>
      ))
      }

      <select onChange={
        e => { setSel(e.target.value) }
      }>
        <option value='2000'>2000</option>
        <option value='2001'>2001</option>
        <option value='2002'>2002</option>
        <option value='2003'>2003</option>
        <option value='2004'>2004</option>
        <option value='2005'>2005</option>
        <option value='2006'>2006</option>
      </select>

      <br></br>
      <input
        type="button"
        value="결과 확인"
        onClick={
          () => {
            console.log(`id: ${idp}`);
            console.log(`password: ${passwdp}`);
            console.log(`gender: ${gender}`);
            console.log(`hobby: ${hobby}`);
            console.log(`birth  : ${sel}`);

            localStorage.setItem('id', idp);
            localStorage.setItem('password', passwdp);
            localStorage.setItem('gender', gender);
            localStorage.setItem('hobby', hobby);
            localStorage.setItem('birth', sel);
            navigate('/myoup');
          }
        }
      ></input>
    </div>
  );
}


