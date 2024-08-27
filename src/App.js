import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Le constructeur initialise l'état du composant
  constructor(props) {
    super(props);
    this.state = {
      // Informations sur la personne à afficher
      person: {
        fullName: 'Meziane Dahou',
        bio: 'Software Engineer',
        imgSrc: 'data:image/jpeg;base64,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',
        profession: 'Android and IOS developer',
      },
      // État pour afficher ou masquer le profil
      show: false,
      // Temps écoulé depuis le montage du composant
      interval: 0
    };
    // Enregistre le temps de montage pour calculer l'intervalle
    this.startTime = Date.now();
    // Lier la méthode de gestion des clics au contexte du composant
    this.handleToggleShow = this.handleToggleShow.bind(this);
  }

  // Méthode appelée après le montage du composant
  componentDidMount() {
    // Démarre un intervalle qui met à jour l'état chaque seconde
    this.timer = setInterval(() => {
      this.setState({
        interval: Math.floor((Date.now() - this.startTime) / 1000) // Calcul du temps écoulé en secondes
      });
    }, 1000);
  }

  // Méthode appelée avant le démontage du composant
  componentWillUnmount() {
    // Nettoie l'intervalle pour éviter les fuites de mémoire
    clearInterval(this.timer);
  }

  // Méthode pour basculer l'état `show` entre vrai et faux
  handleToggleShow() {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render() {
    // Déstructure les variables de l'état pour plus de clarté
    const { person, show, interval } = this.state;

    return (
      <div className="App">
        {/* Bouton pour basculer la visibilité du profil */}
        <button onClick={this.handleToggleShow}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>
        {/* Affichage conditionnel du profil basé sur l'état `show` */}
        {show && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} />
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}
        {/* Affichage du temps écoulé depuis le montage */}
        <div className="interval">
          <p>Time since mount: {interval} seconds</p>
        </div>
      </div>
    );
  }
}

export default App;
