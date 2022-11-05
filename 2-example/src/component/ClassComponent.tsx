// tsrcfull
import * as React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';

export interface IAppProps {
    title?: string;
}

export interface IAppState {
    // number: number;
    color : string,
}

export default class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
        this.state = {
            color: "red",
        }
    }
    // handleOnClick = () => {
    //     this.setState((prevState: IAppState) => ({
    //         number: prevState.number + 1,
    //     }));

    handleOnClickblue = () => {
        this.setState({
            color: "blue",
        });
    };

    handleOnClickred = () => {
        this.setState({
            color: "red",
        });
    };



    public render() {
        return (
            <div className='w-50 text-center'>
                <h3 style={{color:'yellow'}}><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiOutlineStar /> </h3>
                <h3 style={{color:'red'}}> Lets <AiOutlineStar /></h3>
                <h3> like<AiOutlineLike /></h3>
                <h3> Dislike <AiOutlineDislike /></h3>
                {/* <h1 style={{color : this.state.color}}>{this.state.color}</h1>
                <div>ClassComponent</div> */}
                {/* {this.state.number === 0 && "Default value"}
        <button disabled = {this.state.number >= 10} style={{backgroundColor: 'Red'}} onClick={this.handleOnClick}>Plus</button> <br /> <br /> */}

                {/* <button disabled={this.state.color === 'Blue'} onClick={this.handleOnClickblue}>RED</button>
                <button disabled={this.state.color === 'red'} onClick={this.handleOnClickred}>BLUE</button> */}
            </div>
        );
    }
}
