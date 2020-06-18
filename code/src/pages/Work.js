import React, { Component } from 'react'
import { Power3 } from 'gsap'
import { NavLink } from 'react-router-dom'
import Preloader from '../components/Preloader'

export default class Work extends Component {

    componentDidMount() { 
        this.props.tl
            .from(this.refs.work_container, 1.2, { delay: -1, opacity: 0, ease: Power3.easeOut })
            .play() 
    } 

    render() {
        return (
            <div>
                <Preloader tl={this.props.tl} />
                <div className='about-container'>
                    <div className='title-line-container'>
                        <h1 ref='work_container'  className='title-line'>This is the about page</h1>
                        <NavLink to='/'>go home.</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
