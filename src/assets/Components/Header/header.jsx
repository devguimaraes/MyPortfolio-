import { useState } from 'react';
import ListaSobre from '../ListaSobre';

function Header() {
	const [dropdown, setDropdown] = useState(false);

	return (
		<div>
			<nav className="w-full p-4 items-center align-middle text-center flex justify-between">
				<h1 className="text-lg">Portifólio</h1>
				<div className="2xl:hidden">
					<button type="submit" onClick={() => setDropdown(!dropdown)}>
						<img src="./img/menu.png" alt="menu hamburguer" />
					</button>
				</div>
			</nav>
			{dropdown ? <ListaSobre /> : ''}
		</div>
	);
}

export default Header;
