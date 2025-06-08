import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <NavLink to="/" className={styles.logo}>
            <span className={styles.logoBold}>Travel</span>Trucks
          </NavLink>
        </div>

        <nav className={styles.nav}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ''}`
            }
          >
            Catalog
          </NavLink>
        </nav>

        <div className={styles.right}>{}</div>
      </div>
    </header>
  );
};

export default Header;
