import { Component } from "react";
import Canvas from "./Canvas";

class Colors extends Component{
    constructor() {
        super();
        this.state = {
            selectedColor: "#000000",
        };
    }

    colorChange = (event) => {
        this.setState({
            selectedColor: event.target.value,
        });
    };

    render(){
        return <div class="colors">
            <br/>
            Color: <input type="color" value={this.state.selectedColor} onChange={this.colorChange}></input>
            <Canvas width={800} height={600} color={this.state.selectedColor} />
        </div>
    }
}

export default Colors;