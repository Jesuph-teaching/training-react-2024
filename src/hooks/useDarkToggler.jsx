import { useEffect, useState } from "react";

export default function useDarkToggler() {
	const [isOn, setIsOn] = useState(false);
	useEffect(() => {
		document.body.classList.toggle("dark", isOn);
	}, [isOn]);
	function toggler() {
		setIsOn(!isOn);
	}
	return {
		isDark: isOn,
		toggler,
	};
}
