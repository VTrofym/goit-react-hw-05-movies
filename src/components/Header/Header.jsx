import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types'
import css from './Header.module.css';

function Header() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <ul className={css.items}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? css.navLink : css.deActive
              }
              to="/"
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? css.navLink : css.deActive
              }
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

// {
//   ({ isActive }) => (isActive ? activeClassName : undefined);
// }
