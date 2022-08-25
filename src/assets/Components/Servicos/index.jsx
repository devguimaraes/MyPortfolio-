import { FaSitemap, FaMobile, FaGoogle } from 'react-icons/fa';

function Servicos() {
	return (
		<div>
			<h2 className="text-2xl block w-full my-10 text-center text-white">
				Serviços
			</h2>
			<div className="w-full flex flex-wrap justify-evenly text-center">
				<div className="w-80 mx-auto my-10">
					<div className="flex justify-center text-center ">
						<FaSitemap fontSize="50px" color="#00DF5E" height="700" />
					</div>
					<h3 className="text-center text-paragrafo mt-4 ">Criação de Site</h3>
				</div>
				<div className="w-80 mx-auto my-10">
					<div className="flex justify-center text-center ">
						<FaGoogle fontSize="50px" color="#00DF5E" height="700" />
					</div>
					<h3 className="text-center text-paragrafo mt-4">
						Otimizações de SEO
					</h3>
				</div>
				<div className="w-80 mx-auto my-10">
					<div className="flex justify-center text-center ">
						<FaMobile fontSize="50px" color="#00DF5E" height="700" />
					</div>
					<h3 className="text-center  text-paragrafo mt-4">
						Sites Responsivos
					</h3>
				</div>
			</div>
		</div>
	);
}

export default Servicos;
