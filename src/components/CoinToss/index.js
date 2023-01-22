import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    total: 0,
    heads: 0,
    tails: 0,
  }

  onClickTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
        image: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {image, total, heads, tails} = this.state

    return (
      <div className="container">
        <div className="bg-container">
          <div className="tossCoinContainer">
            <h1 className="heading">Coin Toss Game</h1>
            <p className="description">Heads (or) Tails</p>
            <img src={image} alt="toss result" className="coinImage" />
            <button
              type="button"
              className="button"
              onClick={this.onClickTossCoin}
            >
              Toss Coin
            </button>
            <div className="count-container">
              <p className="count">Total: {total}</p>
              <p className="count">Heads: {heads}</p>
              <p className="count">Tails: {tails}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
