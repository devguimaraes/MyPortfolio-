/* eslint-disable react/destructuring-assignment */
function Buttons(props) {
	return (
		<button
			style={{
				backgroundColor: props.cor || '#171717',
				color: props.color || 'white',
				border: props.border || '0.5px solid #333333',
			}}
			className=" rounded text-center gap-4 justify-center px-6 py-4 text-xs font-black`"
			type="submit"
		>
			{props.children}
		</button>
	);
}

export default Buttons;
