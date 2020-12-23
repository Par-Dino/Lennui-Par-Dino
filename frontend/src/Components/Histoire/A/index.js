import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';
import Header from '../../Header';
import Image from '../../../img/moulin.png';

const A = () => {
  
    return(
            <div>
              <Header />
              <div className={styles.container} style={{
                    backgroundImage: 'url(' + Image + ')', 
                    backgroundSize: '100vw' 
                    }}>

                  <button> <Link to="/Prologue" className={styles.Link}>Page précédente</Link></button>
                  <button> <Link to="/B" className={styles.Link}>Page suivante</Link></button>

                  {/* GAUCHE */}
                  <div className={styles.filterBox}><Link to="/Prologue"> 
          <p className={styles.text}>Il avait fallu plusieurs mois, et quelques opérations séduction pour que son père accepte enfin de laisser le félin dormir à l'intérieur avec eux, et non plus dans la grange, posé sur un ballot de paille, à quelques distances des vaches et des moutons. Bien entendu le chat passait le plus clair de ses journées à dormir et n'était pas une source folle de distraction , d'abord parce qu'il était vieux et fatigué, mais surtout grâce à toute la sagesse qu'il semblait avoir accumulé au fil des ans, mais le garçon ne l'en aimait pas moins de tout son coeur et passait souvent de longues minutes à l'observer simplement, parfois en caressant doucement son pelage. Ensuite, il vaquait à ses occupations. </p>
          <p className={styles.text}>Il allait parfois à l'étang, muni des plus beaux cailloux pour une petite série de ricochets. Au fil du temps, il avait atteint un niveau plus qu'honorable. Il y a même une fois où le caillou a ricoché sur toute la largeur de l'étang pour atterrir dans les herbes, certes ce n'était pas un étang de grande envergure, n'empêche que le garçon était fier de son exploit. D'autres fois, lorsque son père sollicitait son aide, il allait l'aider pour une tache spéciale, parfois juste pour se rendre utile, pour balayer çà et là.</p>
          <p className={styles.text}>Lorsque son père était vraiment débordé, il lui laissait parfois traire les vaches, car il suffit de le faire une fois pour que le geste devienne presque instinctif. S'il est une preuve que les animaux, à l'image des hommes, peuvent avoir des caractères bien différents au sein d'une même espèce, c'est celle-ci ; les trois vaches dont il s'occupait occasionnellement étaient radicalement différentes.</p>
                 </Link></div>

                 {/* DROITE */}
                 <div className={styles.filterBoxRight}><Link to="/B">
          <p className={styles.text}>En apparence, c'était toutes de simples vaches laitières, celles avec des taches noires disposés ça et là par des jets de dés divins. C'est lorsque que l'on s'attardait sur leurs caractères respectifs que cela devenait intéressantIl y avait Réglisse, c'était la plus digne de toutes, elle ne lui léchait jamais la main et soupirait vivement lorsqu'elle se faisait traire. Il y avait ensuite Caramel, sa préférée, avec un regard toujours tendre et semblait-il reconnaissant. Elle n'était jamais capricieuse et se laissait volontiers flatter en remuant la queue comme un chien à qui on jette un os à moelle. Et puis venait Frisette -car étrangement elle avait tendance à boucler- qui était quant à elle tout simplement spéciale, elle était obsédée par les mouches et paraissait déterminée à toutes les éliminer une par une. À ce jour je ne crois pas qu'elle en ait eu une seule, mais elle ne perdait jamais espoir. </p>
          <p className={styles.text}>Tout ça pour dire qu'il ressentait souvent que les animaux cachaient en eux quelque chose de plus profond, comme une histoire qui lui était inaccessible, tout en semblant étrangement à portée de main, ou plutôt à portée d'esprit.</p>
          <p className={styles.text}>Le soir, il avait parfois le droit d'assister au coucher de soleil. Il restait pensif de longs instants, le regard vague, imaginant tous les animaux qui se couchent : les lapins qui rentrent dans leurs terriers et se calfeutrent pour se protéger des renards, les écureuils qui profitent des derniers rais de lumière pour récolter des noisettes et des glands sans être vus, mais aussi les canards, bien qu'à leurs égard l'enfant n'avait aucune idée de la manière dont dormaient ces animaux.</p>
                  </Link></div>

                    </div>
                </div>

    )
}

export default A