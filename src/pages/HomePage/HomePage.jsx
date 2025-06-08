import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Campers of your dreams</h1>
      <h2>You can find everything you want in our catalog</h2>
      <Link to="/catalog" className={styles.ctaButton}>
        View Now
      </Link>
    </div>
  );
};

export default HomePage;
