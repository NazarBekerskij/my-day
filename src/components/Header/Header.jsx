import { Component } from "react";
import styles from "./Header.module.css";

import { Search, CalendarDays, ChevronDown, Bell } from "lucide-react";

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.search}>
          <Search size={22} />
          <input type="text" placeholder="Search tasks, notes..." />
        </div>

        <div className={styles.actions}>
          <div className={styles.date}>
            <CalendarDays size={22} />
            <span>Fri, Nov 14, 2026</span>
            <ChevronDown size={18} />
          </div>

          <button
            type="button"
            className={styles.notifications}
            aria-label="Notifications"
          >
            <Bell size={22} />
            <span className={styles.notificationDot}></span>
          </button>

          <div className={styles.profile}>
            <div className={styles.avatar}>N</div>
            <p>Nazar</p>
            <ChevronDown size={18} />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
