import React, { Component } from 'react'
import './styles.css'

type Props = {
    title1: string,
    title2: string,
    percent: number,
    color: string,
    color1: string

}

type State = {}

class ChartBar1 extends Component<Props, State> {
    state = {}

    render() {
        return (

            <div className="progress">
                <div className="progress-bar  text-white" role="progressbar" aria-label="Segment one" style={{ width: 200, backgroundColor: this.props.color }}> {this.props.title1}</div>
                <div className="progress-bar  text-white" role="progressbar" aria-label="Segment two" style={{ width: this.props.percent, backgroundColor: this.props.color1 }}> {this.props.title2}</div>
            </div>


            //   <div >
            //     <p  style={{color: this.props.color,backgroundColor:this.props.color,display:'inline-block'}} className={`w-${this.props.percent}`}> {this.props.title}</p>
            //     <p  style={{color: this.props.color,backgroundColor:this.props.color1,display:'inline-block'}} className={`w-${this.props.percent}`}> {this.props.title}</p>
            //     <p style={{color: this.props.color,backgroundColor:this.props.color,display:'inline-block'}} className={`w-${this.props.percent}`}> {this.props.percent}</p>

            //   </div>




        )
    }
}

export default ChartBar1