import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import header from './header.js';
import logo from '../../img/note2.png';

const Header = () => {
    useEffect(()=>{ header()})
    return (
        <header>
            <ul className={styles.navbar}>
                <button id="btn_home"><h1>L'ennui</h1></button>
                <button id="btn_sound">
                    <a href="/Lecteur" target="_blank" rel="noopener noreferrer">
                    <img className={styles.img} src={logo}></img> 
                    </a></button>
                <li><button id="btn_profil">Profil</button></li>
                <li><button id="btn_deco">Déconnexion</button></li>

            </ul>
        </header>
    )

}

export default Header