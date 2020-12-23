import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import Header from '../Header';
import fetcha from './profilPage';



const ProfilPage = () => {
    useEffect(()=>{ fetcha()})
    return(
        <div> 
            <Header />
            <div className={styles.container}>
                <div className={styles.filterBox}>
                    <p>Compte</p>
                    <li>
                        <p>Pseudo : <span id="username"></span></p>       
                        <p>Email : <span id="email"></span></p>
                        <p>Chapitre : <span id="progress"></span></p>
                        <p>Mort : <span id="death"></span> fois</p>
                    </li>
            </div>
        </div>
    </div>
    )
}

export default ProfilPage