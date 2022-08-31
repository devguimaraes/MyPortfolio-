import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Biografia from '../assets/Components/Bio';
import Contatos from '../assets/Components/Contatos';
import Footer from '../assets/Components/Footer/Footer';
import Header from '../assets/Components/Header/header';
import Home from '../assets/Components/Home';
import Projetos from '../assets/Components/Projetos';
import Skills from '../assets/Components/Skills';
import SobreTitulo from '../assets/Components/SobreTitulos';
import Page404 from '../assets/pages/page404';

const Rotas = function Rotas() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/header" element={<Header />} />
				<Route path="/sobretitulo" element={<SobreTitulo />} />
				<Route path="/bio" element={<Biografia />} />
				<Route path="/contatos" element={<Contatos />} />
				<Route path="/projetos" element={<Projetos />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/footer" element={<Footer />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Rotas;
