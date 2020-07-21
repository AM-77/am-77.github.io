import React, { Component } from 'react'
import gsap from 'gsap'


export default class Cursor extends Component {

  constructor(props) {
    super(props);
    this.bigBall = React.createRef();
    this.smallBall = React.createRef();
  }

  componentDidMount() {
    document.body.addEventListener("mousemove", this.onMouseMove);
    const { links } = this.props
    if (links) 
      for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseenter", this.onMouseHover);
        links[i].addEventListener("mouseleave", this.onMouseHoverOut);
      }
  }

  componentDidUpdate() {
    const { links } = this.props
    if (links) 
      for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseenter", this.onMouseHover);
        links[i].addEventListener("mouseleave", this.onMouseHoverOut);
        links[i].addEventListener("click", this.onMouseHoverOut);
      }
  }

  onMouseMove = (e) => {
    if ( this.bigBall.current && this.smallBall.current ) {
      gsap.to(this.bigBall.current, 0.4, { x: e.pageX - 15, y: e.pageY - 15 })
      gsap.to(this.smallBall.current, 0.1, { x: e.pageX - 5, y: e.pageY - 7 })
    }
  }

  onMouseHover = () => gsap.to(this.bigBall.current, 0.3, { scale: 4 })
  onMouseHoverOut = () => gsap.to(this.bigBall.current, 0.3, { scale: 1 })

  render() {
    return (
      <div className="cursor">
        <div ref={this.bigBall} className="cursor-ball big">
          <svg height="30" width="30">
            <circle cx="15" cy="15" r="12"></circle>
          </svg>
        </div>
        <div ref={this.smallBall} className="cursor-ball small">
          <svg height="10" width="10">
            <circle cx="5" cy="5" r="4"></circle>
          </svg>
        </div>
      </div>
    )
  }
}
