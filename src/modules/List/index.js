import categoryChanged from './signals/categoryChanged';
import Model from 'cerebral-model-baobab';
import items from '../../data/essential-javascript-links.json';

export default (options = {}) => {
  return (module, controller) => {

	// Initialize structure
	// items[categories][items]
  	var linksByCategory = {};
  	items.links.forEach(function (item) {
  		item.categories.forEach(function (category) {
  			if (!(category in linksByCategory)) {
  				linksByCategory[category] = [];
  			}
  			linksByCategory[category].push(item);
  		})
  	});

  	for(var category in linksByCategory) {
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

  	module.addState({
  		'items': items.links
  	});

    module.addSignals({
		categoryChanged,
    });

  };
}
