import { Component } from "react";
import Canvas from "./Canvas";

class Size extends Component{
    constructor(){
        super();
        this.state = {
            size: 1,
        };
    }

    sizeChange = (event) => {
        const newSize = parseInt(event.target.value, 10);
        this.setState({
            size: newSize,
        })
    }

    render(){
        return <div class="size">
        <br/>Size: {this.state.size} <br/><input type="range" id="size" min="1" max="100" value={this.state.size} onChange={this.sizeChange}/>
        <Canvas width={800} height={600} size={this.state.size}/>
    </div>
    }
};

export default Size;