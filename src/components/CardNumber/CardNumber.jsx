import styles from './CardNumber.module.css'

function CardNumber({ num, total }) {
  return (
    <p className={styles.content}>
      {num} / {total}
    </p>
  );
}

export default CardNumber;
