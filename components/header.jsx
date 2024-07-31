
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.profile}>
          <div className={styles.profileImageWrapper}>
            <h3 className={styles.profileName}>burak.dev</h3>
          </div>
        </div>
        <ul className={styles.navList}>
          <li className={styles.navItem}>Ana Sayfa</li>
          <li className={styles.navItem}>Hakkımda</li>
          <li className={styles.navItem}>Projeler</li>
          <li className={styles.navItem}>İletişim</li>
        </ul>
      </nav>
    </header>
  );
}