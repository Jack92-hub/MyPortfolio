import React, {Component} from 'react'

import resume from '../assets/MyResume.pdf'

class Resume extends Component {
    render() {
        return (
            <div style={{
                width: '100vw',
                height: '100vh',
                background: '#ccc'
                }}>
                    <embed src={resume} width="100%" height="100%" />
            </div>
        )
    }
}
export default Resume