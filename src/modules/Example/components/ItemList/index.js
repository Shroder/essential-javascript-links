import React, { PropTypes } from 'react';
import { Decorator as Cerebral, Link } from 'cerebral-view-react';
import displayedItems from '../../modules/List/computed/visibleItems.js';
import HtmlToReact from 'html-to-react';

@Cerebral({
  title: ['example', 'title'],
  color: ['example', 'color'],
  items: ['example', 'items'],
  selectedCategory: ['example', 'selectedCategory'],
  displayedItems: displayedItems
})
class Home extends React.Component {

  static propTypes = {
    color: PropTypes.string,
    title: PropTypes.string
  };

  render() {
    const signals = this.props.signals.example;

    function generateImage(image) {
      if(image) {
        return <div style={{textAlign: 'center'}}><img src={image} width="640" /></div>;
      }
    }

    function displayEndYear(endYear) {
      if(!endYear) {
        return 'Present';
      }
      return endYear;
    }

    function displayLink(link) {
      if(link) {
        return <div style={{textAlign: 'center'}}><a href={link} target="_blank">Link</a></div>
      }
      return;
    }

    function displayDescription(description) {
      var parser = new HtmlToReact.Parser(React);
      var component = parser.parse("<div>" + description + "</div>")
      return component;
    }

    function displayCode(snippet) {
      if(snippet && snippet.code) {
        var langClass = snippet.lang.toLowerCase();
        return <pre className="code-snippet"><code className={langClass}>{snippet.code}</code></pre>          
      }
      return;
    }

    return (
      <div>
        <div className="col-md-12">
          <h1 style={{textAlign: "center"}}>Essential JavaScript Links</h1>
          <span>A curated list by Eric Elliott and friends.</span>
          <ul>
            <li><a href="index.html">The Links</a></li>
            <li><a href="about.html">About</a></li>
          </ul>
        </div>
        <div className="col-md-12" style={{textAlign: "center"}}>
          <select onChange={(e) => signals.categoryChanged({ category: e.target.value})}>
            <option>Website</option>
            <option>Marketing</option>
            <option>Hobby</option>
          </select>
        </div>

        <div className="col-md-12">
          {this.props.displayedItems.map(function (item, index) {
            return <article key={item.id} className="List-Item">
              <header className="List-Item-Header">
                <cite className="List-Item-Title"><a href="{item.href}">{item.title}</a></cite>
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