
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
import A from '../Histoire/A';
import B from '../Histoire/B';
import C from '../Histoire/C';
import D from '../Histoire/D';
import E from '../Histoire/E';
import F from '../Histoire/F';




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
      <Route path="/A" component={A} />
      <Route path="/B" component={B} />
      <Route path="/C" component={C} />
      <Route path="/D" component={D} />
      <Route path="/E" component={E} />
      <Route path="/F" component={F} />

      <Route component={ErrorPage} />


      </Switch>
      
    </Router>

  );
}

export default App;
