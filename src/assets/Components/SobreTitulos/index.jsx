import { useEffect, useState } from 'react';
import Apis from '../../../Services/api';
import Buttons from '../Buttons';

function SobreTitulo() {
	const [user, setUser] = useState();

	useEffect(() => {
		Apis.apiUser.get().then((response) => setUser(response.data));
	}, []);

	return (
		<div key={user?.id} className="w-screen p-12">
			<h1 className="text-2xl text-center text-white">{user?.name}</h1>
			<h2 className="text-xl text-center text-paragrafo mb-8">
				Desenvolvedor Front-End
			</h2>
			<div className="w-full flex  justify-between gap-4">
				<Buttons cor="#00DF5E" border="none">
					<a
						href="./src/data/Bruno-Guimaraes.pdf"
						download="Bruno-Guimaraes.pdf"
					>
						Curriculo CV
					</a>
				</Buttons>
				<Buttons>
					<a
						href="https://www.linkedin.com/in/bcguimaraes/"
						rel="noreferrer"
						target="_blank"
					>
						Entre em Contato
					</a>
				</Buttons>
			</div>
		</div>
	);
}

export default SobreTitulo;
