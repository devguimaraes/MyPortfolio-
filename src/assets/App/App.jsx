/* import { BrowserRouter, Switch, Route } from 'react-router-dom'; */

import Biografia from '../Components/Bio';
import Contatos from '../Components/Contatos';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/header';
import Projetos from '../Components/Projetos';
import Servicos from '../Components/Servicos';
import Skills from '../Components/Skills';
import SobreTitulo from '../Components/SobreTitulos';
import './App.css';

function App() {
	return (
		<div className="App box-border">
			<Header />
			<SobreTitulo />
			<Biografia />
			<Contatos />
			<Projetos />
			<Servicos />
			<Skills />
			<Footer />
		</div>
	);
}

export default App;
