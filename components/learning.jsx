import styles from "./learning.module.css";
import { FaCss3Alt, FaHtml5, FaGithub, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";

export default function Learning() {
  return (
    <div>
      <h1 className={styles.h1}>Neler öğrendim?</h1>
      <div className={styles.logos}> 
        <TbBrandJavascript className={styles.logo} />
        <FaCss3Alt className={styles.logo} />
        <FaHtml5 className={styles.logo} />
        <FaGithub className={styles.logo} />
        <FaReact className={styles.logo} />
      </div>
      <div className={styles.area}>
        <h1 className={styles.h2}>Projelerim</h1>
        <div className={styles.projects}>
          <div className={styles.projectPage}>
            {/* Proje içeriği */}
          </div>
          <div className={styles.projectPage}>
            {/* Proje içeriği */}
          </div>
          <div className={styles.projectPage}>
            {/* Proje içeriği */}
          </div>
          <div className={styles.projectPage}>
            {/* Proje içeriği */}
          </div>
        </div>
      </div>
    </div>
  );
}