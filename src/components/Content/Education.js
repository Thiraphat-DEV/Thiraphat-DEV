
import React, { Component } from 'react'
import Widecard from '../Widecard'

class Education extends Component {

    render() {
    
        return (

            <div className="condiv education">
                <h1 className="subtopic" speed={200} >Present</h1>
                <Widecard title="Thiraphat Chorakhe " where="WORK FROM HOME" from="2020" to="Present"/>
                <h1 className="subtopic" speed={200} >Future</h1>
                <Widecard title=" Engineer " where="BOATY" from="2021" to="2025"/>
                <h1 className="subtopic" speed={200} era>Future</h1>
                <Widecard title="Thiraphat" where="HOME" from="2022" to="2025"/>
            </div>
        )
    }
}
export default Education