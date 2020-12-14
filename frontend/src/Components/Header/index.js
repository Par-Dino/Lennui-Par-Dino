import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {

    return (
        <header>
            <div className={styles.navbar}>
                <Link to='/'> <h1>L'ennui</h1> </Link>
                <div className={styles.link}>
                <a href="/">Profil</a>
                <a href="/">Déconnexion</a>
                </div>
            </div>
        </header>
    )

}

export default Header