export default function (get) {
	const itemsByCategory = {};
	const items = get(['list', 'items']);
	const filter = get(['list', 'selectedCategory']);

	if(!items) {
		return [];
	}

	// Initialize structure
	// items[categories][items]
  	var linksByCategory = {};
  	// items.links.forEach(function (item) {
  	// 	item.categories.forEach(function (category) {
  	// 		if (!(category in linksByCategory)) {
  	// 			linksByCategory[category] = [];
  	// 		}
  	// 		linksByCategory[category].push(item);
  	// 	})
  	// });



	Object.keys(items).filter(function (key) {
		let item = items[key];
		return (!filter || (item.categories.indexOf(filter) !== -1));
	}).map(function (key) {
		//return items[key];
		let item = items[key];
  		item.categories.forEach(function (category) {
  			if (!(category in linksByCategory)) {
  				linksByCategory[category] = [];
  			}
  			linksByCategory[category].push(item);
  		})

	});

  	for(var category in linksByCategory) {
  		//console.debug(category);
  		//console.debug(linksByCategory[category]);
  		linksByCategory[category].sort(function (a, b) {
  			if (a.title > b.title) {
  				return 1;
  			}
  			if (a.title < b.title) {
  				return -1;
  			}
  			return 0;

		})
  	}

  	return linksByCategory;	
};