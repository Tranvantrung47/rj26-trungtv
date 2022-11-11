// import React, { Component } from "react";
// import { AiFillHeart,AiOutlineHeart } from "react-icons/ai";
// import "./style.css";
// type Props = {
//   id: String,
//   img: String,
//   title: String,
//   description: String,
//   time: String,
// };

// interface IState {
//   heart: boolean;
// }

// class IndexMusic extends Component<Props,IState> {

//   constructor(props: IProps) {
//     super(props);

//     this.state = {
//       heart: false,
//     };
//   }
//   setLike = () => {
//     this.setState({
//       heart: !this.state.heart,
//     });
//   };


//   render() {
//     return (
//       <div className="wrapper">
//         <span>{this.props.id}</span>
//         <img src={this.props.img} alt="" />
//         <h5>{this.props.title}</h5>
//         <p>{this.props.description}</p>
//         <p>{this.props.time}</p>
//         <h3>
//         <div onClick={this.setLike}>
//              {this.state.heart === <AiFillHeart /> }
//              {this.state.heart && <AiFillHeart />}
//              {!this.state.heart && <AiOutlineHeart />}
//            </div>
//         </h3>

//         {/* <h3>
//           <AiFillLike />
//         </h3>

//         <h3>
//           <AiOutlineLike />
//         </h3> */}
//       </div>
//     );
//   }
// }

// export default IndexMusic;
