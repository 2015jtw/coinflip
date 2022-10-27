import React from "react";
import './coin.css'

class Coin extends React.Component {

    render() {


        return (
            <div className="coin">
                <img src={this.props.url} alt={this.props.side} />
            </div>

        )
    }
}

export default Coin;