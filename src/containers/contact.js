import React, {Component} from 'react'
import { Grid, Cell, List, ListItem,ListItemContent } from 'react-mdl'
import  './container.css'
import pic from '../assets/pic.jpg'

class Contact extends Component {
    render() {
        return (
            <div className='contactBody'>
                <Grid className='contactGrid'>
                    <Cell col={6} phone={12}>
                        <h2 style={{fontFamily: "'Anton', sans-serif"}}>Javlon Umrzokov</h2>
                        <img src={pic} alt='pic' style={{
                            height:'250px', 
                            width: '200px',
                            borderRadius: '8px'
                            }}/>
                        <p style={{
                            width: '75%',
                            margin: 'auto',
                            paddingTop: '1em',
                            fontFamily: "'Oxygen', sans-serif",
                            fontWeight:'bold'
                            }}>I am a front end web developer. I create, design mobile friendly
                            beautiful sites I can be great asset to any companies with my skills 
                            and gained enough experience </p>
                    </Cell>
                    <Cell col={6} phone={12}>
                        <h2 style={{fontFamily: "'Anton', sans-serif"}}>Contact Me</h2>
                        <hr style={{borderTop: 'solid ', width: '50%', margin: 'auto'}}/>
                        <div >
                        <List>
                            <ListItem>
                                <ListItemContent className='List'> 
                                    <i className='fa fa-phone-square' />(+82) 010-5069-1992
                                    </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent className='List'> 
                                    <i className='fa fa-envelope'/>jumrzokov@gmail.com
                                    </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent className='List'> 
                                    <i className='fa fa-instagram' />javlon_jack
                                    </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent className='List'> 
                                    <i className='fa fa-github'/>github.com/Jack92-hub
                                    </ListItemContent>
                            </ListItem>
                 
                        </List>
                        </div>
                       
                    </Cell>
                </Grid>
                <footer style={{
                    width:"100%",
                    height: '50px',
                    textAlign: 'center',
                    color:'white',
                    background: ' rgb(34, 32, 32);'
                     }}>Copyright &copy; 2020 My Portfolio By Javlon Umrzokov </footer>
            </div>
        )
    }
}
export default Contact