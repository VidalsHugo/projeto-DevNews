import styles from './Header.module.css';
function Header() {
    return (
      <header className={styles.header}>
      <h1>LOGO</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">technology</a></li>
          <li><a href="#contact">arts</a></li>
          <li><a href="#contact">business</a></li>
          <li><a href="#contact">politics</a></li>
          <li><a href="#contact">science</a></li>
          <li><a href="#contact">sports</a></li>
          <li><a href="#contact">travel</a></li>
          <li><a href="#contact">world</a></li>
        </ul>
      </nav>
    </header>
  );
  }
  
  export default Header;
  