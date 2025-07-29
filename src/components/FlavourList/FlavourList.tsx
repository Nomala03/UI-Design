import FlavourCard from '../FlavourCard/FlavourCard'
import styles from './FlavourList.module.css'
import gingerLemon from '../../assets/ginger-lemon.png'
import classicGrape from '../../assets/classic-grape.png'
import orangeSqueeze from '../../assets/orange-squeeze.png'
import tropicalPunch from '../../assets/tropical-punch.png'


const FlavourList = () => {
  const flavours = [
    { name: 'Ginger Lemon', price: '$34.99', img: gingerLemon, bgcolor: '#FCDA79', priceBgColor:'#E3BD0D' },
    { name: 'Classic Grape', price: '$34.99', img: classicGrape, bgcolor: '#C194DA', priceBgColor:'#8336A2'  },
    { name: 'Orange Squeeze', price: '$34.99', img: orangeSqueeze, bgcolor: '#E2A574', priceBgColor:'#F27213'  },
    { name: 'Tropical Punch', price: '$34.99', img: tropicalPunch, bgcolor: '#7CD8D1', priceBgColor:'#E0334C'  },
  ]

  return (
    <section className={styles["flavours"]}>
      {flavours.map((flavour, i) => (
        <FlavourCard key={i} {...flavour} />
      ))}
    </section>
  )
}

export default FlavourList
