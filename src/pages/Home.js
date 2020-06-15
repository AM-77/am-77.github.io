import React, { Component } from "react"
import { gsap, Power3 } from "gsap"

export default class Home extends Component {

    componentDidMount(){
        const image_01_container = this.refs.image_01_container
        const image_01 = this.refs.image_01
        const image_02_container = this.refs.image_02_container
        const image_02 = this.refs.image_02
        
        const title_lines = [this.refs.title_line_1, this.refs.title_line_2]
        const description_lines = [this.refs.description_line_1, this.refs.description_line_2, this.refs.description_line_3]

        const the_eye = this.refs.the_eye

        gsap.from(image_01_container, 1.8, { delay: 1, y: 1000,ease: Power3.easeOut})
        gsap.from(image_01, 2, {delay: 1.6, scale: 2, ease: Power3.easeOut})
        gsap.from(image_02_container, 1.9, { delay: 1.2, y: 1000, ease: Power3.easeOut })
        gsap.from(image_02, 2.8, {delay: 1.6, scale: 2, ease: Power3.easeOut})
        gsap.from(title_lines, 1.6, { delay: 1.6, ease: Power3.easeOut, y: 50, opacity: 0, stagger:{ amount: 0.2 } })
        gsap.from(description_lines, 1.6, { delay: 1.8, ease: Power3.easeOut, y: 30, opacity: 0, stagger:{ amount: 0.2 } })
        gsap.from(the_eye, 1.8, { delay: 1.8, rotate: -560, opacity: 0, scale: 0.75, ease: Power3.easeOut })
    }

    render() {
        return (
            <div className='home-container'>
                <div></div>
            </div>
        )
    }
}
