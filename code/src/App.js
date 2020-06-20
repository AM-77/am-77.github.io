import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { gsap, TimelineLite } from 'gsap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Home from './pages/Home'
import Work from './pages/Work'
import Loader from './components/Loader'
const Preload = require('react-preload').Preload;

export default class App extends Component {

    constructor(props) {
        super(props)
        this.tl = new TimelineLite()
        this.loadingIndicator = (<Loader />)
        this.images = [
            './assets/fonts/Cool-For-The-Momenet.ttf',
            './assets/images/logo.svg',
            './assets/images/mein-foto.png'
        ]
    }

    onEnter = node => { gsap.from(node, 1, { delay: 1, opacity: 0 }) }
    onExit = node => { gsap.to(node, 1, { opacity: 0 }) }

    componentDidMount() { 
        if ( new Date().getHours() > 18 ) document.body.classList.add('dark')
        gsap.to(this.refs.app, 0, {css: { visibility: 'visible' }}) 
    }

    render() {
        return (
            <Preload
                loadingIndicator={this.loadingIndicator}
                images={this.images}>
                <div className='app-container' ref='app'>
                    <Route render={({ location })=>(
                        <TransitionGroup>
                            <CSSTransition key={location.key} timeout={1000} onEnter={this.onEnter} onExit={this.onExit} >
                                <Switch location={location}>
                                    <Route path='/' exact={true}><Home tl={this.tl} /></Route>
                                    <Route path='/work'><Work tl={this.tl} /></Route>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )} />
                </div>
            </Preload>
            
        )
    }
}
