import React, { Component } from 'react'
import gsap, { Power3 } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { NavLink } from 'react-router-dom'
import Preloader from '../components/Preloader'

import Fullpage, { FullPageSections, FullpageSection, FullpageCount, FullpageNavigation } from '@ap.cx/react-fullpage';

import Cursor from '../components/Cursor'

gsap.registerPlugin(ScrollTrigger)


export default class Work extends Component {

    constructor(props) {
        super(props)
        this.state = {
            works: React.createRef([])
        }
    }

    componentDidMount() { 
        this.props.tl
            .from(this.refs.work_container, 1.2, { opacity: 0, ease: Power3.easeOut })
            .play() 
        
        const { works } = this.state
        works.current.map((work, index) => {
            gsap.fromTo(work, { autoAlpha: 0 }, {
                duration: 0.5,
                autoAlpha: 1,
                ease: Power3.easeIn,
                scrollTrigger: {
                    id: `work-${index}`,
                    trigger: work,
                    start: 'top center+=100',
                    toggleActions: 'play none none none'
                }
            })
        })
    } 

    addToList = (work) => {
        const { works } = this.state
        if ( works.current ) { works.current.push(work) } 
        else { works.current = [work] }
        this.setState({ works })
    }

    render() {
        return (
            <div className="work-page">
                <Fullpage>
                <FullPageSections>
                    {/* <Cursor /> */}
                    <Preloader tl={this.props.tl} />
                        <div ref='work_container' className='work-container'>

                        <FullpageSection>
                            <div className='header'>
                                <h1 className='title-line'>Portfolio</h1>
                                <NavLink to='/'>Home</NavLink>
                            </div>

                            </FullpageSection>
                            <div className="main">
                                
                                <FullpageSection>
                                    <div ref={this.addToList}>
                                    <div className="infos">
                                        <h3 className="title">Nyno-UI</h3>
                                        <p className="description">A complete CSS framework based on flexbox. on Flexbox.</p>
                                        <div className="links">
                                            <a href="https://github.com/AM77-Dev/Nyno-UI" target="_blank" rel="noopener noreferrer">Source Code</a>
                                            <a href="https://docs.medamine.now.sh/" target="_blank" rel="noopener noreferrer">Documentation</a>
                                        </div>
                                        <div className="tags">
                                            <span className="tag css">CSS</span>
                                            <span className="tag scss">SCSS</span>
                                            <span className="tag css">Flexbox</span>
                                        </div>
                                    </div>
                                    <div className="screenshot">
                                        
                                    </div>
                                </div>
                                </FullpageSection>
                                <FullpageSection>
                                    <div ref={this.addToList}>
                                    <div className="infos">
                                        <h3 className="title">react-datepickerrz</h3>
                                        <p className="description">With double r & z, a customizable, zero-dependency datepicker component for React</p>
                                        <div className="links">
                                            <a href="https://github.com/AM-77/react-datepickerrz" target="_blank" rel="noopener noreferrer">Source Code</a>
                                            <a href="https://github.com/AM-77/react-datepickerrz#readme" target="_blank" rel="noopener noreferrer">Documentation</a>
                                            <a href="https://am-77.github.io/react-datepickerrz/" target="_blank" rel="noopener noreferrer">Demo</a>
                                        </div>
                                        <div className="tags">
                                            <span className="tag react">React</span>
                                            <span className="tag js">JavaScript</span>
                                        </div>
                                    </div>
                                    <div className="screenshot">
                                        
                                    </div>
                                </div>
</FullpageSection>
                                <FullpageSection>
                                    <div ref={this.addToList}>
                                    <div className="infos">
                                        <h3 className="title">react-coder</h3>
                                        <p className="description">A lightweight, reusable code wrapper & editor component for react.</p>
                                        <div className="links">
                                            <a href="https://github.com/AM-77/react-coder" target="_blank" rel="noopener noreferrer">Source Code</a>
                                            <a href="https://am-77.github.io/react-coder/" target="_blank" rel="noopener noreferrer">Documentation</a>
                                        </div>
                                        <div className="tags">
                                            <span className="tag react">React</span>
                                            <span className="tag ts">TypeScript</span>
                                        </div>
                                    </div>
                                    <div className="screenshot">
                                        
                                    </div>
                                </div>
</FullpageSection>
                                <FullpageSection>
                                    <div ref={this.addToList}>
                                    <div className="infos">
                                        <h3 className="title">react-floating-buttons</h3>
                                        <p className="description">A lightweight (zero-dependency), customizable and animated react floating buttons</p>
                                        <div className="links">
                                            <a href="https://github.com/AM-77/react-floating-buttons" target="_blank" rel="noopener noreferrer">Source Code</a>
                                            <a href="https://github.com/AM-77/react-floating-buttons#readme" target="_blank" rel="noopener noreferrer">Documentation</a>
                                            <a href="https://am-77.github.io/react-floating-buttons-demo/" target="_blank" rel="noopener noreferrer">Demo</a>
                                        </div>
                                        <div className="tags">
                                            <span className="tag react">React</span>
                                            <span className="tag js">JavaScript</span>
                                        </div>
                                    </div>
                                    <div className="screenshot">
                                        
                                    </div>
                                </div>
</FullpageSection>
                                <FullpageSection>
                                    <div ref={this.addToList}>
                                    <div className="infos">
                                        <h3 className="title">deno-dotenv</h3>
                                        <p className="description">A zero-dependency deno module that loads environment variables from a file.</p>
                                        <div className="links">
                                            <a href="https://github.com/AM-77/deno-dotenv" target="_blank" rel="noopener noreferrer">Source Code</a>
                                            <a href="https://am77-blog.netlify.app/build-your-own-deno-dotenv/" target="_blank" rel="noopener noreferrer">Article</a>
                                        </div>
                                        <div className="tags">
                                            <span className="tag deno">Deno</span>
                                            <span className="tag ts">TypeScript</span>
                                        </div>
                                    </div>
                                    <div className="screenshot">
                                        
                                    </div>
                                </div>
</FullpageSection>
                                <FullpageSection>
                                    <div ref={this.addToList}>
                                    <div className="infos">
                                        <h3 className="title">p-gen</h3>
                                        <p className="description">A lightweight, customizable javascript password generator.</p>
                                        <div className="links">
                                            <a href="https://github.com/AM-77/p-gen" target="_blank" rel="noopener noreferrer">Source Code</a>
                                            <a href="https://p-gen.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a>
                                        </div>
                                        <div className="tags">
                                            <span className="tag js">JavaScript</span>
                                        </div>
                                    </div>
                                    <div className="screenshot">
                                        
                                    </div>
                                </div>
</FullpageSection>
                                <FullpageSection>
                                    <div ref={this.addToList}>
                                    <div className="infos">
                                        <h3 className="title">cli-coloring</h3>
                                        <p className="description">A text coloring and formatting for the nodejs console logs.</p>
                                        <div className="links">
                                            <a href="https://github.com/AM-77/cli-coloring" target="_blank" rel="noopener noreferrer">Source Code</a>
                                        </div>
                                        <div className="tags">
                                            <span className="tag js">JavaScript</span>
                                        </div>
                                    </div>
                                    <div className="screenshot">
                                        
                                    </div>
                                </div>
</FullpageSection>
                                <FullpageSection>
                                    <div ref={this.addToList}>
                                    <div className="infos">
                                        <h3 className="title">dz-communes</h3>
                                        <p className="description">A nodejs module for the list of all of the 48 wilayas of Algeria and their communes.</p>
                                        <div className="links">
                                            <a href="https://github.com/AM-77/dz-communes" target="_blank" rel="noopener noreferrer">Source Code</a>
                                            <a href="https://dz-communes.herokuapp.com/" target="_blank" rel="noopener noreferrer">Demo</a>
                                        </div>
                                        <div className="tags">
                                            <span className="tag js">JavaScript</span>
                                        </div>
                                    </div>
                                    <div className="screenshot">
                                        
                                    </div>
                                </div>
</FullpageSection>
                                <FullpageSection>
                                    <div ref={this.addToList}>
                                    <div className="infos">
                                        <h3 className="title">form-validator.js</h3>
                                        <p className="description">A lightweight JavaScript form validation library.</p>
                                        <div className="links">
                                            <a href="https://github.com/AM-77/form-validator.js" target="_blank" rel="noopener noreferrer">Source Code</a>
                                        </div>
                                        <div className="tags">
                                            <span className="tag js">JavaScript</span>
                                        </div>
                                    </div>
                                </div>
</FullpageSection>
                                <FullpageSection>
                                    <div ref={this.addToList}>
                                    <div className="infos">
                                        <h3 className="title">slicarousel</h3>
                                        <p className="description">A fully responsive jQuery carousel plugin.</p>
                                        <div className="links">
                                            <a href="https://github.com/AM-77/slicarousel" target="_blank" rel="noopener noreferrer">Source Code</a>
                                        </div>
                                        <div className="tags">
                                            <span className="tag js">JavaScript</span>
                                            <span className="tag js">jQuery</span>
                                        </div>
                                    </div>
                                </div>
</FullpageSection>
                                <FullpageSection>
                                    <div ref={this.addToList}>
                                    <div className="infos">
                                        <h3 className="title">dark-github-theme</h3>
                                        <p className="description">A dark theme for the github website.</p>
                                        <div className="links">
                                            <a href="https://github.com/AM-77/dark-github-theme" target="_blank" rel="noopener noreferrer">Source Code</a>
                                        </div>
                                        <div className="tags">
                                            <span className="tag css">CSS</span>
                                        </div>
                                    </div>
                                </div>
                                </FullpageSection>

                                
                            </div>
                            
                            <FullpageSection>
                            <div className="footer">

                            </div>
                            </FullpageSection>
                        </div>
                    </FullPageSections>
                </Fullpage>
            </div>
        )
    }
}
