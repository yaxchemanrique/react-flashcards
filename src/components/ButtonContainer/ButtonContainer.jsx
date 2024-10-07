import React from 'react'
import styles from './ButtonContainer.module.css'

function ButtonContainer({children}) {
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default ButtonContainer