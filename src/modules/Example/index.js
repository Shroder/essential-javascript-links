import categoryChanged from './signals/categoryChanged';
import Model from 'cerebral-model-baobab';
import items from '../../data/essential-javascript-links.json';

export default (options = {}) => {
  return (module, controller) => {

  	module.addState({
  		'items': items.links
  	});

    module.addSignals({
		categoryChanged,
    });

  };
}
