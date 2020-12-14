import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './inscription.module.css';
import fetchie from './addUser';



const Inscription = () => {                                                                                                             
    useEffect(()=>{ fetchie()})
    return(
        <div className={styles.container}>
            <div className={styles.filterBox}> 
                <form className={styles.formInscription}>
                    <label>Inscription</label>
                <input className={styles.inputInscription} id="username" type="text" method="post" for="" placeholder="Identifiant ..."></input>
                <input className={styles.inputInscription} id="email" type="text" method="post" for="email" placeholder="Adresse mail ..."></input>
                <input className={styles.inputInscription} id="password" type="password" method="post" for="password" placeholder="Mot de passe ..."></input>
                <input className={styles.inputInscription} type="password" method="post" for="password" placeholder="Confirmez le mot de passe ..."></input>
                
                <div className={styles.btnBox}> 
                <div className={styles.redBtn}>

                    <span className={styles.lightRed}><Link className="" to="/">Annuler</Link></span>
                </div>
                <div className={styles.greenBtn}>
                    <span className={styles.lightGreen}>
                    <button id="submit" type="submit">Je m'inscris</button>
                    </span>
                </div>
                 </div>

                </form>


            </div>
        </div>
    )
    
}

export default Inscription