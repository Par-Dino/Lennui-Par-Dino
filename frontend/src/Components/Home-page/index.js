import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import Header from '../Header';
import fetcha from './homePage';



const HomePage = () => {
    useEffect(()=>{ fetcha()})
    return(
        <div> 
            <Header />
            <div className={styles.container}>
                <div className={styles.filterBox}>
                    <p>Bienvenue à toi Lecteur !</p>
                    <li>
                        <p id="username"></p>
                        <p id="id"></p>
                        <p id="email"></p>
                        <p id="progress"></p>
                        <p id="death"></p>
                    </li>
                    <p>Prépare toi à vivre une grande aventure.</p>
                    <div className={styles.greenBtn}>
                        <span className={styles.lightGreen}>
                        <Link className="" to="/Chapitres">Je me lance !</Link>
                        </span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HomePage