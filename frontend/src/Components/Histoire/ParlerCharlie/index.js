import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';
import Header from '../../Header';

const Charlie = () => {
  
    return(
            <div>  
             <Header/>
                 <div className={styles.container} style={{
                    backgroundImage: 'url(' + Image + ')', 
                    backgroundSize: '100vw' 
                    }}>

                <button> <Link to="/" className={styles.Link}>Page précédente</Link></button>
                <button> <Link to="/transition" className={styles.Link}>Page suivante</Link></button>

                {/* GAUCHE */}
                <div className={styles.filterBox}><Link to="/">
        <p className={styles.text}>Vous arrivez dans la basse-cour. Des graines sont éparpillées ça et là, deux poules courent se réfugier à votre arrivée en hurlant :</p>
        <p className={styles.text}>« OhMonDieuOhMonDieuOhMonDieuuuuuuu » </p>
        <p className={styles.text}>Vous n’êtes pas surpris, les poules ont très peu de self-control et cèdent vite à la panique. Les autres poules se rapprochent doucement de leur protecteur bien-aimé. Charlie est là, triomphal et misérable, sérieux et comique à la fois. Vous ne pouvez vous empêcher de sourire devant tant de panache.</p>
        <p className={styles.text}>Charlie a beau être un poil rachitique et pas vraiment impressionnant, il brille par son assurance. C’est lui qui entame la discussion :</p>
        <p className={styles.text}>« Bienvenue dans mon royaumeeeeeeeeee »</p>
        <p className={styles.text}>Entendre Charlie s’exprimer dans la même langue que vous vous laisse perplexe. Vous réalisez que depuis toutes ces années vous vous êtes parlés l’un l’autre sans jamais vraiment vous comprendre. </p>
        <p className={styles.text}>« Quel bon vent t’amène humaiiiiiiiiiin ? »</p>
        <p className={styles.text}>Face à une telle élocution, vous avez envie de rire. Mais vous vous abstenez. Le coq vous porte un regard si solennel que vous retrouvez vite votre sérieux pour lui répondre :</p>
        <p className={styles.text}>« Je suis venu te dire au revoir mon Charlie. Le destin m’attend et apparemment je vais devoir sauver le monde ».</p>

                </Link></div> 

                {/* DROITE */}
                <div className={styles.filterBoxRight}><Link to='/transition'>
        <p className={styles.text}>Le gallinacé ne se démonte pas devant votre réponse. Il paraît en réalité plus soucieux que surpris. Aussi fou que cela puisse paraître, il semble même froncer les sourcils, comme s’il réfléchissait à un problème insoluble, avant de reprendre : </p>
        <p className={styles.text}>- Tu peux compter sur moiiiii ! De combien de poulettes as-tu besoiiiin ?</p>
        <p className={styles.text}>- Oh Charlie ! T’es vraiment l’plus chouette de tous les coqs. C’est gentil mais…</p>
        <p className={styles.text}>- Mes poulettes sont tes pouletteeeees !</p>
        <p className={styles.text}>Il bomba le torse. Jamais l’expression « fier comme un coq » n’avait eu autant de sens.</p>
        <p className={styles.text}>- C’est très aimable à toi, mais je dois voyager léger tu sais.</p>
        <p className={styles.text}>- D’accord. Alors donne moi des graiiiiineees !</p>
        <p className={styles.text}>C’était d’une logique implacable. Autant se délester de ces quelques graines, ça laissera plus de place dans vos poches pour la suite de l’aventure.</p>
        <p className={styles.text}>Vous plongez la main dans votre poche droite tandis que Charlie fait des va-et-vient avec sa tête, comme s’il dansait sur un rythme de bendir imaginaire.</p>
        <p className={styles.text}>-Tiens mon brave…</p>
        <p className={styles.text}>Charlie vous picore dans la main avec frénésie mais douceur. Il jette quelques graines derrières lui et l’une des poules les plus valeureuses se rue dessus avec la célérité d’un tigre qui fond sur sa proie et la grâce d’un faon qui fait ses premiers pas. </p>
        <p className={styles.text}>Le coq vous porte un regard empli de gratitude avant de conclure :</p>
        <p className={styles.text}>- J’ai confiance en toiiiiii ! A la revoyure camaraaaaaadee !</p>
        <p className={styles.text}></p>
        <p className={styles.text}></p>
             </Link>   </div>
            </div>
        </div>

    )
}


export default Charlie