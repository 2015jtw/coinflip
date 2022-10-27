import React from "react";
import Coin from "./coin";
import { choice } from "./helpers";

class CoinFlipper extends React.Component {
    static defaultProps = {
        coins: [
            { side: 'heads', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg' },
            { side: 'tails', url: 'https://www.pcgs.com/UserImages/71009269r.jpg' }
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            currrentCoin: null,
            numFlips: 0,
            numHeads: 0,
            numTails: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }


    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                numFlips: st.numFlips + 1,
                currrentCoin: newCoin,
                numHeads: st.numHeads + (newCoin.side === 'heads' ? 1 : 0),
                numTails: st.numTails + (newCoin.side === 'tails' ? 1 : 0)

            }
        })
    }

    handleClick(e) {
        this.flipCoin();
    }


    render() {

        const { numFlips, numHeads, numTails, currrentCoin } = this.state;

        return (
            <div>
                <h1>Let's flip a coin!</h1>
                {this.state.currrentCoin && <Coin side={currrentCoin.side} url={currrentCoin.url} />}
                <button onClick={this.handleClick}>FLIP MEEEE!</button>
                <p>Out of {numFlips} flips, there have been {numHeads} heads and {numTails} tails. </p>
            </div>
        )
    }
}


export default CoinFlipper;