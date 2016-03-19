import React, { PropTypes } from 'react';
import { Decorator as Cerebral} from 'cerebral-view-react';
import displayedItems from '../../modules/List/computed/visibleItems.js';
import Link from '../Link';
import Filter from '../Filter';
import categories from '../../modules/List/computed/categories.js';
import HtmlToReact from 'html-to-react';

@Cerebral({
  displayedItems: displayedItems,
})
class LinkList extends React.Component {
  render() {
    const signals = this.props.signals.list;
    console.debug(this.props.displayedItems);

    return (
      <div>
        <div className="col-md-12">
          <header id="masthead" role="banner" className="MastHead">
            <hgroup className="Masthead-Logo">
              <h1 style={{textAlign: "center"}}>Essential JavaScript Links</h1>
              <span className="Masthead-Logo-Subtitle">A curated list by Eric Elliott and friends.</span>
            </hgroup>
            <nav className="Masthead-Menu">
              <span className="Masthead-Menu-Item"><a href="#index">The Links</a></span>&nbsp;
              <span className="Masthead-Menu-Item"><a href="#about">About</a></span>
            </nav>
          </header>
        </div>
        <div className="col-md-12" style={{textAlign: "center"}}>
          <Filter />
        </div>

        <div className="col-md-12">
          {Object.keys(this.props.displayedItems || {}).map(function (categoryName, idx, links) {
            return <div>
                <h2 className="List-Header">{categoryName}</h2>
                {this.props.displayedItems[categoryName].map(function (link, idx) {
                  return <Link item={link} />  
                })}
              </div>
          }, this)}
        </div>
        <span>&copy; &#39;15 Eric Elliott &amp; friends</span>
      </div>
    );
  }
}

export default LinkList;