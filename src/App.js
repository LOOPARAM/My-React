//import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

function App() {
  const [counter, SetCounter] = useState(0);
  const [keywords, SetKeywords] = useState("");
  const onClick = () => SetCounter((pre) => pre + 1)
  const onChange = (event) => SetKeywords(event.target.value);
  console.log("I run all the time");
  const iRunOnlyOnce = () => {
    console.log("I run only once");
  }
  useEffect(iRunOnlyOnce, []);
  useEffect(()=>{
    if (keywords.length > 0){
      console.log("Serch for ", keywords);
    }
  },[keywords])
  return (
    <div>
      <input 
        value={keywords}
        onChange = {onChange}
        type = "text"
        laceholder="Serch here ..."></input>
      <h1 className={styles.title}>Welcome Back!</h1>
      <button onClick={onClick}>Click Me! - {counter}</button>
    </div>
  );
}

export default App;
