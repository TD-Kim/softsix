import styles from './GridContainer.scss';

function GridContainer({ children }) {
  return <div className={styles.grid}>{children}</div>;
}

export default GridContainer;
