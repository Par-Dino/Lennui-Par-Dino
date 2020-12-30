import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';
import Header from '../../Header';
import Image from '../../../img/Sombrevecteur3.png';

const Final = () => {
  
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
                <button> <Link to="/renierSonDestin" className={styles.Link}>Page précédente</Link></button>
                </div>

        <p className={styles.text}>Le brossage se déroula sans accrocs, les deux bidets avaient fière allure. Voilà qui était digne d’animaux de cet acabit. Par excès de zèle, le garçon décida de bien faire et entreprit de nettoyer aussi leurs sabots. Il nettoya les deux sabots avant sans rencontrer de problèmes. Après tout, le métier de fermier réclamait surtout du temps et de la patience. Du reste, avec un peu de bon sens on finissait toujours par s’en sortir. </p>
        <p className={styles.text}>Il félicita la brave bête en lui tapotant le flanc : « C’est bien mon gros, plus que deux et tu aura droit à une petite récompense ». L’enfant lui toucha délicatement le talon et le cheval répondit en adoptant la position adéquat. Concentré sur son labeur, l’enfant ne vit pas le corbeau se percher sur la porte derrière lui.</p>
        <p className={styles.text}>Il était parfaitement silencieux tandis qu’il promenait sur la scène son regard de mort. Si personne n’aime voir ces animaux roder, c’est bien parce qu’ils ne viennent jamais seuls. Ce sont les alliés du malheur, du désespoir et de la putréfaction. Furtivement, le soleil se refléta dans l’œil du corvidé, semblable à un onyx.</p>
        <p className={styles.text}>Une fraction de seconde plus tard, le destin reprit ses droits. Quiconque a déjà entendu un tel oiseau croasser pourrait certifier que le cri qui se réverbéra alors dans l’écurie n’avait rien de naturel. C’était un cri sorti d’outre tombe, une véritable insulte au vivant et à la création toute entière. </p>
        <p className={styles.text}></p>
         

                {/* DROITE */}
               
        <p className={styles.text}>Ensuite tout ne fut que désordre et chaos, sang et larmes, cris et désespoir. Le cheval pris peur et donna un violent coup de sabot dans l’arête nasale du jeune garçon qui se rompit sous le choc en catapultant l’enfant à l’autre bout du box. Tout son corps était à moitié avachi sur un ballot de paille qui n’avait en rien amorti la collision. Il avait le visage ensanglanté et là où se trouvait jadis son nez, il ne restait plus qu’une bouillie informe d’où coulait un unique filet de sang. </p>
        <p className={styles.text}>. La masse gisante eut un dernier sursaut, puis ce fut tout. La présence de chevaux en colère à quelques mètres ne sembla guère perturber le corbeau qui fondit sur son futur repas. Lorsque la mère du garçon arriva en trombe près du box, elle croisa un étrange corbeau qui tenait dans son bec ce qui ressemblait à un morceau de viande crue.</p>
        <p className={styles.text}>Le croassement démoniaque du corbeau peina à rivaliser avec le cri de détresse qui retentit cet après-midi là sur plus d’un kilomètre à la ronde.</p>
        <p className={styles.text}>Ici s’achève votre aventure. Nul ne peut aller à l’encontre de sa destinée.</p>
        
        <div className={styles.btnS}>
        <button> <Link to="/" className={styles.Link}></Link></button>
        </div>

                </div>
            </div>
        </div>

    )
}


export default Final