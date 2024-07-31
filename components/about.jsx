"use client";
import Image from "next/image";
import aboutImage from "../public/learning.gif";
import styles from "./about.module.css";
import Alert from 'sweetalert2';


const alert = () => {
    Alert.fire({
      title: 'İletişim Bilgilerim',
      text: 'mail: ozb5076@gmail.com',
      confirmButtonText: 'Tamam'
    })
  }

export default function About() {
  return (
    <div className={styles.aboutImage}>
      <Image src={aboutImage} alt="About Me" width={600} height={400} />
      <div>
        <h1> Hello World</h1>
      <p className={styles.p}>Herkese merhaba, ben Burak Öz. Bu sayfada sizlere kendimden bahsedeceğim.<br />
          İsmim Burak Öz. 
          2004 yılında İstanbul'da doğdum.<br /> İlkokulu, ortaokulu ve liseyi İstanbul'da okudum.<br />  Acunmedya Akademide 9. Dönem Genişletilmiş Yazılım Uzmanlığı
          eğitimi almaktayım.<br />
          Kendimi geliştirmeye devam ediyor ve her geçen gün daha iyi bir konuma gelebilmek için çabalıyorum.
        </p>
        <div className={styles.button}>
            <a className={styles.cv} href="#">CV İNDİR</a>
            <a className={styles.cv} onClick={() => alert()} href="#">İLETİŞİM</a>
        </div>
      </div>
    </div>
    
  )
}
