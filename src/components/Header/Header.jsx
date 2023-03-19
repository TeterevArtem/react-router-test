import {Link} from "react-router-dom";
import s from "./style.module.scss";

function Header() {
  return (
    <header className={s.header}>
      <ul className={s.header__list}>
        <li className={s.header__item}>
          <Link to="/" className={s.header__link}>
            home
          </Link>
        </li>
        <li className={s.header_item}>
          <Link to="/about" className={s.header__link}>
            about
          </Link>
        </li>
        <li className={s.header_item}>
          <Link to="/blog" className={s.header__link}>
            blog
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
