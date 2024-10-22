import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../card/card';
import styles from './MainSection.module.css';

function MainSection({ category }) {
  console.log(category)
  const [stories, setStories] = useState([]);
  const [highlightedStory, setHighlightedStory] = useState(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api-nyt/top-stories/${category || 'menu-principal'} `);
        const storiesData = response.data.results;
        setStories(storiesData);
        if (storiesData.length > 0) {
          setHighlightedStory(storiesData[0]);
        }
      } catch (error) {
        console.error('Error fetching the top stories:', error);
      }
    };

    fetchStories();
  }, []);
console.log(highlightedStory)
  return (
    <div className={styles.mainSection}>
      <div className={styles.highlightedCard}>
        {highlightedStory ? <Card story={highlightedStory} /> : <p>Notícia principal Carregando...</p>}
      </div>
      <div className={styles.cardSection}>
      {stories.length > 0 ? stories.slice(1).map((story, index) => (
          <Card key={index} story={story} />
        )) : <p>No stories available</p>}
      </div>
    </div>
  );
}

export default MainSection;
