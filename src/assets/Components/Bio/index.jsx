import { useEffect, useState } from 'react';
import Apis from '../../../Services/api';

function Biografia() {
	const [user, setUser] = useState([]);

	useEffect(() => {
		Apis.apiUser.get().then((response) => setUser(response.data));
	}, []);

	return (
		<div>
			<div className="w-full flex text-center justify-center xl:hidden">
				<iframe
					title="computer"
					src="https://embed.lottiefiles.com/animation/116528"
				/>
			</div>
			<h2 className="text-2xl mb-2 text-center text-white">Sobre</h2>
			<p className="text-center text-sm font-normal px-5 text-paragrafo">
				{user?.bio}
			</p>
		</div>
	);
}

export default Biografia;
