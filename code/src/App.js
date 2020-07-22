import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { gsap, TimelineLite } from 'gsap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import ReactFullpage from '@fullpage/react-fullpage'

const Preload = require('react-preload').Preload
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
        this.state = {
            links: []
        }
    }

    onEnter = node => { 
        gsap.from(node, 1, { delay: 1, opacity: 0 }) 
        const links = document.querySelectorAll("a")
        this.setState({ links })
    }

    onExit = node => { gsap.to(node, 1, { opacity: 0 }) }

    componentDidMount() { 
        document.body.classList.add('dark')
        gsap.to(this.refs.app, 0, {css: { visibility: 'visible' }}) 

        setTimeout(() => { 
            const links = document.querySelectorAll("a")
            this.setState({ links })
        }, 2000)
    }

    render() {
        return (
           <div ref='app'>   
                <Cursor links={this.state.links} />
                <Preload
                    loadingIndicator={this.loadingIndicator}
                    images={this.images}>
                    <div className='app-container'>
                        <Route render={({ location })=>(
                            <TransitionGroup>
                                <CSSTransition 
                                    key={location.key} 
                                    timeout={1000} 
                                    onEnter={this.onEnter} 
                                    onExit={this.onExit} 
                                    >
                                    <Switch location={location}>
                                        <ReactFullpage
                                            licenseKey = {'LICENSE_KEY'}
                                            scrollingSpeed = {1000}
                                            render={({ state, fullpageApi }) => {
                                                return (
                                                    <ReactFullpage.Wrapper>
                                                        <Route path='/' exact={true}><Home fullpageApi={fullpageApi} tl={this.tl} /></Route>
                                                        <Route path='/portfolio'><Portfolio fullpageApi={fullpageApi} tl={this.tl} /></Route>
                                                    </ReactFullpage.Wrapper>
                                                )
                                            }}
                                        />              
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        )} />
                    </div>
                </Preload>
            </div>
        )
    }
}
