import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from '../Welcome-page';
import Inscription from '../Inscription-page';
import Connexion from '../Connexion-page';
import ErrorPage from '../Error-page';
import InscriptionAccepted from '../Inscription-accepted';
import HomePage from '../Home-page';
import Prologue from '../Histoire/Prologue';
import Profil from '../Profil-page';
import Lecteur from '../Lecteur';
import A from '../Histoire/A';
import B from '../Histoire/B';
import C from '../Histoire/C';
import D from '../Histoire/D';
import E from '../Histoire/E';
import F from '../Histoire/F';
import AccepterSonDestin from '../Histoire/AccepterSonDestin';
import RenierSonDestin from '../Histoire/RenierSonDestin';
import Final from '../Histoire/RenierSonDestin/final';
import Suite from '../Histoire/AccepterSonDestin/suite';
import Fouillier from '../Histoire/FouillierLaChambre';
import Parler from '../Histoire/ParlerMere';
import Charlie from '../Histoire/ParlerCharlie';
import Gladys from '../Histoire/ParlerGladys';
import Transition from '../Histoire/Transition';
import Prevenir from '../Histoire/PrevenirLesParents';
import Fuir from '../Histoire/FuirCommeUnVoleur';
import Aurevoir from '../Histoire/PrevenirLesParents/Aurevoir';
import AurevoirDeux from '../Histoire/PrevenirLesParents/AurevoirDeux';



function App() {
  return (
    <Router>
    
      <Switch>

      <Route exact path="/" component={WelcomePage} />

      <Route path="/Inscription" component={Inscription} />
      <Route path="/Connexion" component={Connexion} />
      <Route path="/InscriptionAccepted" component={InscriptionAccepted} />
      <Route path="/HomePage" component={HomePage} />
      <Route path='/Profil' component={Profil}/>
      <Route path="/Prologue" component={Prologue} />
      <Route path="/Lecteur" component={Lecteur} />
      <Route path="/A" component={A} />
      <Route path="/B" component={B} />
      <Route path="/C" component={C} />
      <Route path="/D" component={D} />
      <Route path="/E" component={E} />
      <Route path="/F" component={F} />
      <Route path="/accepterSonDestin" component={AccepterSonDestin} />
      <Route path="/renierSonDestin" component={RenierSonDestin} />
      <Route path="/renierSonDestinFinal" component={Final} />
      <Route path="/accepterSonDestinSuite" component={Suite} />
      <Route path="/fouillerLaChambre" component={Fouillier} />
      <Route path="/parlerAsaMere" component={Parler} />
      <Route path="/parleraCharlie" component={Charlie} />
      <Route path="/parleraGladys" component={Gladys} />
      <Route path="/transition" component={Transition} />
      <Route path="/prevenirlesparents" component={Prevenir} />
      <Route path="/prevenirlesparentsaurevoir" component={Aurevoir} />
      <Route path="/prevenirlesparentsaurevoirmere" component={AurevoirDeux} />
      <Route path="/fuircommeunvoleur" component={Fuir} />






      <Route component={ErrorPage} />


      </Switch>
      
    </Router>

  );
}

export default App;