import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';
import Header from '../../Header';
import Image from '../../../img/moulin.png';

const Prologue = () => {
  
    return(
            <div>  
             <Header/>
             <div className={styles.container} style={{
                    backgroundImage: 'url(' + Image + ')', 
                    backgroundSize: '100vw' 
                    }}>
                
                <button> <Link to="/HomePage" className={styles.Link}>Page d'accueil</Link></button>
                <button> <Link to="/A" className={styles.Link}>Page suivante</Link></button>
  

                {/* GAUCHE */}
                <div className={styles.filterBox}><Link to="/HomePage">
        <p className={styles.text}>Il était une fois, un jeune garçon qui s'ennuyait.</p>
        <p className={styles.text}> Qui s'ennuyait terriblement.Il était solitaire et réservé, comme sa mère, une couturière réputée pour la finesse de son travail.</p>
        <p className={styles.text}>À cette époque, la vie était aussi dure qu'impitoyable et les distractions étaient rares. Parfois, il trouvait les journées si longues et sans intérêt qu'il se demandait s'il était possible de mourir d'ennui. Ne voulant pas courir le risque, il essayait sans cesse de s'occuper l'esprit, et veillait à ne jamais céder à l'oisiveté. Le curé du village lui avait dit un jour, après la messe, que c'était "la mère de tous les vices", et le vice vous offrait un aller simple pour les flammes de l'enfer."Très peu pour moi" avait conclu l'enfant. </p>
        <p className={styles.text}>Les journées passaient, mais hélas finissaient toutes par se ressembler. Régulièrement, il prêtait main forte à son père, un fermier au grand cœur qui considérait son bétail comme parti intégrante de la famille. D'ailleurs, il avait donné un prénom à chacune d'entre elles. Il répétait souvent à son fils que les bêtes ne l'étaient pas tant, et qu'elles méritaient un profond respect, car sans elles, il serait bien compliqué de se vêtir, se nourrir et se chauffer correctement. </p>
        <p className={styles.text}>L'enfant avait ses préférences bien entendu. Il y avait d'abord Charlie, un coq maladroit qui défendait son territoire avec autant d'aplomb qu'un chiot qui aboie pour la première fois. Venait ensuite Gladys, une petite chèvre pleine de vie qui ne s'arrêtait pas de jouer si ce n'est pour fixer l'enfant d'un regard empli de tendresse et de gratitude.</p>
                </Link></div> 

                {/* DROITE */}
                <div className={styles.filterBoxRight}><Link to="/A">
        <p className={styles.text}> Surtout lorsque celui-ci lui ramenait un morceau de pain qu'il avait sauvé de son déjeuner. Et puis il y avait Grisou, ce vieux matou, qui s'était, un soir posté devant leur maison, et avait miaulé longtemps sans s'arrêter. Il avait réveillé toute la maisonnée, et son père, encore groggy, avait empoigné machinalement le balai, prêt à déloger l'intrus, mais pas franchement déterminé. L'enfant s'était placé entre son père et l'animal et avait plaidé en sa faveur. "Il a sans doute faim, ne pourrions-nous pas plutôt lui offrir quelque chose à manger ? Regarde comme il a l'air misérable" avait-il argumenté. Son père avait alors plongé son regard embrumé dans celui de son fils, et finalement, après avoir considéré la chose un long instant, hocha subtilement la tête en signe d'assentiment avant de rentrer sans ajouter quoi que ce soit d'autre.</p>
        <p className={styles.text}>Après lui avoir offert une petite coupelle de lait et un quignon de pain, le chat avait ronronné de satisfaction et s'était frotté langoureusement, à la manière de ses semblables, sur le petit garçon qui en était ravi. C'est ainsi que Grisou avait adopté son petit humain. L'enfant prétendait l'inverse, mais nous savons tous comment se passent ces choses-là.</p>
                </Link></div>

            </div>
        </div>

    )
}


export default Prologue