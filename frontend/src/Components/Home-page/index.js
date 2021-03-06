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
                    <p className={styles.p}>Bienvenue à toi <span id="username"></span> !</p>
                    <p className={styles.p}>Prépare toi à vivre une grande aventure.</p>
                    <div className={styles.Btn}>
                        <span className={styles.lightBtn}>
                        <Link className="" to="/Prologue">Je me lance !</Link>
                        </span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HomePage