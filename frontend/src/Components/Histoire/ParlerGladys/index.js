import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';
import Header from '../../Header';
import Image from '../../../img/gladysvecteur16.png';

const Gladys = () => {
  
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
                <button> <Link to="/accepterSonDestinSuite" className={styles.Link}>Page précédente</Link></button>
                </div>

        <p className={styles.text}>Vous vous approchez de l’enclos. Vous apercevez Ferdinand, ce vieux bouc solitaire et, osons le dire, plutôt antipathique. La dernière fois que vous avez tenté de le caresser il vous a fait comprendre que personne n’avait le droit de lever la main sur lui en vous donnant un coup de corne. Ce jour là vous aviez pleuré, mais c’était davantage le fait de la surprise que par réelle douleur. Ça avait cependant été une grande leçon de vie : certains animaux sont de vrais connards.</p>
        <p className={styles.text}>Vous décidez de l’ignorer et scrutez l’enclos en profondeur avant d’appeler celle à qui vous êtes venu dire au revoir :</p>
        <p className={styles.text}>« Gladys ! Glaaaaaaaadyyyyyyyyyyyyys ! Où es tu passée ma belle ? »</p>
        <p className={styles.text}>Pas de réponse. </p>
        <p className={styles.text}>Soudain, comme un diable en boite, Gladys émerge d’un tas de foin en bondissant.</p>
        <p className={styles.text}>- On va jouer ? Elle vous regarde avec un regard pétillant et rempli d’amour.</p>
        <p className={styles.text}>Vous ressentez comme un envie irrépressible de la prendre dans vos bras pour lui dire « au revoir » dans les règles de l’art. C’est votre amie, et la seule éventualité que tout se passe mal et que vous la revoyiez jamais vous fend le cœur.</p>
            

                {/* DROITE */}
          
        <p className={styles.text}>Vous escaladez la clôture et vous agenouillez près d’elle. Comme si elle avait compris vos intentions, elle vient nicher sa tête au creux de votre épaule. Vous la serrez contre vous en lui caressant doucement la tête. Elle demeure silencieuse pendant cette étreinte emplie d’émotions.</p>
        <p className={styles.text}>Elle pose ses deux pattes sur vos cuisses.</p>
        <p className={styles.text}>Tu dois partir ? La candeur de son visage est irrésistible.</p>
        <p className={styles.text}>L’espace d’un instant, vous avez envie de tout plaquer. Vous avez envie de dire « merde » au destin, à toute cette histoire de prophétie rocambolesque. Mais renoncer à votre destin reviendrait à la condamner, Gladys et toutes ces autres bêtes innocentes. Votre visage se renfrogne tandis que vous prenez sa tête entre vos petites mains d’enfant.</p>
        <p className={styles.text}>- Oui Gladys. Le destin m’a appelé. Une mission m’a été confiée. Je ne peux plus reculer. Je n’ai plus de temps à perdre. Je reviendrai aussi vite que possible pour jouer avec toi.</p>
        <p className={styles.text}>- D’accord, dit-elle en vous donnant un petit coup de langue sur le nez.</p>
        <p className={styles.text}>Vous repartez avec le sourire et un regain de confiance. </p>
        <p className={styles.text}></p>

        <div className={styles.btnS}>
        <button> <Link to="/transition" className={styles.Link2}>Page suivante</Link></button>  
        </div>
            
            </div>
            </div>
        </div>

    )
}


export default Gladys