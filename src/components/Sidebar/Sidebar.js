import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li className={styles.item}>Profile</li>
        <li className={styles.item}>Message</li>
        <li className={styles.item}>News</li>
        <li className={styles.item}>Music</li>
        <li className={styles.item}>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
