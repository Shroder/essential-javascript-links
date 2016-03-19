import React, { PropTypes } from 'react';
import { Decorator as Cerebral, Link } from 'cerebral-view-react';
import categories from '../../modules/List/computed/categories.js';

@Cerebral({
  categories: categories
})
class Filter extends React.Component {
  render() {
    const signals = this.props.signals.list;  	
    return 	<select onChange={(e) => signals.categoryChanged({ category: e.target.value})}>
            	<option value="">All</option>
            	{this.props.categories.map(function (item, index) {
              	return <option value={item}>{item}</option>
            	})}
			</select>

  }
}

export default Filter;
