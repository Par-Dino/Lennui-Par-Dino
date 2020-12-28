import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';
import Header from '../../Header';

const Fouiller = () => {
  
    return(
            <div>  
             <Header/>
                 <div className={styles.container} style={{
                    backgroundImage: 'url(' + Image + ')', 
                    backgroundSize: '100vw' 
                    }}>

                <button> <Link to="/accepterSonDestinSuite" className={styles.Link}>Page précédente</Link></button>
                <button> <Link to="/" className={styles.Link}>Page suivante</Link></button>

                {/* GAUCHE */}
                <div className={styles.filterBox}><Link to="/accepterSonDestinSuite">
        <p className={styles.text}>Vous vous trouvez dans une modeste chambre d’enfant.  La pièce est étroite, sans doute pour préserver la chaleur. Vous ressentez d’ailleurs que le feu de cheminée de la pièce à vivre dégage une chaleur agréable qui se diffuse à travers le bois. Vous profitez de cet instant pour rassembler vos esprits et vous concentrer sur la marche à suivre. </p>
        <p className={styles.text}>Devant vous se trouve votre lit, une petite table de chevet sur laquelle trône une bougie à moitié fondue sur son bougeoir, ainsi qu’un petit livre de chevet sur lequel est écrit « Nuit noire, étoiles mortes » rédigé par un certain Stephen King. Inconnu au bataillon. Toujours est-il que lire n’est pas la priorité du moment.</p>
        <p className={styles.text}>Vous vous accroupissez pour jeter un œil sous le lit. A première vue, si ce n’est un peu de poussière, rien ne s’y trouve. Toutefois, en y regardant de plus près, vous remarquez que l’une des lattes du planche semble différente. Vous tendez le bras pour l’inspecter à tâtons. La latte comporte un peu de jeu, vous sortez votre couteau et glissez la lame entre deux pour faire levier. </p>
        <p className={styles.text}>La planche de bois se soulève sans effort et dévoile une petite cavité où repose un morceau d’étoffe roulé en boule. En dépliant le morceau d’étoffe, vous découvrez avec stupéfaction une magnifique pièce dorée. </p>
        <p className={styles.text}></p>
        <p className={styles.text}></p>
                </Link></div> 

                {/* DROITE */}
                <div className={styles.filterBoxRight}>
       
        <p className={styles.text}>Vous la soupesez dans votre main, elle possède un poids agréable. En inspectant la pièce, et par le truchement de l’esprit de l’enfant, vous réalisez subitement de quoi il s’agit : un Louis d’or. C’est un cadeau que l’enfant avait reçu des mains de son grand-père quelques jours avant que la flamme du vieillard ne s’éteigne à tout jamais. </p>
        <p className={styles.text}>« Je te confie mon plus grand trésor, mon garçon » avait balbutié le vieillard, la maladie qui le rongeait était déjà à un stade avancé. « Cache la minutieusement dans un endroit dont toi seul connaît l’existence. Nul doute qu’elle te servira un jour ».</p>
        <p className={styles.text}>C’était le seul souvenir tangible qu’il avait pu garder de lui. C’était un objet précieux, sans parler de sa valeur marchande. En effet, un Louis d’or vaut 20 francs argent, eux même valant chacun 20 francs bronze.</p>
        <p className={styles.text}>Vous venez de mettre la main sur une somme d’argent confortable. Puisse t-elle vous servir au cours de votre périple.</p>
        <p className={styles.text}>VOUS POSSEDEZ DESORMAIS UN LOUIS D’OR.</p>
                    
                <button className={styles.animaux}><Link to='/parleraCharlie'>parler à Charlie le Coq</Link></button>
                <button className={styles.animaux}><Link to='/parleraGladys'>parler à Gladys la chèvre</Link></button>
                </div>
            </div>
        </div>

    )
}


export default Fouiller