import styles from '../styles/Home.module.css'
import RingAnimation from './RingAnimation'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Bihub Technology</h1>
        <p>Innovative, Accessible, Inclusive Web Solutions</p>
      </div>
      <div className={styles.heroAnimation} aria-hidden="true">
        <RingAnimation />
      </div>
    </section>
  )
}