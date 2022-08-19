import React, {useState} from 'react';
import { useEffect } from 'react';

const ToggleButton = () => {
  const[open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(preState => !preState)
  }

  // ToggleButtonコンポーネントがレンダリングされるたびに実行
  useEffect(()=>{
    console.log('Current state is', open)
    if(open) {
      console.log('Subscribe Database')
    }
    // クリーンアップ関数
    return () =>{
      console.log('Unsubscribe Database')
    }
  })

  return(
    <button onClick={toggle}>
      {open ? 'OPEN': 'CLOSE'}
    </button>
  );
};

export default ToggleButton