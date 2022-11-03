import React, { Component } from 'react'
import './styles3.css'

type Props = {
  image : string,
  title : string,
  description : string,
  pulishat : string
}



class Bt3ss02 extends Component<Props> {
  render() {
    return (
      <div className='wrapper'>
        <img src={this.props.image} />
        <p>{this.props.description}</p>
        <h3>{this.props.title}</h3>
        <p>{this.props.pulishat}</p>
      </div>
    )
  }
}

export default Bt3ss02