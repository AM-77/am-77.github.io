import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import { Power3 } from 'gsap'
import Preloader from '../components/Preloader'
import meinFoto from '../assets/images/mein-foto.jpg'

export default class Home extends Component {

    componentDidMount(){
        // head
        const first_name = this.refs.first_name
        const last_name = this.refs.last_name
        const title = this.refs.title
        const mein_foto = this.refs.mein_foto
        const head = [first_name, last_name, title, mein_foto]

        // about
        const about_title = this.refs.about_title
        const about_content1 = this.refs.about_content1
        const about_content2 = this.refs.about_content2
        const about = [about_title, about_content1, about_content2]

        // contact
        const contact_title = this.refs.contact_title
        const contact_content = this.refs.contact_content
        const contact = [contact_title, contact_content]

        // contact links
        const links = this.refs.contact_links.children

        this.props.tl
            .from([...head, ...about, ...contact], 1.25, { delay: -1, ease: Power3.easeOut, opacity: 0, y: 50, stagger:{ amount: 0.75 } })
            .from(links, .6, { delay: -1, ease: Power3.easeOut, y: 50, opacity: 0, stagger:{ amount: 0.5 } })
            .play()
    }

    render() {
        return (
            <div className='home-page'>
                <Preloader tl={this.props.tl} />
                <div className='home-container'>
                    <div className='center'>
                        <div className='head'>
                            <div className='name'>
                                <div>
                                    <h1><span ref='first_name' className='first'>Mohamed Amine</span> <span ref='last_name' className='last'>Griche</span></h1>
                                    <h4><span ref='title' className='title'>Software Engineer & a JS Lover <span className='heart-emoji' aria-label='emoji' role='img'>💛</span>.</span></h4>
                                </div>
                                <div ref='mein_foto' className='mein-foto'>
                                    <img src={meinFoto} alt='mien foto' />
                                </div>
                            </div>
                        </div>

                        <div className='about'>
                            <h2 className='title'><span ref='about_title'>About</span></h2>
                            <p className='content'><span ref='about_content1'>Hello, my name is Amine <span className='waving-emoji' aria-label='emoji' role='img'>👋</span></span></p>
                            <p className='content'><span ref='about_content2'>I am a software engineer from Algeria.</span></p>
                            {/* <NavLink to='/work'>Here are some of my works.</NavLink> */}
                        </div>

                        <div className='contact'>
                            <h2 className='title'><span ref='contact_title'>Reach Me</span></h2>
                            <p className='content'><span ref='contact_content'>Here are some places on the web where you can find me:</span></p>
                            <div ref='contact_links' className='links'>
                                <a ref='twitter' href='https://github.com/am-77' title='AM-77'>GitHub</a>
                                <a href='https://www.linkedin.com/in/mohamed-amine-griche' title='mohamed-amine-griche'>LinkedIn</a>
                                <a href='https://codepen.io/am-77' title='AM-77'>CodePen</a>
                                <a href='https://twitter.com/__AM77__' title='__AM77__'>Twitter</a>
                                <a href='mailto:amine.griche77@gmail.com' title='amine.griche77@gmail.com'>Email</a>
                                <a href='/cv.pdf' title='resume' target='_blank'>Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
