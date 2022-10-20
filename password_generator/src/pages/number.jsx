import styles from "./IndexPage.module.css";
import { useState } from "react";


export function NumberPage() {
  const [num, setNum] = useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  return (
    <div conteiner className={styles.customDiv}>
      <h1>Генератор чисел</h1>
      <h1>{num}</h1>
      <br /><br />
      От
      <input 
          type="text"
          onChange={(e) => setA(e.target.value)}
        /><br />До<input 
          type="text"
          onChange={(e) => setB(e.target.value)}
        /><br /><br />
        <button onClick={() => setNum(randomDigit(a, b))}>Сгенерировать</button>
    </div>
  );
}

function randomDigit(a, b) {
  return Math.floor(Math.random() * (b - a) + a * 1);
}
