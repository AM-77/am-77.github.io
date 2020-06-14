import React, { Component } from "react"
import { gsap, Power3 } from "gsap"

export default class Contact extends Component {

    componentDidMount(){
        let text = this.refs.title_line_1
        gsap.from(text, 1.2, { delay: 1.2, y: 80, ease: Power3.easeOut })
    } 

    render() {
        return (
            <div className="about-container page-container">
                <div className="title-line-container">
                    <h1 ref="title_line_1" className="title-line">This is the about page</h1>
                </div>
            </div>
        )
    }
}
