import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';
import Header from '../../Header';

const AurevoirDeux = () => {
  
    return(
            <div>  
             <Header/>
                 <div className={styles.container} style={{
                    backgroundImage: 'url(' + Image + ')', 
                    backgroundSize: '100vw' 
                    }}>

                <button> <Link to="/prevenirlesparentsaurevoir" className={styles.Link}>Page précédente</Link></button>
                <button> <Link to="/" className={styles.Link}>Page suivante</Link></button>

                {/* GAUCHE */}
                <div className={styles.filterBox}><Link to="/prevenirlesparentsaurevoir">
        
    
        
        <p className={styles.text}>Votre position se fait plus ferme. Votre expression est calme et déterminée. Votre regard ne laisse plus place au doute, il est si intense qu’il pourrait pousser un loup affamé à s’enfuir la queue entre les jambes. </p>
        <p className={styles.text}>«  Assez ! » C’est vous qui parlez, mais ce n’est pas votre voix.</p>
        <p className={styles.text}>La réalité commence a se fendre avant d’exploser littéralement en mille morceaux.</p>
        <p className={styles.text}>Profitant que l’attention n’était pas portée sur lui, Grisou a choisi de vous prêter main forte en sautant sur les cuisses de votre mère.</p>
        <p className={styles.text}>Vous vous retrouvez de nouveau à flotter dans l’esprit du matou, seulement cette fois vous n’êtes pas seul. Votre mère est comme tétanisée et fascinée à la fois, c’est à se demander si elle n’a pas cessé de respirer. </p>
        <p className={styles.text}>Les yeux du chat s’ouvrent en grand et vous surplombent tous les deux. La mâchoire de votre mère s’affaisse de telle sorte qu’elle paraît complètement droguée, voire en passe de perdre instantanément toute forme de santé mentale. Dans ce monde il y a deux type de personnes : celles qui acceptent les choses et celles qui pètent les plombs. Pour votre mère, tout semblait se jouer en ce moment précis.</p>
        <p className={styles.text}>Les pupilles du chat oscillent lentement, comme la flamme d’une bougie. Il faut reconnaître que c’est un regard captivant, hypnotique. Il brise le silence et entame d’une voix puissante :</p>
       
     
        

                </Link></div> 

                {/* DROITE */}
                <div className={styles.filterBoxRight}>
    
     
        <p className={styles.text}>« Accepte ce qui est et ne peut être changé. Une joute s’est déclarée entre Le Néant et l’essence même de toute création. L’ordre des choses ne doit pas être interrompu. Ton fils doit mener une quête importante. Il est l’élu des Dieux et de la prophétie. C’est irrévocable. »</p>
        <p className={styles.text}>Adoptant une posture catatonique, la pauvre femme se mit à psalmodier, comme si elle sentait son heure venir. </p>
        <p className={styles.text}>Un bruit sec et violent, presque inquisiteur -comme si Dieu en personne venait de claquer des doigts- sortit instantanément la victime de état de transe. Elle semblait désormais calme et lucide. Prête à l’acceptation. Elle avait cessé de nager à contre courant et se laisser désormais guider par les flots tourmentés. La résilience, son visage transpirait la résilience.</p>
        <p className={styles.text}>Vous la voyez évoluer sous vos yeux, vous voyez son regard changer, son expression muter en quelque chose de plus harmonieux. Elle se tourne lentement vers vous et vous souris. C’est un sourire exceptionnel. C’est un sourire unique, c’est celui d’une mère qui regarde son enfant.</p>
        <p className={styles.text}>C’était un simple sourire, mais il était suffisant. Elle avait compris. Elle avait acceptée. Elle s’était résignée.</p>
        <p className={styles.text}>« Bon courage mon garçon ».</p>
        <p className={styles.text}>Ses traits inspiraient la paix et la confiance. </p>
        <p className={styles.text}></p>
        <p className={styles.text}></p>
                </div>
            </div>
        </div>

    )
}


export default AurevoirDeux