import React, {Component} from "react";
import "./card.scss"

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="card">
            <img src={this.props.image} alt="Character"/>
            <h2>{this.props.name}</h2>
            <button onClick={()=>this.props.setSelectedChar(this.props.id)}>Like</button>
           {}
        </div> );
    }
}
 
export default Card;