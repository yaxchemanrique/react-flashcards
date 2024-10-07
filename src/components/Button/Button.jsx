import React from 'react'
import styles from './Button.module.css'

function Button({ clickHandle, children}) {
  return (
    <button className={styles.button} onClick={clickHandle}>{children}</button>
  )
}

export default Button