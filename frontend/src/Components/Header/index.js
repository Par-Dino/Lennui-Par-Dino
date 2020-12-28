import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import header from './header.js';
import mp3_file from '../../../src/sound/sound.mp3';



const Header = () => {
    useEffect(()=>{ header()})
    return (
        <header>
            <ul className={styles.navbar}>
                <button id="btn_home"><h1>L'ennui</h1></button>
                <button id="btn_play">play</button>
                <button id="btn_pause">pause</button>
                <audio id='sound' src={mp3_file} loop autoplay/>
                <li><button id="btn_profil">Profil</button></li>
                <li><button id="btn_deco">Déconnexion</button></li>
            </ul>
        </header>
    )

}

export default Header