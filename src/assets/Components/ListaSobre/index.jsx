function ListaSobre() {
	return (
		<div className="w-full absolute bg-dark">
			<ul className="sobre-lista text-center">
				<li className="lista-item p-6">
					<a href="#sobre"> Sobre mim</a>
				</li>
				<li className="lista-item p-6">
					<a href="#projetos">Projetos</a>
				</li>
				<li className="lista-item p-6">
					<a href="#servicos">Serviços</a>
				</li>
				<li className="lista-item p-6">
					<a href="#skills">Minhas skills</a>
				</li>
			</ul>
		</div>
	);
}

export default ListaSobre;
