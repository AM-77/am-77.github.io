import React, { Component } from 'react'
import { Power3 } from 'gsap'
import { NavLink } from 'react-router-dom'
import Preloader from '../components/Preloader'
import Works from '../components/Works'

import works from "../assets/data/works.json"
import old_works from "../assets/data/old-works.json"
export default class Portfolio extends Component {

    componentDidMount() { 
        this.props.tl
            .from(this.refs.portfolio_page, 1.2, { opacity: 0, ease: Power3.easeOut })
            .play() 
    } 

    render() {
        return (
            <>
                <Preloader tl={this.props.tl} />
                <div ref="portfolio_page" className="portfolio-container">
                    <div className="center">
                        <div className='section'>
                        <div className="header">
                            <h1 className='title'>Portfolio</h1>
                            <p>This section contains some of the project that I have worked on.</p>
                            <NavLink to='/'>Back To Home</NavLink>
                            <button className="mouse-btn" title="scroll down" onClick={() => this.props.fullpageApi.moveSectionDown()}>
                                <div className="mouse"><span className="wheel"></span></div>
                                <span className="scroll">scroll</span>
                            </button> 
                        </div>
                        </div>
                        <Works works={works} />
                        <div className="section separator">
                            <h2 className="title">Some Old Works</h2>
                        </div>
                        <Works works={old_works} />
                        {/* <div className="section footer">this is el footer </div>   */}
                    </div>    
                </div>
            </>
        )
    }
}