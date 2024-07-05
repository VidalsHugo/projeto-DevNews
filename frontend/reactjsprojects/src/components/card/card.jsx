import React from 'react';
import styles from './Card.module.css';

function Card({ index, story }) {
  return (
    <div className={styles.card}>
      <img src={story.multimedia[1].url} alt={story.title} className={styles.cardImage} />
      <h2>{story.title}</h2>
    </div>
  );
}

export default Card;
