
import React, { Component } from 'react';

class Skills extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'skills':['HTML', 'CSS', 'JavaScript', 'SQL', 'C', 'Problem Solve'] 
        }
    }
    render() {
        const {skills} = this.state
        return (
            <div className="condiv skill">
                <h1 className="subtopic">My Skills</h1>
                <ul>
                    {skills.map((value)=>{
                            return (<li>{value}</li>)
                    })}
                </ul>
            </div>
        );
    }
}

export default Skills;