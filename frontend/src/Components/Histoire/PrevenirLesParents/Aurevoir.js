import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';
import Header from '../../Header';

const Aurevoir = () => {
  
    return(
            <div>  
             <Header/>
                 <div className={styles.container} style={{
                    backgroundImage: 'url(' + Image + ')', 
                    backgroundSize: '100vw' 
                    }}>

                <button> <Link to="/prevenirlesparents" className={styles.Link}>Page précédente</Link></button>
                <button> <Link to="/prevenirlesparentsaurevoirmere" className={styles.Link}>Page suivante</Link></button>

                {/* GAUCHE */}
                <div className={styles.filterBox}><Link to="/prevenirlesparents">
        <p className={styles.text}>C’était un petit jeu entre vous qui ressortait de temps à autre. Elle était un commandant impitoyable mais vous étiez également un soldat irréprochable, de telle sorte qu’elle ne puisse jamais vous condamner au pain sec et à l’eau pour insubordination ou toute autre entorse à l’étiquette. Malin.</p>
        <p className={styles.text}>« Maman, avant de partir, j’avais juste une petite chose à dire.</p>
        <p className={styles.text}>Petite, mes fesses, autant essayer de convaincre le Roi de renoncer à la dime.</p>
        <p className={styles.text}>Elle fronce légèrement les sourcils, comme une invitation à poursuivre</p>
        <p className={styles.text}>« Voilà. Comment dire ça et faire en sorte que tu ne bondisses pas de ta chaise… ?</p>
        <p className={styles.text}>Elle plisse les yeux et vous jauge du regard comme si elle s’attendait à une galéjade mais ne pouvait s’en convaincre pour l’instant.</p>
        <p className={styles.text}>« Bon. Je peux parler aux animaux…</p>
        <p className={styles.text}>Un sourire amusé se dessine sur son visage. C’était la plus stricte vérité, ça n’en restait pas moins une idée complètement absurde. Parler aux animaux...N’importe quoi. Autant marcher sur la Lune tant qu’on y est.</p>
        <p className={styles.text}></p>
       
     
        

                </Link></div> 

                {/* DROITE */}
                <div className={styles.filterBoxRight}><Link to='/prevenirlesparentsaurevoirmere'>
        <p className={styles.text}>« ...et Grisou m’a appris que j’étais l’élu... »</p>
        <p className={styles.text}>Elle lève les yeux en ciel.</p>
        <p className={styles.text}>« ... je dois partir affronter le néant... »</p>
        <p className={styles.text}>Elle hoche la tête, comme si elle s’était faite à l’idée que vous étiez fou et ne voulait surtout pas vous contrarier.</p>
        <p className={styles.text}>Qui sait ? Les fous sont peut-être comme les somnambules ; il ne faut pas les perturber lorsqu’il sont en pleine crise.</p>
        <p className={styles.text}>« ...je dois partir sur le champs car le temps presse... »</p>
        <p className={styles.text}>- Oui oui, et toi tu me fais perdre le mien, dit-elle avec un sourire teinté d’amusement, tu n’as rien de mieux à faire dis moi ?</p>
        <p className={styles.text}>Un sentiment d’impuissance qui vous accable. C’est terrible de n’avoir que la vérité à offrir quand cette dernière prend la forme de folles inepties. Soudain votre impuissance se mue en colère. </p>
        <p className={styles.text}>« Je suis très sérieux. Si je ne fais rien, bientôt le monde deviendra insipide, plat et sans saveurs. </p>
        <p className={styles.text}>-Super, oui. » Elle n’était pas contrariante, il fallait le reconnaître. Cette pantalonnade allait toutefois s’arrêter sur le champs.</p>
        <p className={styles.text}></p>
        <p className={styles.text}></p>
        <p className={styles.text}></p>
        <p className={styles.text}></p>
        <p className={styles.text}></p>
            </Link>    </div>
            </div>
        </div>

    )
}


export default Aurevoir