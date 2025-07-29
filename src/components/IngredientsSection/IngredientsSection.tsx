import React from 'react'
import styles from './IngredientsSection.module.css' 


const IngredientsSection = () => {
  return (
    <section className={styles['ingredients']}>
      <span className={styles['image']}></span>
      <div className={styles['text']}>
        <h2 className={styles['heading']}>| Our Foundational Ingredients</h2>
        <p className={styles['paragraph']}>
          For over a decade, Ben and David have shared a vision of a healthier, tastier future. Their quest for a product that could undermine the old guard of soda behemoths led them to OLIPOP — a thoughtfully crafted tonic that found its taste in wholesome, hardworking ingredients instead of spoonfuls of sugar.
        </p>
        <button className={styles['button']}>Read More</button>
      </div>  
    </section>
  );
};

export default IngredientsSection;
