import React from 'react';
import styles from './SubscribeSection.module.css';

const SubscribeSection: React.FC = () => {
  return (
    <div className={styles.subscribeContainer}>
      <h3 className={styles.heading}>Save 15% with Endless Olipop.</h3>
      <p className={styles.description}>
        Never run out of your favorite flavors when you join our fam.
        Subscribe and save on every order — your wallet (and digestion) will thank you.
      </p>
      <button className={styles.button}>Subscribe & Save</button>
    </div>
  );
};

export default SubscribeSection;
