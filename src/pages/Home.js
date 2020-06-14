import React, { Component } from "react"
import Footer from "../components/Footer/Footer"
import { Power3, gsap } from "gsap"

import itatchi_01 from "./../assets/pic-01.jpg"
import itatchi_02 from "./../assets/pic-02.jpg"
import sharingan_eye from "./../assets/logo.png"

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
            <div className="page-container">
                <div className="home-container">
                    <div className="hero">
                        <div className="inner-hero">
                            <div className="text-side">
                                <div className="title">
                                    <div className="title-container">
                                        <div className="title-line-container">
                                            <h1 ref="title_line_1" className="title-line">Itatchi</h1>
                                        </div>
                                        <div className="title-line-container">
                                            <h1 ref="title_line_2" className="title-line">Uchiha</h1>
                                        </div>
                                    </div>
                                    <div ref="the_eye" className="sharingan-eye">
                                        <img src={sharingan_eye} alt="sharingan-eye" />
                                    </div>
                                </div>
                                <div className="description">
                                    <div className="description-container">
                                        <div className="description-line-container">
                                            <p ref="description_line_1" className="description-line">(うちはイタチ, Uchiha Itachi)</p>
                                        </div>
                                        <div className="description-line-container">
                                            <p ref="description_line_2" className="description-line">A ninja of Konohagakure's Uchiha clan that served as an Anbu Captain.</p>
                                        </div>
                                        <div className="description-line-container">
                                            <p ref="description_line_3" className="description-line">He later became an international criminal after murdering his entire clan.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="image-side">
                                <div className="images-container">
                                    <div ref="image_01_container" className="image-container">
                                        <img ref="image_01" className="image" src={itatchi_01} alt='itatchi' />
                                    </div>
                                    <div ref="image_02_container" className="image-container">
                                        <img ref="image_02" className="image" src={itatchi_02} alt='itatchi' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
