export default function (get) {
	const items = get(['list', 'items']);
	const filter = get(['list', 'selectedCategory']);
	const categories = [];

	if(!items) {
		return [];
	}

	items.forEach(function (item, index) {
		item.categories.forEach(function (item, index) {
			if(categories.indexOf(item) == -1) {
				categories.push(item);
			}
		})
	})

	return categories;
};