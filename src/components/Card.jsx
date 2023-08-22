import styles from "./Card.module.css";

const Card = ({ body, id, title, userId }) => {
  return (
    <div className={styles.container}>
      <div className={styles.postItem}>
        <span className={styles.title}>{title}</span>
        <p className={styles.body}>{body}</p>
      </div>
    </div>
  );
};

export default Card;
