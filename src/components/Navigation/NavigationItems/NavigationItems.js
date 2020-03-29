import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact><strong>Home</strong></NavigationItem>
        <NavigationItem link="/about" ><strong>About Me</strong></NavigationItem>
        <NavigationItem link="/projects" ><strong>Projects</strong></NavigationItem>
        <NavigationItem link="/resume" ><strong>Resume</strong></NavigationItem>
        <NavigationItem link="/contact" ><strong>Contact</strong></NavigationItem>
       
    </ul>
    
);

export default navigationItems;