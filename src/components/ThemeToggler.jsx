import { useEffect, useState } from "react";

export default function ThemeToggler() {
	const [isOn, setIsOn] = useState(false);
	useEffect(() => {
		document.body.classList.toggle("dark", isOn);
	}, [isOn]);

	return (
		<div>
			<button
				onClick={() => {
					setIsOn(!isOn);
				}}
			>
				{isOn ? "Dark mode ON" : "dark mode OFF"}
			</button>
		</div>
	);
}
