import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';
import Header from '../../Header';

const Prevenir = () => {
  
    return(
            <div>  
             <Header/>
                 <div className={styles.container} style={{
                    backgroundImage: 'url(' + Image + ')', 
                    backgroundSize: '100vw' 
                    }}>

                <button> <Link to="/" className={styles.Link}>Page précédente</Link></button>
                <button> <Link to="/prevenirlesparentsaurevoir" className={styles.Link}>Page suivante</Link></button>

                {/* GAUCHE */}
                <div className={styles.filterBox}><Link to="/transition">
        
        <p className={styles.text}>« Bon, j’ai fini de traire ces dames. Au fait p’pa. Ce matin le chat m’a confié une mission. Il m’a tout expliqué lorsque je suis rentré dans son esprit... »</p>
        <p className={styles.text}>Il valait mieux être direct avec lui et croiser les doigts pour qu’il ne percute que plus tard, quand vous serez déjà loin.</p>
        <p className={styles.text}>-Hm hm. </p>
        <p className={styles.text}>Il était dans sa bulle, occupé à nourrir les vaches. Lorsqu’il était absorbé par son travail, pas même le cri d’une harpie saurait lui arracher un haussement de sourcil.</p>
        <p className={styles.text}>-...Et donc je pars affronter Le Néant, sans quoi toute forme de créativité sera bientôt morte et le visage de la Terre changera à tout jamais...</p>
        <p className={styles.text}>- Très bien.</p>
        <p className={styles.text}>-...Ne t’en fait pas, j’ai mon couteau sur moi en cas d’pépin et je serai rentre dès qu’c’est terminé, c’est promis. Au revoir ! </p>
        <p className={styles.text}>- D’accord. Dis, tu veux bien me passer le seau d’avoine avant d’filer ?</p>
        <p className={styles.text}>C’était passé en douceur. Il ne reste plus que votre mère à convaincre et ce ne sera pas une mince affaire.</p>
        <p className={styles.text}></p>
        <p className={styles.text}></p>
        <p className={styles.text}></p>
       
     
        

                </Link></div> 

                {/* DROITE */}
                <div className={styles.filterBoxRight}><Link to='/prevenirlesparentsaurevoir'>
        
        <p className={styles.text}>En rejoignant la maison, vous croisez Grisou, il ne vous adresse pas la parole. Vous pensiez que parler aux animaux serait plus impressionnant que ça. La réalité c’est que la plupart des animaux n’ont ni le temps, ni l’envie de parler avec les hommes, car beaucoup se souviennent.</p>
        <p className={styles.text}>La chasse, l’exploitation, l’extermination...De manière générale, l’Humanité n’a pas apporté que des bonnes choses aux animaux. Si ce n’est aucune.</p>
        <p className={styles.text}>Vous retrouvez l’ambiance rassurante du salon. Elle est assise à la même place que tout à l’heure. Elle porte son regard sur vous tandis que ses mains continuent à travailler comme si elles étaient dotée d’une volonté propre.</p>
        <p className={styles.text}>« Ca s’est bien passé avec les vaches ? »</p>
        <p className={styles.text}>- Au beau fixe mon capitaine !</p>
        <p className={styles.text}>-Et avec ton père ?</p>
        <p className={styles.text}>- Sans commentaire mon capitaine !</p>
        <p className={styles.text}>- Rien à ajouter soldat ?</p>
        <p className={styles.text}>- Rien à ajouter mon capitaine !</p>
        <p className={styles.text}>- Très bien, vous pouvez disposer.</p>
       
              </Link>  </div>
            </div>
        </div>

    )
}


export default Prevenir