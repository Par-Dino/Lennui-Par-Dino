import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import styles from './lecteur.module.css';
import lecteur from './lecteur.js';
import mp3_file from '../../../src/sound/sound.mp3';



const Lecteur = () => {
    useEffect(()=>{ lecteur()})
    return (



        <div className={styles.container}>
            <p className={styles.pLecteur}>Cher lecteur pour une meilleure immersion
                il est recommandé d'activer la musique</p>
            <div className={styles.containerLecteur}>
                <div className={styles.containerButton}>
                    <button className={styles.Button} id="btn_play"><h1>play</h1></button>
                    <button className={styles.Button} id="btn_pause"><h1>pause</h1></button>
                </div>
                    <audio id='sound' src={mp3_file} controls loop autoplay/>
            </div>
            
        </div>
    )

}

export default Lecteur