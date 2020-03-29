import React, {Component} from 'react'
import photo from '../assets/photo.jpg'
import './container.css'
import Background from './background'

class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <Background />
                <img className='Image'
                src={photo} alt='myphoto' />
                <h3>Hello, I am <span>Javlon Umrzokov <br/>
            </span> I am a Front-End Web Developer</h3>
            </div>
        )
    }
}
export default Home