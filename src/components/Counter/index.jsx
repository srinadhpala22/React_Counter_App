import {Component} from "react";
import "./index.css";

class Counter extends Component{
     state={count:0}

     onClickCountBtn=()=>{
          this.setState((prevState)=>({
              count:prevState.count+1
          }))
     }

     render(){
        const {count}=this.state
        return (
            <div className="bg-container">
                <div className="card">
                     <h1>The button has been clicked <span className="counter">{count}</span> times</h1>
                     <p>Click the button to increase the count</p>
                     <button onClick={this.onClickCountBtn}>Click Me!</button>
                </div>
            </div>

        )
     }
}

export default Counter;
