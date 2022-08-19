import { useEffect, useState } from 'react';
import './App.css';
// import TextInput from './components/TextInput';
// import Article from "./components/Article";
// import Counter from './components/Counter';
// import {Counter,ToggleButton} from './components';


function App(){
  const [name, setName] =useState('')
  const [id, setId] = useState('okushogg')
  const ids = ['okushogg', 'gaearon', 'aws', 'google', 'facebook']
  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)]
    setId(_id)
  }

  useEffect(()=>{
    fetch(`https://api.github.com/users/${id}`)
    .then(res => res.json())
    .then(data=>{
      console.log(data)
      setName(data.name)
    })
    .catch(error =>{
      console.error(error)
    })
  })
  return (
    <div>
      <p>{id}の、GitHub上の名前は{name}です。</p>
      <button onClick={getRandomId}>IDを変更</button>
    </div>
  );
}
// function App(){
//   return (
//     <Article
//       title={'シン・日本一わかりやすいReact入門基礎'}
//       content={'importとexport'} />
//   );
// }
export default App;