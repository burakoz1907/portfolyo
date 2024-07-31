import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h1 className={styles.title}>MyPortfolio</h1>
        </div>
        <div className={styles.social}>
          <a href="https://www.linkedin.com/in/burak-%C3%B6z-8196a229a/" className={styles.socialLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/burakoz1907" className={styles.socialLink} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.instagram.com/burak_oz09/" className={styles.socialLink} target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} MyPortfolio. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}