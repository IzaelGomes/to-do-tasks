import style from "./Header.module.css";
import rocket from "../assets/rocket.svg";

const Header = () => {
  return (
    <header className={style.containerHeader}>
      <div className={style.titleHeader}>
        <img src={rocket} alt="foguete-logo" />
        <h1 className={style.PrincipalText}>
          to<span className={style.PrincipalTextTwo}>do</span>
        </h1>
      </div>
    </header>
  );
};

export { Header };
