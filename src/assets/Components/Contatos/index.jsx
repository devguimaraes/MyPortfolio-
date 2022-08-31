import { SiInstagram } from 'react-icons/si';
import { FaEnvelope, FaAddressCard, FaPhone } from 'react-icons/fa';

function Contatos() {
	return (
		<div className="flex flex-wrap justify-around align-middle mt-10 gap-10">
			<div className="flex flex-col text-center">
				<div className="text-center m-auto p-4 mb-2 rounded-full bg-gray-400 ">
					<FaAddressCard fontSize="30px" color="#00DF5E" height="700" />
				</div>
				<h2 className="text-base font-bold text-white">Nome</h2>
				<h3 className="text-paragrafo">Bruno Guimarães</h3>
			</div>
			<div className="flex flex-col text-center">
				<div className="text-center m-auto p-4 mb-2 rounded-full bg-gray-400 ">
					<FaEnvelope fontSize="30px" color="#00DF5E" height="700" />
				</div>
				<a href="mailto:devgmrs@gmail.com">
					<h2 className="text-base font-bold text-white">E-mail</h2>
					<h3 className="text-paragrafo">devgmrs@gmail.com</h3>
				</a>
			</div>
			<div className=" flex flex-col text-center">
				<div className="text-center m-auto p-4 mb-2 rounded-full bg-gray-400 ">
					<SiInstagram fontSize="30px" color="#00DF5E" height="700" />
				</div>
				<a
					href="https://www.instagram.com/brunoguimraes/"
					rel="noreferrer"
					target="_blank"
				>
					<h2 className="text-base font-bold text-white">Instagram</h2>
					<h3 className="text-paragrafo">@brunoguimraes</h3>
				</a>
			</div>
			<div className="flex flex-col text-center">
				<div className="text-center m-auto p-4 mb-2 rounded-full bg-gray-400 ">
					<FaPhone fontSize="30px" color="#00DF5E" height="700" />
				</div>
				<a rel="noreferrer" href="tel:21969715247">
					<h2 className="text-base font-bold text-white">Telefone</h2>
					<h3 className="text-paragrafo">(21) 9697-15247</h3>
				</a>
			</div>
		</div>
	);
}

export default Contatos;
