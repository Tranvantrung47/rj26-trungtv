import React, { Component } from 'react'
import './styles1.css'

type Props = {
  image : string,
  title : string,
  p1 : string,
  p2 : string,
  p3 : string,
  p4 : string
}



class Bt1ss02 extends Component<Props> {
  render() {
    return (
      <div className='wrapper'>
      <div className="left">
        <img src={this.props.image}/>
      </div>
      <div className="content">
        <h2>{this.props.title}</h2>
       <div className="color">
            <p>{this.props.p1}</p>
            <p >{this.props.p2}</p>
            <p >{this.props.p3}</p>
            <p >{this.props.p4}</p>
       </div>  
      </div>
    </div>
    )
  }
}


export default Bt1ss02
