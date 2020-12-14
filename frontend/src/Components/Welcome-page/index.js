import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./main.module.css";


const WelcomePage = () => {
    return(
        <div className={styles.container}>
        <h1 className={styles.logo}>L'ENNUI</h1>
        <div className={styles.largeBox}>
                <Link className="" to="/Connexion" >Se connecter</Link>
                <Link className="" to="/Inscription" >S'inscrire</Link>
        </div> 
        </div>
    )
}

export default WelcomePage