import Biografia from '../Bio';
import Contatos from '../Contatos';
import Footer from '../Footer/Footer';
import Header from '../Header/header';
import Projetos from '../Projetos';
import Servicos from '../Servicos';
import Skills from '../Skills';
import SobreTitulo from '../SobreTitulos';

const Home = function Home() {
	return (
		<>
			<Header />
			<SobreTitulo />
			<Biografia />
			<Contatos />
			<Projetos />
			<Servicos />
			<Skills />
			<Footer />
		</>
	);
};

export default Home;
