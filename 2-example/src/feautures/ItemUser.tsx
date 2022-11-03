// class : rcc 
// fun : rfce
import React from 'react'

interface iUser {
    id: number,
    name: string,
    age: number,
    address: string
}

interface IProps {
    userProps: iUser;
}
function ItemUser(props: IProps) {
    const { userProps } = props;
    return (
        // <div>
        //     <div className='container' >
        //         <p>{userProps.id}</p>
        //         <p>{userProps.name}</p>
        //         <p>{userProps.age}</p>
        //         <p>{userProps.address}</p>
        //     </div>
        // </div>
        <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{userProps.name}</h5>
          <p className="card-text">{userProps.age}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    )
}

export default ItemUser
