
import React, { Component } from 'react'

class Widecard extends Component {
    render() {
        const {title, where, from, to} = this.props
        return (
            <div className="widecard">
                <div className="wide-con">
                    <h3 >{title}</h3>
                    <h4 className="text">{where}</h4>
                    <h4 className="text">{from}-{to}</h4>
                </div>
                
            </div>
        )
    }
}
export default Widecard