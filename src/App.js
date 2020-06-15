import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import gsap from 'gsap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Home from './pages/Home'
import Work from './pages/Work'

export default class App extends Component {

    onEnter = node => { gsap.from(node, 1.2, { delay: 1, opacity: 0 }) }
    onExit = node => { gsap.to(node, 1.2, { opacity: 0 }) }

    componentDidMount() { gsap.to(this.refs.app, 0, {css: { visibility: 'visible' }}) }

    render() {
        return (
            <div className='app-container' ref='app'>
                <div className='content-container'>
                    <Route render={({location})=>(
                        <TransitionGroup>
                            <CSSTransition key={location.key} timeout={1200} onEnter={this.onEnter} onExit={this.onExit} >
                                <Switch location={location}>
                                    <Route path='/' exact={true}><Home /></Route>
                                    <Route path='/work'><Work /></Route>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )} />
                </div>
            </div>
        )
    }
}
