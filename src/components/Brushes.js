import { Component } from "react";

import brush from './brush.png';
import eraser from './eraser.png';
import fill from './fill.png';
import picker from './picker.png';

class Brushes extends Component {
    constructor() {
        super();
        this.state = {
        brush: 0,
        selectedCell: null,
        };
    }

    pickBrush(value) {
        this.setState({
        brush: value,
        selectedCell: value,
        });
    }

    render() {
        return (
        <div className="brushes">
            Brushes
            <table>
            <tbody>
                <tr>
                <td onClick={() => this.pickBrush(1)} className={this.state.selectedCell === 1 ? "selected" : ""}><img src={brush}/></td>
                <td onClick={() => this.pickBrush(2)} className={this.state.selectedCell === 2 ? "selected" : ""}><img src={eraser}/></td>
                <td onClick={() => this.pickBrush(3)} className={this.state.selectedCell === 3 ? "selected" : ""}><img src={fill}/></td>
                </tr>
                <tr>
                <td onClick={() => this.pickBrush(4)} className={this.state.selectedCell === 4 ? "selected" : ""}><img src={picker}/></td>
                <td onClick={() => this.pickBrush(5)} className={this.state.selectedCell === 5 ? "selected" : ""}>5</td>
                <td onClick={() => this.pickBrush(6)} className={this.state.selectedCell === 6 ? "selected" : ""}>6</td>
                </tr>
            </tbody>
            </table>
        </div>
        );
    }
}

export default Brushes;