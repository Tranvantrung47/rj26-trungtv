import React, { Component } from 'react'
import './styles.css'

type Props = {
    image: string,
    text: string,
    total: string,
    bg : string
}



class ChartBar3 extends Component<Props> {


    render() {
        return (
            <div className='wrapper' style={{backgroundColor: this.props.bg}}>
                <div className="left">
                    <img src={this.props.image} alt="" />
                </div>
                <div className="content">
                    <h3>{this.props.text}</h3>
                    <p>{this.props.total}</p>
                </div>
            </div>
        )
    }
}

export default ChartBar3