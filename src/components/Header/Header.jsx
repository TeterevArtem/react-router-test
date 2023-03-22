import { NavLink } from "react-router-dom";
import s from "./style.module.scss";

const links = [
  { link: "/", text: "home" },
  { link: "/about", text: "about" },
  { link: "/post", text: "post" },
];

const setActive = ({ isActive }) =>
  isActive ? s.header__link_active : s.header__link;

function Header() {
  return (
    <header className={s.header}>
      <ul className={s.header__list}>
        {links.map((item, index) => (
          <li key={index} className={s.header__item}>
            <NavLink to={item.link} className={setActive}>
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
