
import { Component } from "react";
import styles from "./ProgressCard.module.css";

class ProgressCard extends Component {
  render() {
    const { title, value, description } = this.props;

    return (
      <div className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.value}>{value}</p>
        <p className={styles.description}>{description}</p>
      </div>
    );
  }
}

export default ProgressCard;
