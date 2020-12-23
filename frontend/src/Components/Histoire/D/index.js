import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';
import Header from '../../Header';
import Image from '../../../img/grisou.png';

const D = () => {
  
    return(
            <div>  
            <Header/>
                <div className={styles.container} style={{
                    backgroundImage: 'url(' + Image + ')', 
                    backgroundSize: 'cover' 
                    }}>

                <button> <Link to="/C" className={styles.Link}>Page précédente</Link></button>
                <button> <Link to="/E" className={styles.Link}>Page suivante</Link></button>

                    
                     {/* GAUCHE */}
                     <div className={styles.filterBox}> <Link to="/C">
        <p className={styles.text}>- C’est sûr, mais il faudra te montrer prudent et éviter les accidents, est-ce bien clair ? Le reprit-elle en pointant sur lui un doigt accusateur.</p>
        <p className={styles.text}>- Affirmatif. Je suis un homme, un vrai, désormais. Je ferai attention je te le promets.</p>
        <p className={styles.text}>- Très bien, dans ce cas viens m’embrasser et file. Tu es libre ce matin. En revanche cet après-midi tu devra aller aider ton père à traire les vaches.</p>
        <p className={styles.text}>De retour dans sa chambre il trouva Grisou, perché cette fois sur son lit. Il attendait sagement qu’on daigne lui prêter attention. L’enfant, obnubilé, n’avait d’yeux que pour son couteau, qu’il tournait et retournait dans tous les sens. Le soupesant  et orientant la lame de telle sorte que le soleil s’y reflète.</p>
        <p className={styles.text}>« Ecoute-moi »</p>
        <p className={styles.text}>L’enfant se figea un instant. Il avait cru entendre son chat lui parler. Il fallait vraiment qu’il se change les idées et qu’il s’occupe davantage l’esprit. Si aujourd’hui il parlait avec son chat, qu’en serait-il demain ? Il irait haranguer les champs de laitues ? Cela lui rappela le triste sort de l’ancien forgeron. Il avait commencé par parler tout seul, ce qui ma foi n’est pas si dérangeant, hélas il avait continué à s’enfoncer toujours plus dans les limbes de la folie. On l’avait retrouvé un matin dans le poulailler du voisin, ne portant sur lui qu’un linge sale en guise de sous vêtements, tentant de jouer une partie d’échecs avec un pigeon. </p>
                    </Link> </div>
                     {/* DROITE */}
                     <div className={styles.filterBoxRight}><Link to="/E" className={styles.Link}>
        <p className={styles.text}> L’oiseau, disait-on, avait renversé quelques pièces à droite à gauche, avait déposé une fiente en plein milieu du plateau et roucoulait d’un air triomphant. Et depuis ce jour on n’avait plus entendu parler du…</p>
        <p className={styles.text}>« Assez. Concentre-toi humain, j’ai d’importantes choses à te dire »</p>
        <p className={styles.text}>L’enfant écarquilla les yeux et tourna lentement la tête jusqu’à faire face à l’animal. « Mais tu...tu... »</p>
        <p className={styles.text}>« Comme tu peux le constater oui...N’en faisons pas toute une histoire non plus. Assieds-toi quelques instant, si tu venais à tomber dans les pommes et te briser la nuque, nous serions bien avancé... ». L’enfant s’exécuta sans mot dire, comme hypnotisé.</p>
        <p className={styles.text}>« Puisque je sens qu’en l’absence d’explications ton esprit d’humain resterait bloqué sur cette question triviale, je vais tenter de d’expliquer ce qu’il en est. Sache que tous les animaux parlent. Ils n’ont jamais cessé de parler. Tous n’ont pas mon éloquence, mais que veux-tu, n’est pas félin qui veut. Il y a très longtemps, lorsque l’Homme et la nature vivaient en harmonie, les humains avaient la capacité d’entendre et de comprendre les animaux. Au fil du temps l’homme s’est coupé de la nature, a construit des maisons et des barricades, si bien que Gaïa, la déesse de la nature, punit les hommes en leur retirant ce fabuleux pouvoir. »</p>
        <p className={styles.text}>« Mais... » L’enfant avait la gorge nouée, il s’exprimait lentement, comme quelqu’un qui réapprend à parler après un traumatisme cérébral.</p>
                    </Link></div>
                    
                </div>
            </div>

    )
}

export default D