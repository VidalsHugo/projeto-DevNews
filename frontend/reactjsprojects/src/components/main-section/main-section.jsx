
import React from 'react';
import Card from '../card/card';
import styles from './MainSection.module.css';

function MainSection() {
  return (
    <div className={styles.mainSection}>
      <div className={styles.highlightedCard}>
        <Card/>
      </div>
      <div className={styles.cardSection}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default MainSection;
