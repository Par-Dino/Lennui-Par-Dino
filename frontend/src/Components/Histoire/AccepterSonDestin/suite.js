import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';
import Header from '../../Header';

const Suite = () => {
  
    return(
            <div>  
             <Header/>
                 <div className={styles.container} style={{
                    backgroundImage: 'url(' + Image + ')', 
                    backgroundSize: '100vw' 
                    }}>

                <button> <Link to="/accepterSonDestin" className={styles.Link}>Page précédente</Link></button>
                <button> <Link to="/" className={styles.Link}>Page suivante</Link></button>

                {/* GAUCHE */}
                <div className={styles.filterBox}><Link to="/accepterSonDestin">
        <p className={styles.text}>Ce pourrait être un dieu ou simplement un curieux qui s’ennuie. Toujours est-il que lorsque tu sera face à un choix ou bien cerné d’incertitudes, il sera toujours là pour te suggérer une voie plutôt qu’une autre. Il te suffira simplement d’écouter ton cœur. »</p>
        <p className={styles.text}>A ce stade, même le discours nébuleux du matou semblait aller de soi. Il était un garçon d’à peine dix ans qui allait partir à l’aventure, aidé du Lecteur, pour repousser le Néant qui menace d’aspirer l’essence même de toute chose. C’était devenu une évidence pour lui. Le doute avait déserté son esprit, seul restait l’envie d’en découdre et d’essayer son couteau flambant neuf.</p>
        <p className={styles.text}>« Soit prudent » firent les derniers mots que « prononça » le chat. </p>
        <p className={styles.text}>L’enfant ouvrit les yeux, juste à quelques centimètres de la tête du chat. Hier il aurait cru rêver, mais c’est bien un clin d’œil que lui adressa Grisou avant de bondir du lit. Il avait d’autres chats à fouetter.</p>
        
                <button className={styles.destiny}><Link to='/fouillerLaChambre'>fouiller la chambre</Link></button>
                <button className={styles.destiny}><Link to='/parlerAsaMere'>parler à sa mère</Link></button>

                </Link></div> 

                {/* DROITE */}
                <div className={styles.filterBoxRight}>
       
        <p className={styles.text}>LECTEUR, VOTRE AVENTURE COMMENCE ICI !</p>
        <p className={styles.text}>Lecteur, j’ai à vous parler, et comme d’habitude, vous allez m’écouter attentivement. Après tout, vous n’avez pas vraiment le choix...Enfin, pour l’instant.</p>
        <p className={styles.text}>Puisque vous êtes arrivé ici, j’en conclus que l’histoire ne vous a pas laissé indifférent. Vous avez par ailleurs déjà fait le choix le plus sage : celui d’accepter votre destin. Félicitations ! L’enfant et vous, êtes désormais liés par une connexion unique en son genre. Il sera le navire, et toi le capitaine. Car un navire sans capitaine c’est comme un cheval sans pattes, il n’ira pas bien loin. Et un capitaine sans navire, c’est comme une âme sans dessein.</p>
        <p className={styles.text}>Fort heureusement, le destin vous a réunis. Capitaine, il est temps de larguer les amarres. </p>
        <p className={styles.text}>Vous êtes désormais en possession des pleins pouvoir, tachez d’en user avec noblesse et sagesse.</p>
        <p className={styles.text}>Le temps presse, il est temps d’agir, et vite !</p>
        <p className={styles.text}>Au cours de votre aventure, selon les choix que vous ferez, vous serez amené à ramasser de l’argent, des objets et même parfois des indices précieux. Ceux-ci seront stockés dans votre inventaire et vous offrira des possibilités inédites au cours de votre périple.</p>
        
                </div>
            </div>
        </div>

    )
}


export default Suite