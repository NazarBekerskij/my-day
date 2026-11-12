import { Component } from "react";
import menuItems from "../../data/menuItem.json";
import styles from "./Sidebar.module.css";
import mountains from "../../assets/mountains.png";

import {
  LayoutDashboard,
  Calendar,
  SquareCheck,
  Timer,
  ChartNoAxesColumn,
  Settings,
  Check,
} from "lucide-react";

const icons = {
  LayoutDashboard,
  Calendar,
  SquareCheck,
  Timer,
  ChartNoAxesColumn,
  Settings,
};

class Sidebar extends Component {
  render() {
    return (
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandIcon}>
            <Check size={28} strokeWidth={3} />
          </div>

          <div>
            <h2 className={styles.logo}>MyDay</h2>
            <p>Plan · Focus · Progress</p>
          </div>
        </div>

        <nav className={styles.navigation}>
          {menuItems.map(({ id, title, icon }) => {
            const Icon = icons[icon];
            const isActive = title === "Dashboard";
            return (
              <div
                className={`${styles.navItem} ${isActive ? styles.active : ""}`}
                key={id}
              >
                <Icon size={20} />
                <span>{title}</span>
              </div>
            );
          })}
        </nav>
        <div
          className={styles.sidebarBottom}
          style={{ backgroundImage: `url(${mountains})` }}
        >
          <p>
            Small progress <br />
            every day leads to <br />
            big results.
          </p>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
