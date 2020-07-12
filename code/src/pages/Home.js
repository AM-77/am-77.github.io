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
        const about_content3 = this.refs.about_content3
        const about_content4 = this.refs.about_content4
        const about = [about_title, about_content1, about_content2, about_content3, about_content4]

        // contact
        const contact_title = this.refs.contact_title
        const contact_content = this.refs.contact_content
        const contact = [contact_title, contact_content]

        // contact links
        const links = this.refs.contact_links.children

        this.props.tl
            .from([...head, ...about, ...contact], 1.25, { delay: -1, ease: Power3.easeOut, opacity: 0, y: 50, stagger:{ amount: 0.75 } })
            .to(links, 1.5, { delay: -1, ease: Power3.easeOut, y: 0, opacity: 1, stagger:{ amount: 0.5 } })
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
                                    <h4><span ref='title' className='title'>a software engineer who loves JavaScript <span className='heart-emoji' aria-label='emoji' role='img'>💛</span>.</span></h4>
                                </div>
                                <div ref='mein_foto' className='mein-foto'>
                                    <img src={meinFoto} alt='mien foto' />
                                </div>
                            </div>
                        </div>

                        <div className='about'>
                            <h2 className='title'><span ref='about_title'>About</span></h2>
                            <p ref='about_content1' className='content'>Hello, my name is Amine <span className='waving-emoji' aria-label='emoji' role='img'>👋</span></p>
                            <p ref='about_content2' className='content'>I am a software engineer from Algeria</p>
                            <p ref='about_content3' className='content'>I code, mostly in JavaScript & React</p>
                            <p ref='about_content4' className='content'>and sometimes I write about it too, in <a href='https://am77-blog.netlify.app' title='AM77 Blog'>my-blog.</a></p>

                            {/* <NavLink to='/work'>Here are some of my works.</NavLink> */}
                        </div>

                        <div className='contact'>
                            <h2 className='title'><span ref='contact_title'>Reach Me</span></h2>
                            <p className='content'><span ref='contact_content'>Here are some places on the web where you can find me:</span></p>
                            <div ref='contact_links' className='links'>
                                <a href='https://am77-blog.netlify.app' title='AM77 Blog'>blog</a>
                                <a href='https://github.com/am-77' title='AM-77'>github</a>
                                <a href='https://www.linkedin.com/in/mohamed-amine-griche' title='mohamed-amine-griche'>linkedin</a>
                                <a href='https://codepen.io/am-77' title='AM-77'>codepen</a>
                                <a href='https://www.npmjs.com/~am-77' title='AM-77'>npm</a>
                                <a href='https://dev.to/am77' title='AM-77'>dev.to</a>
                                <a href='https://stackoverflow.com/users/10564525' title='AM-77'>stackoverflow</a>
                                <a href='https://twitter.com/__AM77__' title='__AM77__'>twitter</a>
                                <a href='mailto:amine.griche77@protonmail.ch' title='amine.griche77@protonmail.ch'>email</a>
                                <a href='/cv.pdf' title='resume' target='_blank'>resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
