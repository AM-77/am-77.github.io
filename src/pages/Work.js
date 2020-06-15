import React, { Component, createRef } from 'react'
import { gsap, Power3 } from 'gsap'

export default class Work extends Component {

    componentDidMount() { gsap.from(this.refs.workTitle, 1.2, { delay: 1.2, y: 80, ease: Power3.easeOut }) } 

    render() {
        return (
            <div className='about-container page-container'>
                <div className='title-line-container'>
                    <h1 ref='workTitle' className='title-line'>This is the about page</h1>
                </div>
            </div>
        )
    }
}
