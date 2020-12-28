import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';
import Header from '../../Header';
import Image from '../../../img/grisou.png';

const F = () => {
  
    return(
            <div>  
             <Header/>
                 <div className={styles.container} style={{
                    backgroundImage: 'url(' + Image + ')', 
                    backgroundSize: '100vw' 
                    }}>

                <button> <Link to="/E" className={styles.Link}>Page précédente</Link></button>
                <button> <Link to="/G" className={styles.Link}></Link></button>

                {/* GAUCHE */}
                <div className={styles.filterBox}><Link to="/E">
                <p className={styles.text}>  une grenouille assise sur un nénuphar, un veau tétant sa mère, un singe se reposant dans une source chaude, un nourrisson qui pleure, une biche qui s’abreuve au ruisseau.</p>
        <p className={styles.text}>Les images défilaient, de l’infiniment petit à l’immensément grand. Très vite un lion rugissant laissa place à une somptueuse girafe. Tout s’accéléra jusqu’à ce qu’il se fasse engloutir par une baleine bleue. Puis tout devint noir. Un noir profond, abyssal. Ce n’était pas du vide comme tout à l’heure. C’était quelque chose de plus insidieux. « Anti-matière », c’est ce que son cerveau lui suggérait, et c’était effrayant. Plus la vision s’intensifiait, plus il sentait un profond désespoir l’envahir. Les yeux du chat apparurent de nouveau et son calvaire pris fin.</p>
        <p className={styles.text}>« J’espère que l’expérience t’as plu mon jeune ami. Tu viens d’assister au spectacle de la Vie. As-tu remarqué comme elle est belle, complexe et harmonieuse ? Jusqu’à présent la vie n’a cessé de s’étendre et de proliférer, à l’image de l’univers tout entier. Hélas, il y a peu le Néant est apparu et il gagne du terrain à mesure que le temps s’écoule. C’est ce que j’ai tenté de te montrer, mais sache qu’aucun esprit ne peut matérialiser un tel concept. Tout ce que tu dois savoir c’est que le Néant s’attaque à toute forme de vie, toute forme de créativité et toute forme de matière. Avant lui il n’y a rien, après lui tout n’est que désolation. Toi seul peut mettre un terme à sa progression et sauvegarder ainsi l’essence même de la Vie. Cela fait des années que j’attends inlassablement de te transmettre ce message. Tu es le héro dont parle la prophétie :</p>
                </Link></div> 

                {/* DROITE */}
                <div className={styles.filterBoxRight}>
        <p className={styles.text}>« Lorsque du monde couleur émeraude émergera un héro, que les muets prendront la parole, alors commencera l’aventure. Il sera guidé à travers vents et marées, feux et rochers. Il ne craindra pas les yeux qui se cachent dans les ténèbres car le mal réside ailleurs. L’Élu surmontera ses peurs et abolira la terreur. Une fois le néant décimé le monde sera sauvé »</p>
        <p className={styles.text}>- Ca semble être une lourde responsabilité…</p>
        <p className={styles.text}>- Effectivement, mais c’est écrit, alors nul doute n’est permis.</p>
        <p className={styles.text}>- Oui, certes, mais ça a l’air quand même dangereux…</p>
        <p className={styles.text}>- Tu ne peux aller contre ta destinée.</p>
        <p className={styles.text}>- Très bien, très bien…</p>
        <p className={styles.text}>- Parfait ! Qu’il en soit ain…</p>
        <p className={styles.text}>- Mais si je venais à refuser ? </p>
        <p className={styles.text}>- Eh bien, il est vrai que contractuellement parlant, rien ne t’y obliges, m’enfin…Décides-toi et vite, conclus le chat, visiblement agacé.</p>
                

                
                <button className={styles.destiny}><Link to='/renierSonDestin'>Renier son destin </Link></button>
                <button className={styles.destiny}><Link to='/accepterSonDestin'>Accepter son destin </Link></button>

                </div>
            </div>
        </div>

    )
}


export default F