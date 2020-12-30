import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import fetchie from './coUser';

const Connexion = () => {
    useEffect(()=>{ fetchie()})
    return(
        <div className={styles.container}>
            <div className={styles.filterBox}> 
                <form className={styles.formInscription}>
                    <label className={styles.label}>Connexion</label>
                        <input className={styles.inputInscription}id="username" type="text" method="post" for="username" placeholder="Identifiant ..."></input>
                        <input className={styles.inputInscription}id="password" type="password" method="post" for="password" placeholder="Mot de passe ..."></input>
                        <p id="error" className={styles.error}></p>
                    <div className={styles.btnBox}> 
                            <div className={styles.redBtn}>
                                <span className={styles.lightRed}><Link className="" to="/Inscription">Je m'inscris</Link></span>
                            </div>
                        <div className={styles.greenBtn}>
                                <span className={styles.lightGreen}>
                                <button id="submit" type="submit">Se connecter</button>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Connexion