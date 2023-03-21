import { NavLink } from "react-router-dom";
import s from "./style.module.scss";

const links = [
  { link: "/", text: "home" },
  { link: "/about", text: "about" },
  { link: "/blog", text: "blog" },
];

function Header() {
  return (
    <header className={s.header}>
      <ul className={s.header__list}>
        {links.map((item) => (
          <li className={s.header__item}>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                isActive ? s.header__link_active : s.header__link
              }
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
