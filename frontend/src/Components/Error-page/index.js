import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Welcome-page/main.module.css';

const ErrorPage = () => {

    return (
      
            <div>
                <h1 className={styles.logo}>L'ENNUI</h1>
                    <p>Oops, cette page n'existe pas ! </p>
                <div className={styles.largeBox}>
                    <Link className="" to="/" >Revenir à l'accueil</Link>
                </div> 
            </div>
     
    )

}

export default ErrorPage