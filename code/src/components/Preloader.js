import React, { Component } from 'react'

import logo from '../assets/images/logo.svg'

export default class Preloader extends Component {

  componentDidMount () {
    const preloader = this.refs.preloader
    const logo = this.refs.logo

    this.props.tl
      .from(logo, .65, { delay: .85, opacity: 0, y: 77 }) 
      .to(logo, .65, { delay: .5, opacity: 0, y: -77 }) 
      .to(preloader, 0, { delay: 1, css: { display: 'none' }}) 
      .play()
  }

  render() {
    return (
      <div ref='preloader' className='preloader'>
        <div ref='logo' className='logo-container'>
          <img src={logo} alt='AM-77 Logo'/>
        </div>
      </div>
    )
  }
}
