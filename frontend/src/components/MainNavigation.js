import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to='/home' className={({isActive}) => (isActive ? classes.isActive : undefined )} end>Home</NavLink>
          </li>
          <li>
            <NavLink to='/events' className={({isActive}) => (isActive ? classes.isActive : undefined )} end>Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// eslint-disable-next-line
export default MainNavigation;
