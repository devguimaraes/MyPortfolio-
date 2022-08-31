/* eslint-disable react/button-has-type */
import { useEffect, useState } from 'react';
import Apis from '../../../Services/api';
import Buttons from '../Buttons';

function Projetos() {
	const [user, setUser] = useState([]);

	useEffect(() => {
		Apis.api.get().then((response) => setUser(response.data));
	}, []);

	return (
		<div className="w-full box-border">
			<h2 className="text-2xl my-10 text-center text-white" id="projetos">
				Projetos
			</h2>
			<ul key={user.id} className="flex flex-wrap justify-evenly">
				{user.map((elemento) => (
					<div
						key={elemento.id}
						className="bg-gray-400 w-80 box-border rounded-xl m-2 mb-6 p-4 text-center"
					>
						<li key={elemento.id}>
							<h3 className="text-lg text-center text-white">
								{elemento.name.toUpperCase()}
							</h3>
							<h4 className="text-center text-sm font-normal px-2 text-paragrafo my-4">
								{elemento.description}
							</h4>
							<p>
								<Buttons cor="#00DF5E" border="none">
									<a className="text-amber-400" href={elemento.html_url}>
										Repositório
									</a>
								</Buttons>
							</p>
						</li>
					</div>
				))}
			</ul>
		</div>
	);
}

export default Projetos;
