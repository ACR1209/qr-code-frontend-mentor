import React from 'react'
import styles from './QRContainer.module.css'


function QRContainer() {
  return (
    <div className={styles.container}>
        <img className={styles.qr} src='../public/image-qr-code.png'></img>
        <h1 className={styles.title}>Improve your front-end skills by building projects</h1>
        <p className={styles.description}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  )
}

export default QRContainer