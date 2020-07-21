import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Preloader from '../components/Preloader'
import { Power3 } from 'gsap'

import meinFoto from '../assets/images/mein-foto.jpg'

export default class Home extends Component {

    componentDidMount() { 
        this.props.tl
            .from(this.refs.home_page, 1, { opacity: 0, ease: Power3.easeOut })
            .play() 
    } 

    render() {
        return (
            <div className='home-page'>
                <Preloader tl={this.props.tl} />
                <div ref="home_page" className='home-container'>
                    <div className='center'>
                        <div className=' section'>
                            <div className="head">
                                <div className='name'>
                                    <div>
                                        <h1 className="title"><span className='first'>Mohamed Amine</span> <span className='last'>Griche</span></h1>
                                        <p>A software engineer who loves Open Source, Linux & JavaScript <span className='heart-emoji' aria-label='emoji' role='img'>💛</span>.</p>
                                    </div>
                                    <div className='mein-foto'>
                                        <img src={meinFoto} alt='mien foto' />
                                    </div>
                                </div>
                                <button onClick={() => this.props.fullpageApi.moveSectionDown()}>
                                    go down
                                </button>
                            </div>
                        </div>

                        <div className="section">
                            <div className='about'>
                                <h2 className='title'>About Me</h2>
                                <p className='content'>
                                    Hello, my name is Amine <span className='waving-emoji' aria-label='emoji' role='img'>👋</span>, 
                                    I am a software engineer from Algeria, I love to code, mostly in JavaScript, Node & React, sometimes I write about it too, 
                                    in <a target='_blank' rel="noopener noreferrer" href='https://am77-blog.netlify.app' title='AM77 Blog'>my-blog</a>, 
                                    and you can find a collection of my works in <NavLink to='/portfolio'>my-portfolio.</NavLink>
                                </p>
                            </div>
                        </div>

                        <div className="section">
                            <div className='contact'>
                                <h2 className='title'>Reach Me</h2>
                                <p className='content'>Here are some places on the web where you can find me:</p>
                                <div className='links'>
                                    <a target='_blank' rel="noopener noreferrer" href='https://am77-blog.netlify.app' title='a bit of code'>blog</a>
                                    <a target='_blank' rel="noopener noreferrer" href='https://github.com/am-77' title='AM-77'>github</a>
                                    <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/mohamed-amine-griche' title='mohamed-amine-griche'>linkedin</a>
                                    <a target='_blank' rel="noopener noreferrer" href='https://codepen.io/am-77' title='@am-77'>codepen</a>
                                    <a target='_blank' rel="noopener noreferrer" href='https://www.npmjs.com/~am-77' title='@AM-77'>npm</a>
                                    <a target='_blank' rel="noopener noreferrer" href='https://dev.to/am77' title='@am77'>dev.to</a>
                                    <a target='_blank' rel="noopener noreferrer" href='https://stackoverflow.com/users/10564525' title='@Pain'>stackoverflow</a>
                                    <a target='_blank' rel="noopener noreferrer" href='https://twitter.com/__AM77__' title='@__AM77__'>twitter</a>
                                    <a target='_blank' rel="noopener noreferrer" href='mailto:amine.griche77@protonmail.ch' title='amine.griche77@protonmail.ch'>email</a>
                                    <a target='_blank' rel="noopener noreferrer" href='/cv.pdf' title='resume'>resume</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
