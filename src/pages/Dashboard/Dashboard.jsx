
import { Component } from "react";
import styles from "./Dashboard.module.css";
import ProgressCard from "../../components/ProgressCard/ProgressCard";

class Dashboard extends Component {
  render() {
    const hour = new Date().getHours();
    let greeting = "";

    if (hour >= 6 && hour < 12) {
      greeting = "Good morning";
    } else if (hour >= 12 && hour < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }

    return (
      <section className={styles.dashboard}>
        <h1>{greeting}, Nazar! 👋</h1>
        <p>Here's your plan for today. Let's be productive!</p>

        <div className={styles.stats}>
          <ProgressCard
            title="Today's Tasks"
            value="8"
            description="3 completed"
          />

          <ProgressCard
            title="Daily Progress"
            value="38%"
            description="Keep going!"
          />

          <ProgressCard
            title="Focus Time"
            value="2h 15m"
            description="Today's focus"
          />

          <ProgressCard
            title="Streak"
            value="5 days"
            description="Stay consistent"
          />
        </div>
      </section>
    );
  }
}

export default Dashboard;
