// Importer les outils React
import ReactDOM from 'react-dom/client';

// Importer notre premier composant : App
import { App } from './App';

// Cibler la div avec l'id root
const divRoot = document.getElementById('root');

// Créer un noeud racine React à partir de la div root (1er noeud du virtual DOM)
const reactRoot = ReactDOM.createRoot(divRoot);

// Afficher le composant App dans le noeud racine
reactRoot.render(<App />);