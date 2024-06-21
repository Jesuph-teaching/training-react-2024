import useDarkToggler from "../hooks/useDarkToggler";

export default function ThemeToggler() {
	const { isDark, toggler } = useDarkToggler();

	return (
		<div>
			<button onClick={toggler}>
				{isDark ? "Dark mode ON" : "dark mode OFF"}
			</button>
		</div>
	);
}
