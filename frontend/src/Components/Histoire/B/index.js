import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';
import Header from '../../Header';
import Image from '../../../img/etang.png';

const B = () => {
  
    return(
            <div>  
            <Header/>
              <div className={styles.container} style={{
                  backgroundImage: 'url(' + Image + ')', 
                  backgroundSize: '100vw' 
                  }}>

                <button><Link to="/A" className={styles.Link}>Page précédente</Link></button>
                <button><Link to="/C" className={styles.Link}>Page suivante</Link></button>


                   {/* GAUCHE */}
                   <div className={styles.filterBox}><Link to="/A">
        <p className={styles.text}> Il pensait également à toute la faune qui s'éveille, il imaginait les yeux d'une chouette qui s'ouvrent dans la pénombre à l’affût d'un mulot imprudent. Comme la nuit était terrifiante. Régulièrement il entendait des loups crier à l'unisson, mais dans ces moments là il était généralement enfoui dans son lit au chaud, tout en sachant qu'il était hors de danger, son père n'hésiterait pas à se servir du balai pour terrasser la menace.</p>
        <p className={styles.text}>Ainsi était rythmée la vie de l'enfant. Passant d'une occupation à une autre, tout en se demandant ce que la vie avait à offrir de plus. Le monde était un mystère à ses yeux. Il voulait l'arpenter et le découvrir tout entier. En attendant il était coincé dans ce village perdu, condamné à attendre de grandir pour qu'enfin ses parents ne s'opposent pas à ce qu'il aille plus loin que l'étang, derrière les collines, et peut-être plus loin encore, vers la ville. Il paraît qu'il s'y passe des choses incroyables, le boulanger du village lui avait expliqué une fois que les jours de fêtes y étaient particulièrement mémorables. Il avait assisté à un spectacle de saltimbanques et tandis qu'il décrivait les merveilles dont il avait été témoin, son regard s'illuminait, étincelait presque : "Il y avait un homme dragon qui crachait des flammes de plusieurs mètres, sans parler du bouffon qui jonglait avec plusieurs torches allumées sans jamais en laisser tomber une".  L'enfant se rejouait souvent la scène, juste avant de s'endormir. Les flammes de l'homme dragon combinés à celles des torches se baladaient dans son esprit en une valse harmonieuse. Cela ne manquait jamais de le bercer et il dormait comme tous les enfants de son âge, c'est à dire de manière aussi intense que paisible.</p>
                  </Link></div>
                  {/* DROITE */}
                  <div className={styles.filterBoxRight}><Link to="/C">
        <p className={styles.text}>Le matin il se sentait frais, l'esprit aussi clair que l'eau du fleuve. Il prenait une longue inspiration et bondissait généralement de son lit en moins de temps qu'il ne le faut pour dire "Abracadabrantesque". C'était certes le mot le plus long de son vocabulaire restreint, il n’empêche que le garçon débordait d’énergie et encore davantage après avoir ingurgité quelques céréales pour le petit déjeuner. Tous les matins c’était la même routine. Il mangeait en silence en regardant par la fenêtre, imaginant de quoi serait faite sa journée. Peut-être serait-ce une journée placée sous le signe de l’improbable...Hélas c’était peu probable...A moins que.</p>
        <p className={styles.text}>Ce matin là, il se réveilla en sueur, assoiffé et quelque peu désorienté, comme lorsque que l’on émerge d’un rêve si profond que l’on se sent sous son emprise de longues minutes après avoir ouvert les yeux. Il avait une sensation d’hyper-réalité, comme si toutes ses sensations étaient exacerbées. Il n’entendait aucun bruit, si ce n’est la mélodie de certains oiseaux comme s’ils chantaient à même son esprit, tout était trop calme. D’habitude lorsqu’il se réveillait, il entendait sa mère s’activer en cuisine ou encore des chiens qui aboient au loin, un peu d’animation en tout cas. Il se figea un instant avant de se redresser. Il avait un sentiment de catastrophe imminente. Il appela sa mère d’une voix qui lui glaça le sang tant elle sonnait fébrile et terrifiante. L’absence de réponse fit se tordre son estomac, quand soudain, lentement, la porte de sa chambre s’entrouvrit. </p>
                  </Link></div>
                </div>
            </div>

    )
}

export default B