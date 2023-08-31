import { Component } from "react";

class Shapes extends Component{
    render(){
        return <div class="shapes">
        <div class="dropdown">
            <button class="dButton">Shapes</button>
            <div class="dropdownShapes">
                <a href="#">Star</a>
                <a href="#">Circle</a>
                <a href="#">Line</a>
                <a href="#">Triangle</a>
                <a href="#">Rectangle</a>
                <a href="#">Pentagon</a>
                <a href="#">Hexagon</a>
            </div>
        </div>
    </div>
    }
}

export default Shapes;