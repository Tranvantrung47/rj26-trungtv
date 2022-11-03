//tsrce
import React, { Component } from 'react'

interface iUser {
    id: number,
    name: string,
    age: number,
    address: string
}

interface IProps {
    userProps: iUser;
}

 

class ItemUserClass extends Component<IProps> {
   


  render() {
    return (
        <div>
            <div className='container' >
                <p>{this.props.userProps.id}</p>
                <p>{this.props.userProps.name}</p>
                <p>{this.props.userProps.age}</p>
                <p>{this.props.userProps.address}</p>
            </div>
        </div>
    )
  }
}

export default ItemUserClass