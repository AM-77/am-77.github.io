import React, { Component } from 'react'
import { gsap, Power3 } from 'gsap'

import meinFoto from '../assets/images/mein-foto.jpg'

export default class Home extends Component {

    // componentDidMount(){
    //     const image_01_container = this.refs.image_01_container
    //     const image_01 = this.refs.image_01
    //     const image_02_container = this.refs.image_02_container
    //     const image_02 = this.refs.image_02
        
    //     const title_lines = [this.refs.title_line_1, this.refs.title_line_2]
    //     const description_lines = [this.refs.description_line_1, this.refs.description_line_2, this.refs.description_line_3]

    //     const the_eye = this.refs.the_eye

    //     gsap.from(image_01_container, 1.8, { delay: 1, y: 1000,ease: Power3.easeOut})
    //     gsap.from(image_01, 2, {delay: 1.6, scale: 2, ease: Power3.easeOut})
    //     gsap.from(image_02_container, 1.9, { delay: 1.2, y: 1000, ease: Power3.easeOut })
    //     gsap.from(image_02, 2.8, {delay: 1.6, scale: 2, ease: Power3.easeOut})
    //     gsap.from(title_lines, 1.6, { delay: 1.6, ease: Power3.easeOut, y: 50, opacity: 0, stagger:{ amount: 0.2 } })
    //     gsap.from(description_lines, 1.6, { delay: 1.8, ease: Power3.easeOut, y: 30, opacity: 0, stagger:{ amount: 0.2 } })
    //     gsap.from(the_eye, 1.8, { delay: 1.8, rotate: -560, opacity: 0, scale: 0.75, ease: Power3.easeOut })
    // }

    render() {
        return (
            <div className='home-container'>
                <div className='head'>
                    <div className='name'>
                        <h1><span className='first'>Mohamed Amine</span> <span className='last'>Griche</span></h1>
                        <div className='mein-foto'>
                            <img src={meinFoto} alt='mien foto' />
                        </div>
                    </div>
                    <h4 className='grade'><span>Software Engineer & JS Lover <span aria-label='emoji' role='img'>💛</span>.</span></h4>
                </div>

                <div className='About'>
                    <h2 className='title'>About</h2>
                    <p className='content'><span>Hello, my name is Amine <span aria-label='emoji' role='img'>👋</span></span></p>
                    <p className='content'><span>I am a software engineer from Algeria.</span></p>
                </div>

                <div className='contact'>
                    <h2 className='title'>Contact</h2>
                    <p className='content'><span>Here are some places on the web where you can find me:</span></p>
                    <div className='links'>
                        <a href='https://github.com/am-77' title='github'>GitHub</a>
                        <a href='https://www.linkedin.com/in/mohamed-amine-griche' title='linkedin'>LinkedIn</a>
                        <a href='https://codepen.io/am-77' title='codepen'>CodePen</a>
                        <a href='mailto:amine.griche77@gmail.com' title='email'>Email</a>
                    </div>
                </div>
            </div>
        )
    }
}
