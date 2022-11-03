import React, { Component } from 'react'
import './styles2.css'


  type Props = {
    img : string,
    title : string,
    description : string,
    price : string
  }
class Bt2ss02 extends Component<Props> {
  render() {
    return (
      <div className='wrapper'>
        <img src={this.props.img} alt="" />
        <h4>{this.props.title}</h4>
        <h5>{this.props.description}</h5>
        <p></p>
        <p>{this.props.price}</p>
      </div>
    )
  }
}

export default Bt2ss02



