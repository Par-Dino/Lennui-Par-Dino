import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';
import Header from '../../Header';
import Image from '../../../img/etang.png';

const C = () => {
  
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
                    <button> <Link to="/B" className={styles.Link}>Page précédente</Link></button>
                    </div>

        <p className={styles.text}>Une masse poilue et grisâtre se faufilât dans sa chambre. C’était Grisou, son vieil ami, son camarade. Ce n’était que son chat. Mais à quoi s’attendait-il au juste ? Durant une fraction de seconde il avait envisagé le pire. Par exemple, un loup sanguinaire assoiffé de sang à qui il restait encore un peu de place après avoir déchiqueté et engloutit sa mère, il y en avait dans la forêt à côté, c’était une des raisons pour lesquelles il lui était interdit de s’y rendre. Mais non, ce n’était que le chat, une bien piètre menace au regard de ce qu’il avait imaginé. Celui-ci le fixait d’un air solennel, sa queue ondulant à l’image d’un petit serpent poilu. Il était beau et ridicule. Il était parfait. Une vague de soulagement l’envahit et il se relâcha aussitôt. Tellement, qu’il se rendit compte qu’il avait très envie d’aller aux toilettes. Il se leva d’un bond, franchit la porte de sa chambre et se rua aux cabinets situés au fond du jardin.</p>
        <p className={styles.text}>Il remercia les cieux pour ce moment de grâce et tous ceux à venir. Et parce que ces instants de délivrance sont parfois synonyme de clairvoyance, il repensa à son vieux pote. De mémoire, jamais le chat n’était rentré dans sa chambre, encore moins pour tenter de scruter son âme par l’intermédiaire de son regard pénétrant. Ce n’était sûrement rien, ça n’en était pas moins parfaitement inhabituel. Et ce sentiment d’étrangeté qui revenait à la charge. Son ventre gargouilla. Il relativisa et se dit que pour le moment, le mieux restait encore d’aller manger un morceau.</p>
        <p className={styles.text}>En rentrant se mettre au chaud dans le salon il trouva sa mère debout, souriante, les mains cachées derrière le dos et visiblement excitée. </p>
                    
                     {/* DROITE */}
                   
        <p className={styles.text}>Il faillit ne pas remarquer son père, assis à droite de la table, les bras croisés et un regard qui semblait dire « J’ai des vaches à aller traire alors dépêchez-vous par pitié ».</p>
        <p className={styles.text}> « Joyeux anniversaire ! S’exclama sa mère.Son anniversaire ? Comment Diable avait-il pu oublier son anniversaire ? Quel enfant oublie le jour de son propre anniversaire ? Il était stupéfait. Cela signifiait qu’il avait dix ans aujourd’hui. Et comme lui avait rabâché son père, cela faisait de lui un homme. Il devrait se montrer fort et responsable à présent.</p>
        <p className={styles.text}>- C’est pour toi mon canard, tu peux l’ouvrir, dit-elle en dévoilant un petit coffret en bois qu’elle lui tend.</p>
        <p className={styles.text}>- Merci maman, mais qu’est ce que c’est ?</p>
        <p className={styles.text}>- Ton père et moi avons pensé, puisque tu n’es désormais plus un enfant, que cela te serait utile.</p>
        <p className={styles.text}>Le coffret était tout ce qu’il y avait de plus banal, sans fioritures ni même une simple couche de vernis. Quel contraste avec son contenu ! En l’ouvrant il dévoila un somptueux couteau de chasse. Il avait une lame si étincelante qu’elle lui renvoyait son reflet. Sa taille, loin d’être ridicule, permettrait certainement de rivaliser avec des loups mais ne serait d’aucune aide face à un éléphant. Fort heureusement là où il vivait il n’en avait jamais croisé un seul. Le manche était sculpté et imposant, le garçon s’en saisit et apprécia comme il était agréable à manier. C’était du vrai travail d’artisan. Il était ravi.</p>
        <p className={styles.text}>- Merci beaucoup ! Je vais pouvoir faire tellement de choses grâce à ça !</p>
        
        <div className={styles.btnS}>
        <button> <Link to="/D" className={styles.Link2}>Page suivante</Link></button>
        </div>      
        
            </div>       
            </div>
        </div>

    )
}

export default C