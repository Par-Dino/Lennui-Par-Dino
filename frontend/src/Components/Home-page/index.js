import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import Header from '../Header';
import fetchie from './homePage';



const HomePage = () => {
    useEffect(()=>{ fetchie()})
    return(
        <div> 
            <Header />
            <div className={styles.container}>
                <div className={styles.filterBox}>
                    <p>Bienvenue à toi <span id="username"></span> !</p>
                    <p>Prépare toi à vivre une grande aventure.</p>
                    <div className={styles.greenBtn}>
                        <span className={styles.lightGreen}>
                        <Link className="" to="/Prologue">Je me lance !</Link>
                        </span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HomePage