import { useCallback, useMemo, useState } from "react";

const items = [
	"Apple",
	"Banana",
	"Cherry",
	"Date",
	"Elderberry",
	"Fig",
	"Grape",
];

function ExpensiveComponenet() {
	const [filter, setFilter] = useState("");
	const [count, setCount] = useState(0);

	const filteredItems = useMemo(() => {
		console.log("calculated");
		return items.filter((item) =>
			item.toLowerCase().includes(filter.toLowerCase())
		);
	}, [filter]);
	const increment = useCallback(() => setCount(count + 1), [count]);

	return (
		<div>
			<input
				type="text"
				value={filter}
				onChange={(e) => setFilter(e.target.value)}
				placeholder="Filter items"
			/>
			<ul>
				{filteredItems.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
			<button onClick={increment}>Click me {count}</button>
		</div>
	);
}

export default ExpensiveComponenet;
