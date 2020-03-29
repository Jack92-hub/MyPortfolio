import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'

import Aux from '../hoc/Aux/Aux'
import './about.css'
import photo4 from '../assets/images.jpeg'
import photo1 from '../assets/Web.png'
import photo2 from '../assets/frame.jpeg'
import photo3 from '../assets/mobile.png'

class About extends Component {
    render() {
        return (
            <Aux>
            <div className='section1'>
                <h3> <strong>About Me</strong></h3>
                <hr />
                <p>I have a firm knowledge of HTML, CSS and JavaScript language and 
                    possess a good knowledge of computer software packages (frameworks 
                    and tools) that are used in today’s technology. On a personal level, 
                    I am highly-motivated, result oriented, self-driven, hard-working, 
                    fast learner and constantly seeking to improve my skills and am fully 
                    aware of the latest Front-end Development Tools.
                    <br />In addition to this, I have the ability to 
                    adapt to any type of team environment, I am team 
                    oriented and get along with others when working in a
                     group setting. I also have the ability to work independently 
                     while staying on schedule and meeting those tight deadlines.
                </p>
                <div className='section2'>
                    <h4>What I am doing</h4>
                    <Grid>
                        <Cell col={6} phone={12}>
                            <div className='newcard'>
                                <img src ={photo1}  width='60px' height='60px' alt = 'img'/>
                                <div>
                                    <h5>Web development</h5>
                                    <p>Able to create beautiful sites by <br />
                                    using HTML, CSS, JS</p> 
                                </div>
                            </div>
                            </Cell>
                            <Cell col={6} phone={12}>
                            <div className='newcard'>
                                <img src ={photo2}  width='60px' height='60px' alt = 'img'/>
                                <div>
                                    <h5>Frameworks and Libraries</h5>
                                    <p>Able to work on modern frameworks and  libraries 
                                        <br/>such as React.js, ReactHooks, jQuary, MobX, Redux</p>
                                </div>
                           
                            </div>
                            </Cell>
                            <Cell col={6} phone={12}>
                            <div className='newcard'>
                                <img src ={photo3}  width='60px' height='60px' alt = 'img'/>
                                <div>
                                    <h5>Responsive Design</h5>
                                    <p>Able to create mobile frindly Responsive Sites<br/>
                                    as a professional level</p>
                                </div>
                            </div>
                            </Cell>
                            <Cell col={6} phone={12}>
                            <div className='newcard'>
                                <img src ={photo4}  width='60px' height='60px' alt = 'img'/>
                                <div>
                                    <h5>Strong Support</h5>
                                    <p> Able to communicate with others easily and <br /> 
                                    share the ideas to others in a brief way</p>
                                </div>

                            </div>
                        </Cell>
                    </Grid>
                </div>
            </div>
            </Aux>
        )
    }
}
export default About