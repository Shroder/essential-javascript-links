import React, { PropTypes } from 'react';

class Link extends React.Component {
  render() {
    return <article key={this.props.item.id} className="List-Item">
      <header className="List-Item-Header">
        <cite className="List-Item-Title"><a href={this.props.item.href}>{this.props.item.title}</a></cite>
      </header>
      <p className="List-Item-Description List-Item-Description--Short">{this.props.item.short_description}</p>
    </article>

  }
}

export default Link;