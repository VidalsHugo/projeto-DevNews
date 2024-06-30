import styles from './Card.module.css'

function Card ({ param }) {
    return(
    <div className={styles.card}>
      <h2>titulo</h2>
      <p>abs</p>
      <a href="url" target="_blank" rel="noopener noreferrer">Leia mais</a>
    </div>
    );
};

export default Card;