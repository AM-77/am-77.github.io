import React, { Component } from 'react'


export default class Works extends Component {
  render() {
    return (
      <>
        {
          this.props.works.map((work, index) => (
            <div ref={this.addToRefsList} className="section" key={index}>
              <div className="infos">
                <h3 className="title">{work.title}</h3>
                <p className="description">{work.desc}</p>
                <div className="links">
                  {
                    Object.entries(work.links).map(link => (
                      <a key={link[0]} href={link[1]} target="_blank" rel="noopener noreferrer">{link[0]}</a>
                    ))
                  }
                </div>
                <div className="tags">
                  { work.tags.map(tag => (<span key={tag} className={`tag ${tag.toLowerCase()}`}>{tag}</span>)) }
                </div>
              </div>
            </div>
          ))
        }
      </>
    )
  }
}
