import React from 'react'
import styles from './BenefitsSection.module.css'
import DollarSign from '../../assets/icons/dollar-sign.png'
import Drink from '../../assets/icons/drink.png'
import Truck from '../../assets/icons/truck.png'
import Cancel from '../../assets/icons/cancel.png'
import gingerLemonImg from '../../assets/gingerLemon-img.png'

const benefits = [
  { icon: DollarSign, text: 'Save 15% on every order' },
  { icon: Drink, text: 'Early access to new flavors.' },
  { icon: Truck, text: 'Free Shipping. Always.' },
  { icon: Cancel, text: 'Swap, skip or cancel any time' },
]

const BenefitsSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.column}>
        {benefits.slice(0, 2).map((b, i) => (
          <div className={styles.benefit} key={i}>
            <div className={styles.icon}>
              <img src={b.icon} alt="icon"/>
            </div>
            <p>{b.text}</p>
          </div>
        ))}
      </div>

      <div className={styles.imageBox}>
        <img src={gingerLemonImg} alt="Ginger Lemon Can" />
      </div>

      <div className={styles.column}>
        {benefits.slice(2).map((b, i) => (
          <div className={styles.benefit} key={i}>
            <div className={styles.icon}>
               <img src={b.icon} alt="icon"/>
            </div>
            <p>{b.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
 
export default BenefitsSection
