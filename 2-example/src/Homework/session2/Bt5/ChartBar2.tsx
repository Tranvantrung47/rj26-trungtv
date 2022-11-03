import React, { Component } from 'react'
import './styles.css'

type Props = {
    image : string,
    description :string,
    percent : number,
    color1 : string
}

class ChartBar2 extends Component<Props> {
 

  render() {
    return (
      <div className='wrapper'>
            <div className="left">
                <img src={this.props.image} alt="" />
                <p>{this.props.description}</p>
            </div>
            <div className="progress">
                <div className="progress-bar  text-white" role="progressbar" aria-label="Segment two" style={{ width: this.props.percent, backgroundColor: this.props.color1 }}></div>
            </div>
      </div>
    )
  }
}

export default ChartBar2