import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types'
import css from './Header.module.css';

function Header(props) {
  return (
    <header>
      <nav>
        <ul className={css.items}>
          <li>
            <NavLink className={css.navLink} to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={css.navLink} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
