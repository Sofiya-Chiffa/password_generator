import styles from "./IndexPage.module.css";
import { useState } from "react";


export function PasswordPage() {
  const [len, setLen] = useState(0);
  const [data, setData] = useState(getRandomPassword(7));
  return (
    <div conteiner className={styles.customDiv}>
      <h1>Генератор паролей</h1>
      <h1>{data}</h1>
      <br /><br />
      Длинна пароля
      <input 
          type="text"
          onChange={(e) => setLen(e.target.value)}
        /><br /><br />
        <button onClick={() => setData(getRandomPassword(len))}>Сгенерировать</button>
    </div>
  );
}

function getRandomPassword(n) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/!$%&()=?*+";
  
  let password = "";
  for (let i = 0; i < n; i++){
      password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return password;
}