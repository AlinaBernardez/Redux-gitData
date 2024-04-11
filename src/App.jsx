import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from './redux/userSlice';
import Card from './components/Card';
import './App.css'

const url = 'https://api.github.com/users/'

function App() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.usu)
  const [text, setText] = useState("")
  const [errorMessage, setMessage] = useState('')

  const fetchUser = async() => {
    try {
      const response = await fetch(url + text)
      if(!response.ok) (
        setMessage('User not found!!')
      )
      const json = await response.json()
      if(text.trim() !== '') {
        dispatch(addUser(json))
        setText('')
      }
    } 
    catch (err) {
      console.log(err)
    }
  }



  return (
  <>
  <input type='text' placeholder='Busca por nombre de usuario' value={text} onChange={ e => setText(e.target.value)} />
  <button onClick={() => fetchUser(text)}>Buscar</button>
  {user ? <Card user={user}/> : (<p>Introduce un nombre</p>)}
  {errorMessage && <p>{errorMessage}</p>}
  </>
  );
}

export default App;
