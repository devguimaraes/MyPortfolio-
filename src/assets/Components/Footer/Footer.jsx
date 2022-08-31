import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Apis from '../../../Services/api';

function Footer() {
	const [user, setUser] = useState([]);
	const navigate = useNavigate();

	function teste() {
		navigate('/home');
	}

	useEffect(() => {
		Apis.apiUser.get().then((response) => setUser(response.data));
	}, []);

	return (
		<div className="flex justify-center items-center h-20 mt-12 bg-gray-200">
			<h3 className="text-center text-base font-normal">
				Desenvolvido por{' '}
				<button type="submit" onClick={teste} className="text-green-light">
					{user?.name}
				</button>
			</h3>
		</div>
	);
}

export default Footer;
