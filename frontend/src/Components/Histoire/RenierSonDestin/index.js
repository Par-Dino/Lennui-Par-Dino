import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';
import Header from '../../Header';

const Renier = () => {
  
    return(
            <div>  
             <Header/>
                 <div className={styles.container} style={{
                    backgroundImage: 'url(' + Image + ')', 
                    backgroundSize: '100vw' 
                    }}>

                <button> <Link to="/F" className={styles.Link}>Page précédente</Link></button>
                <button> <Link to="/renierSonDestinFinal" className={styles.Link}>Page suivante</Link></button>

                {/* GAUCHE */}
                <div className={styles.filterBox}><Link to="/F">
        <p className={styles.text}>« Pour être honnête avec toi, je la sens vraiment pas toute cette histoire...Et puis c’est sans compter mes parents qui seraient fou d’inquiétude, alors bon…</p>
        <p className={styles.text}>- C’est oui ou c’est non ? Par tous les dieux, qu’on en finisse !</p>
        <p className={styles.text}>Les yeux du félin semblaient incandescents, prêts à réduire en cendre tout ce qui serait à portée de regard.</p>
        <p className={styles.text}>- Eh bien puisque j’ai le choix, je préfère ne pas m’engager. Et puis cet après-midi je m’étais dit que d’aller traire les vaches serait une bonne chose.</p>
        <p className={styles.text}>Comme s’il réfléchissait à la suite des évènement, le chat resta muet l’espace d’un instant. Finalement, après un moment emprunt d’hésitation et de consternation, le félin lâcha, impérieux :</p>
        <p className={styles.text}>« Très bien. Sache qu’en renonçant à ton destin, non seulement tu condamnes le monde à son triste sort, mais tu te condamnes toi-même par dessus le marché. Tu as renié la prophétie, ce qui signifie tourner le dos au divin. Tu ne gardera qu’un souvenir lointain et confus de notre discussion. Tu croira avoir rêvé et retournera vite à tes activités triviales. Je suis déçu, mais comme tu as toujours été un enfant doux et serviable, je te pardonne. »</p>
                </Link></div> 

                {/* DROITE */}
                <div className={styles.filterBoxRight}><Link to="/renierSonDestinFinal">
        <p className={styles.text}>Les yeux s’éteignirent.</p>
        <p className={styles.text}>Tout disparu de nouveau. Avec la violence d’un coup de fusil, sa conscience rejoignit son corps. Sortir de l’esprit d’un chat était, semblait-il, encore plus violent que d’y rentrer.</p>
        <p className={styles.text}>L’enfant ouvrit les yeux et eut un peu de mal à comprendre la situation dans laquelle il se trouvait. Les mains posées solennellement sur les pattes du chat, ce dernier le fixa d’un air indifférent, bailla puis bondit hors du lit avant de filer par la fenêtre entre-ouverte.</p>
        <p className={styles.text}>L’enfant s’essuya machinalement la bouche d’un revers de manche. Il s’était bavé dessus. Il entreprit ensuite d’aller traire les vaches, comme en état de transe.</p>
        <p className={styles.text}>Quelques jours plus tard, son père lui confia la tache inhabituelle d’aller brosser Jolly et Jumper, les deux chevaux de la ferme familiale. Il avait trop à faire, l’une de ses poules s’était rompue la patte et il devait la soigner de toute urgence.</p>
        <p className={styles.text}>L’enfant s’attela à la tache sans demander son reste, il connaissait bien ces deux phénomènes. Il se tiendraient tranquilles, d’autant plus qu’ils aimaient qu’on s’occupe d’eux. </p>
                    </Link>
                </div>
            </div>
        </div>

    )
}


export default Renier