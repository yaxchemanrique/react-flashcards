import React from 'react'
import styles from './Button.module.css'

function Button({ isDisabled, clickHandle, children}) {
  return (
    <button disabled={isDisabled} className={styles.button} onClick={clickHandle}>{children}</button>
  )
}

export default Button