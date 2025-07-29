import React from 'react';
import styles from './HeroSection.module.css';
import strawb from '../../assets/strawb.png'; 

const HeroSection: React.FC = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          A New Kind <br /> of <span className={styles.highlight}>Soda™</span>
        </h1>
        <button className={styles.button}>Shop OLIPOP</button>
      </div>
      <div className={styles.right}>
        <div className={styles.circle}>
          <img src={strawb} alt="OLIPOP Can" className={styles.canImage} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
