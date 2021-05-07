
import React, { Component } from 'react'
import Social from '../Social'
import ReactTyping from 'react-typing-effect'
class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src="https://images.unsplash.com/photo-1573767291321-c0af2eaf5266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=762&q=80" alt="profile" className="profile"/>
                {/* typing Effect */}
                <ReactTyping text={['THIRAPHAT C.', 'CODE FOR LIFE']} className="typing" speed={100} eraseDelay={200}></ReactTyping>
                <Social />
            </div >
        )
    }
}
export default Home;