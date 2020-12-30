import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';
import Header from '../../Header';
import Image from '../../../img/grange.png';

const Transition = () => {
  
    return(
            <div>  
             <Header/>
                 <div className={styles.container} style={{
                    backgroundImage: 'url(' + Image + ')', 
                    backgroundSize: 'cover' 
                    }}>


                {/* GAUCHE */}
                <div className={styles.filterBox}>
                <div className={styles.btnP}>
                <button> <Link to="/" className={styles.Link}>Page précédente</Link></button>
                </div>

        <p className={styles.text}>Vous-vous rendez à la grange, ou tout du moins ce qui s’en rapproche le plus. Votre père est occupé à rassembler le foin que les vaches ont pris soin d’éparpiller. Si vous trouvez que les cochons sont bordéliques, les vaches ne sont pas en reste. C’est tout les matin la même rengaine, et impossible de leur apprendre de quelque façon que ce soit. </p>
        <p className={styles.text}>« Salut fiston, t’es v’nu m’aider à traire les filles ? ». Les filles. Le terme n’était pas anodin. La seule distinction que faisait votre père entre son bétail et vous, c’était que les animaux n’étaient pas autorisés à dormir à la maison. Cela ne vous choque pas, car vous avez toujours été élevé dans cette perspective : aucune espèce n’est supérieure à une autre et toutes ont droit au bonheur et à minimum de dignité.</p>
       

                {/* DROITE */}
               
        
        <p className={styles.text}>-Oui p’pa. Vous vous saisissez d’un petit tabouret que vous placez à une distance optimale de Frisette. C’est à peine si elle calcule votre présence. Son obsession pour les mouches n’a d’égal que l’attention que lui portent ces bestioles. Un escadron de mouches virevoltent près de sa tête (ici elle emploi pour les chasser, la technique de la langue lasso, impressionnante mais peu efficace) et s’adonnent à une véritable corrida autour de sa queue. Vous chassez d’un revers de main les plus malignes qui s’étaient agglutinées sur les pis de la malheureuse. Vous profitez de l’instant comme du dernier moment de quiétude avant une longue série de galères. La vie d’un héro n’est pas simple, mais pour l’instant il suffit juste de tirer en rythme sur les pis d’une vache.</p>
      

        <button className={styles.destiny}><Link to='/prevenirlesparents'>Prévenir ses parents</Link></button>
        <button className={styles.destiny}><Link to='/fuircommeunvoleur'>S'enfuir comme un voleur</Link></button>

                </div>
            </div>
        </div>

    )
}


export default Transition