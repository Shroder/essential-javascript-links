import React, { PropTypes } from 'react';
import { Decorator as Cerebral, Link } from 'cerebral-view-react';
import displayedItems from '../../modules/List/computed/visibleItems.js';
import categories from '../../modules/List/computed/categories.js';
import HtmlToReact from 'html-to-react';

@Cerebral({
  title: ['list', 'title'],
  color: ['list', 'color'],
  items: ['list', 'items'],
  selectedCategory: ['list', 'selectedCategory'],
  displayedItems: displayedItems,
  categories: categories
})
class Home extends React.Component {

  static propTypes = {
    color: PropTypes.string,
    title: PropTypes.string
  };

  render() {
    const signals = this.props.signals.list;

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
          <select onChange={(e) => signals.categoryChanged({ category: e.target.value})}>
            <option value="">All</option>
            {this.props.categories.map(function (item, index) {
              return <option value={item}>{item}</option>
            })}
          </select>
        </div>

        <div className="col-md-12">
          <h2 className="List-Header">Required Reading (Online resources)</h2>
          {this.props.displayedItems.map(function (item, index) {
            return <article key={item.id} className="List-Item">
              <header className="List-Item-Header">
                <cite className="List-Item-Title"><a href={item.href}>{item.title}</a></cite>
              </header>
              <p className="List-Item-Description List-Item-Description--Short">{item.short_description}</p>
            </article>
          })}
        </div>
        <span>&copy; '15 Eric Elliott &amp; friends</span>
      </div>
    );
  }
}

export default Home;