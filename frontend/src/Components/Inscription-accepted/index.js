import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Inscription-page/inscription.module.css';




const InscriptionAccepted = () => {
    return(

        <div className={styles.container}>
            <div className={styles.filterBox}>
                <div className={styles.formInscription}>
                    <label>Inscription</label>
                <p>Votre inscription a bien été pris en compte !</p>
                    <div className={styles.greenBtn}>
                        <span className={styles.lightGreen}>
                        <Link className="" to="/Connexion">Se connecter</Link>
                    </span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default InscriptionAccepted