import React from 'react'
import styles from './FlavourCard.module.css' 


interface FlavourCardProps {
  name: string
  price: string
  img: string
  bgcolor?: string
  priceBgColor?: string
}

const FlavourCard: React.FC<FlavourCardProps> = ({ name, price, img, bgcolor, priceBgColor='#000'}) => {
  return (
    <div className={styles['flavour-card']} style={{backgroundColor: bgcolor}}>
      <img src={img} alt={name} className={styles["flavour-cardImg"]} /> 
      <h3 className={styles["flavour-cardh3"]}>{name}</h3>
      <span className={styles['flavour-cardp']} style={{ backgroundColor: priceBgColor}}>{price}</span>
    </div>
  );
};

export default FlavourCard;
