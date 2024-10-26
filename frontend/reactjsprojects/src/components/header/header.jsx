import styles from './Header.module.css';
import { Link } from 'react-router-dom';
function Header() {
    return (
      <header className={styles.header}>
      <h1>LOGO</h1>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/technology">Technology</Link></li>
          <li><Link to="/arts">Arts</Link></li>
          <li><Link to="/business">Business</Link></li>
          <li><Link to="/politics">Politics</Link></li>
          <li><Link to="/science">Science</Link></li>
          <li><Link to="/sports">Sports</Link></li>
          <li><Link to="/travel">Travel</Link></li>
          <li><Link to="/world">World</Link></li>
        </ul>
      </nav>
    </header>
  );
  }
  
  export default Header;
  