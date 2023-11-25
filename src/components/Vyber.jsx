import React from 'react'
import styles from "../style"
import { Link } from 'react-router-dom';

function Vyber() {
  return (
    <>
    <div className="flex justify-center space-x-6 mb-5">

    <Link to="/mamka">
    <button className={`${styles.buttonV} bg-red`}>
        Mamka
    </button>
    </Link>

    <Link to="/">
    <button className={`${styles.buttonV} bg-green`}>
        Dádis
    </button>
    </Link>
    


    </div>
      
    </>
  )
}

export default Vyber
