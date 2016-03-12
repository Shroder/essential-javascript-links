export default function (get) {
	const items = get(['list', 'items']);
	const filter = get(['list', 'selectedCategory']);
	console.debug(filter);

	if(!items) {
		return [];
	}

	return Object.keys(items).filter(function (key) {
		let item = items[key];

		return (
			!filter || (item.categories.indexOf(filter) !== -1)
		);
	}).map(function (key) {
		return items[key];
	});
};