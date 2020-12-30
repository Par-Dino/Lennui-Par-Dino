import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';
import Header from '../../Header';
import Image from '../../../img/Cielbleu.png';

const Accepter = () => {
  
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
                <button> <Link to="/F" className={styles.Link}>Page précédente</Link></button>
                </div>
        <p className={styles.text}>« Oui oui, très bien, j’accepte.</p>
        <p className={styles.text}>-Sage décision. Tu ne le regrettera pas, sois en sûr. »</p>
        <p className={styles.text}>Le regard de Grisou s’adoucit sensiblement. L’enfant quant à lui semblait à la fois perdu et préoccupé. Il reprit et, tachant de se calmer, pris le soin d’articuler :</p>
        <p className={styles.text}>« Mais comment, au juste, suis-je sensé triompher d’un tel fléau ? Je ne suis qu’un enfant après tout…</p>
        <p className={styles.text}>N’aie crainte humain. » Son regard malicieux semblait sourire. « Tu es certes gringalet et un peu naïf sur les bords, mais sache que tu n’avancera pas seul dans cette quête. D’abord les animaux, si tu fais preuve de bonté envers eux, ils t’ouvriront la voie royale. Je n’ai aucun doute sur ta capacité à t’en faire des alliés et ainsi bénéficier de leur soutien et leur loyauté inconditionnelle. Méfie-toi simplement des renards, certains sont fourbes et n’hésiteront pas à te duper. »</p>
        <p className={styles.text}>Le chat cosmique cligna des yeux. Comme l’enfant était plongé dans son esprit, il ressenti à quel point l’humeur du matou influait sur l’environnement dans lequel il flottait. Il ressentait des vagues de chaleur qui semblaient s’insinuer dans tout son corps. Il était détendu et totalement réceptif, comme si rien ni personne n’était en mesure de troubler la quiétude du moment.</p>
            

                {/* DROITE */}

        <p className={styles.text}>« Par ailleurs, reprit Grisou. Tu ne sera jamais totalement livré à toi-même.</p>
        <p className={styles.text}>-Oh, chouette, tu sera mon compagnon de route alors ?</p>
        <p className={styles.text}>-Ce n’est pas mon rôle. Je ne suis qu’un humble messager après tout. Une fois les instructions délivrées je file me toiletter et ensuite j’irais faire une sieste jusqu’à la tombée du jour . »</p>
        <p className={styles.text}>L’enfant paraissait déçu mais nullement surpris. Les chats sont parfois si prévisibles.</p>
        <p className={styles.text}>« Oh…</p>
        <p className={styles.text}>-Trêve de galéjade. Tu fera équipe avec celui que l’on nomme Le Lecteur. Toujours aussi prévisible ? »</p>
        <p className={styles.text}>Bon joueur, l’enfant souris. Le chat percevait la moindre de ses pensées, il valait mieux se montrer prudent à l’avenir quant aux stéréotypes félins.</p>
        <p className={styles.text}>« Tu te demandes certainement qui est ce fameux Lecteur ? Et bien nul ne le sait tout à fait, pas même Le Lecteur lui-même. Ses formes sont multiples et il a de nombreux visages. Nous n’évoluons pas dans le même espace-temps et jamais tu ne pourra t’adresser à lui directement. Mais il sera près de toi à chaque instant, il balisera ton chemin et t’aidera à prendre les meilleures décisions. Ses intentions sont cachées, de même que sa nature profonde.</p>
        
        <div className={styles.btnS}>
        <button> <Link to="/accepterSonDestinSuite" className={styles.Link2}>Page suivante</Link></button>
        </div>
            </div>
            </div>
        </div>

    )
}


export default Accepter