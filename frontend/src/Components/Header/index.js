import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import header from './header.js';


const Header = () => {
    useEffect(()=>{ header()})
    return (
        <header>
            <div className={styles.navbar}>
                <Link to='/'> <h1>L'ennui</h1> </Link>
                <div className={styles.link}>
                <button id="btn_profil">Profil</button>
                <button id="btn_deco">Déconnexion</button>
                </div>
            </div>
        </header>
    )

}

export default Header