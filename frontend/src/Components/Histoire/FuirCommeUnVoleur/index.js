import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';
import Header from '../../Header';
import Image from '../../../img/voleurvecteur3.png';

const Fuir = () => {
  
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
                <button> <Link to="/transition" className={styles.Link}>Page précédente</Link></button>
                </div>

        <p className={styles.text}>Le secret, pour passer inaperçu, c’est de paraître parfaitement à son aise. Évoluer comme un poisson dans l’eau inspire la confiance et n’éveille pas les soupçons. Il suffit de se comporter en feignant le naturel autant que possible et personne ne se posera de questions.</p>
        <p className={styles.text}>Vous adoptez un air badaud, le plus proche de ce que vous êtes capable de produire naturellement tous les jours. La pression redescend d’un coup lorsque vous remarquez que votre père n’est là que physiquement. Son esprit semble glisser ailleurs lorsqu’il est concentré.</p>
        <p className={styles.text}>Ne rien dire et partir fera amplement l’affaire finalement. Vous aurez d’autres occasions d’exercer vos talents d’acteurs. Tous les ennemis ne sont pas sensibles à la force brute. Il faut parfois séduire, d’autres fois ruser. Votre mère vous a maintes fois rabâché toute l’importance d’utiliser sa matière grise. « C’est ce qui rend l’humain si spécial, ce cerveau » vous avait-elle dit un jour tandis qu’elle vous tapotait le front de l’index -c’est ce qui est là dessous, tu comprends ?- et vous l’aviez bien compris. A quoi bon dégainer son épée lorsque l’on peut dégainer sa langue et résoudre le conflit par le verbe.</p>


                {/* DROITE */}
             
        
        <p className={styles.text}> A SUIVRE.</p>
        <p className={styles.text}></p>

        {/* <div className={styles.btnS}>
        <button> <Link to="/" className={styles.Link2}>Page suivante</Link></button>
        </div> */}
            </div>
            </div>
        </div>

    )
}


export default Fuir