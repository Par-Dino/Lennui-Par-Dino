import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';
import Header from '../../Header';
import Image from '../../../img/grisou.png';

const E = () => {
  
    return(
            <div>  
            <Header/>
                <div className={styles.container} style={{
                    backgroundImage: 'url(' + Image + ')', 
                    backgroundSize: '100vw' 
                    }}>

                <button> <Link to="/D" className={styles.Link}>Page précédente</Link></button>
                <button> <Link to="/F" className={styles.Link}>Page suivante</Link></button>

                    
                     {/* GAUCHE */}
                     <div className={styles.filterBox}><Link to="/D">
        <p className={styles.text}>« ...Pourquoi ? Enfin, je veux dire, pourquoi est ce que moi j’y arrive ? Et pourquoi comme ça, du jour au lendemain ? Je... »</p>
        <p className={styles.text}>-Parce qu’un grand malheur est en train de s’abattre sur la faune. Cela fait des années que j’attends ce moment, patiemment. Depuis le soir où je suis arrivé ici, j’attends. Tu as dix ans aujourd’hui.</p>
        <p className={styles.text}>-Et ? Dit-il en fronçant les sourcils, bien plus alerte qu’il ne l’était quelques instant auparavant.</p>
        <p className={styles.text}>-Et bien la prophétie peut enfin se réaliser.</p>
        <p className={styles.text}>-La prophé quoi ?</p>
        <p className={styles.text}>Aussi incroyable que cela puisse paraître, le chat sembla lever les yeux au ciel.</p>
        <p className={styles.text}>-... Écoute moi humain. Écoute moi attentivement et fait ce que je te dis, et surtout, ne pose plus de questions. Le garçon acquiesçât. Assieds toi près de moi. Pose tes mains sur mes pattes et ferme les yeux.</p>
        <p className={styles.text}>L’enfant s’exécuta, mais rien ne semblait se passer. Il commença a rire doucement, tant la situation était ridicule, quand subitement tout s’écroula autour de lui. Sa chambre avait disparue. Les murs, le chat, le lit et la table basse, tout. Il avait le sentiment de flotter dans le néant. Il se sentait dériver lentement mais n’avait aucun point de repère auquel s’accrocher. Subitement, il fut aveuglé par deux masses lumineuses qui venaient d’apparaître devant ses yeux.</p>
                     </Link></div>
                     {/* DROITE */}
                     <div className={styles.filterBoxRight}><Link to="/F">
                     <p className={styles.text}>C’était deux yeux de chats scintillants. Une voix s’élevât.</p>
        <p className={styles.text}>-C’est moi, humain. N’ait pas peur, ici tu ne crains rien. Tu te trouves actuellement dans mon esprit...Enfin, une représentation qui te soit supportable. Voilà plus d’une décennie que je suis voué corps et âme à la méditation. Mon esprit est inflexible et omnipotent. Tu es en sécurité ici. J’ai à te montrer quelque chose. N’oublie pas que tout ceci ne sont que des projections, rien n’est réel.</p>
        <p className={styles.text}>L’espace d’un instant, tout devint noir et parfaitement silencieux. L’espace d’un instant tout avait disparu. Puis une lumière chaude apparût, d’abord timide, elle devint de plus en plus éclatante jusqu’à aveugler complètement le petit garçon qui se protégea les yeux instinctivement. Finalement tout devint bleu. Il avait le sentiment de dériver lentement au fin fond de l’océan. Il était entouré de plancton et avait conscience de la vie de chacun d’eux, de leur rôle essentiel au sain de l’histoire de la vie. Puis il vit des crevettes, un banc de poisson clowns avec leurs couleurs chatoyantes, et même un mégalodon passer à quelques mètres, exhibant une mâchoire effrayante. C’était comme s’il assistait à un merveilleux balai sous-marin. Naturellement c’était la première fois qu’il voyait défiler ces créatures, toutefois l’esprit du chat lui fournissait toutes les informations dont il avait besoin.  Ainsi, s’il restait sans voix devant un tel spectacle, il se sentait quand même en terrain conquis. Bientôt la scène évolua en une série d’instantanés qui venaient s’imprimer à sa conscience : une colonie de fourmis transportant des miettes de pain, un colibri faisant du sur-place près d’un hibiscus,</p>

                    </Link></div>
                    
                </div>
            </div>

    )
}

export default E