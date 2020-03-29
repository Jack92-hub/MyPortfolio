import React from 'react'
import video from '../assets/video.mp4'

const Background = () => (
    <video id="background-video" loop autoPlay muted
    style={{
        position: 'absolute',
        width: '100%',
        left: '50%',
        top: '50%',
        height: '800px',
        objectFit: 'cover',
        transform: 'translate(-50%, -50%)',
        zIndex: '-1'
    }}>
    <source src={video} type="video/mp4" />
    <source src={video} type="video/ogg" />
    Your browser does not support the video tag.
    </video>
)
export default Background