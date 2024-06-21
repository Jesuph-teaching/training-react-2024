import { useState } from "react";

export default function Toggler() {
	const [isOn, setIsOn] = useState(false);
	/* function handleValue() {
		if (isOn) return "ON";
		else return "OFF";
	} */
	return (
		<div>
			<button
				onClick={() => {
					setIsOn(!isOn);
				}}
			>
				{isOn ? "ON" : "OFF"}
			</button>
			{/* <button>{handleValue()}</button> */}
		</div>
	);
}
