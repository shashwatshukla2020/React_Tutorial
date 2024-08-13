
import Display from './components/Display'
import styles from './App.module.css'

function App() {

  return (
    <div className={styles.calculator}>
      <Display></Display>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttons}>C</button>
        <button className={styles.buttons}>1</button>
        <button className={styles.buttons}>2</button>
        <button className={styles.buttons}>+</button>
        <button className={styles.buttons}>3</button>
        <button className={styles.buttons}>4</button>
        <button className={styles.buttons}>5</button>

      </div>
    </div>
  )
}

export default App
