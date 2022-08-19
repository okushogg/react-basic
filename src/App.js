import './App.css';
// import TextInput from './components/TextInput';
// import Article from "./components/Article";
// import Counter from './components/Counter';
import {Counter,ToggleButton} from './components';


function App(){
  return (
    <div>
      <Counter />
      {/* <ToggleButton /> */}
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