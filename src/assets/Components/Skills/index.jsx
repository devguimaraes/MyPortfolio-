function Skills() {
	return (
		<div className="w-full">
			<h2 className="text-2xl block w-full my-10 text-center text-white">
				Minhas Skills
			</h2>
			<div className="flex flex-wrap justify-around lg:w-4/5 lg:mx-auto">
				<div className="w-2/5 lg:w-1/4 mx-2 border rounded border-solid border-gray-200 bg-gray-400 h-28 my-4 flex justify-center">
					<img className="w-16" src="./img/html.svg" alt="" />
				</div>
				<div className="w-2/5 lg:w-1/4 mx-2 border rounded border-solid border-gray-200 bg-gray-400 h-28 my-4 flex justify-center">
					<img className="w-16" src="./img/css.svg" alt="" />
				</div>
				<div className="w-2/5 lg:w-1/4 mx-2 border rounded border-solid border-gray-200 bg-gray-400 h-28 my-4 flex justify-center">
					<img className="w-16" src="./img/js.svg" alt="" />
				</div>
				<div className="w-2/5 lg:w-1/4 mx-2 border rounded border-solid border-gray-200 bg-gray-400 h-28 my-4 flex justify-center">
					<img className="w-16" src="./img/tailwind.svg" alt="" />
				</div>
				<div className=" w-2/5 lg:w-1/4 mx-2 border rounded border-solid border-gray-200 bg-gray-400 h-28 my-4 flex justify-center">
					<img className="w-16" src="./img/react.svg" alt="" />
				</div>
				<div className=" w-2/5 lg:w-1/4 mx-2 border rounded border-solid border-gray-200 bg-gray-400 h-28 my-4 flex justify-center">
					<img className="w-16" src="./img/next.svg" alt="" />
				</div>
			</div>
		</div>
	);
}

export default Skills;
