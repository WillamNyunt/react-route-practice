import classes from './EventsNavigation.module.css';
import { NavLink } from 'react-router-dom';

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to='/events' className={({isActive}) => (isActive ? classes.isActive : undefined )} end>All Events</NavLink>
          </li>
          <li>
            <NavLink to='new'  className={({isActive}) => (isActive ? classes.isActive : undefined )} end>New Event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
