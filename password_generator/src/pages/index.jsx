import styles from "./IndexPage.module.css";
import { Link } from "react-router-dom";

export function IndexPage() {

  return (
    <div conteiner className={styles.customDiv}>
        <h1>Генератор всего</h1>
      <br />
      <br />
      <Link to={"/number"} className={styles.customButton}>
        Число
      </Link>
      <Link to={"/password"} className={styles.customButton}>
        Пароль
      </Link>
    </div>
  );
}
