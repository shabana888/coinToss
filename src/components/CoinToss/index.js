// Write your code here
import {Component} from 'react'
import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultImg: HEADS_IMG_URL, tailsCount: 0, headsCount: 0}

  onCoinToss = () => {
    const {tailsCount, headsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount
    if (tossResult === 0) {
      tossImage = HEADS_IMG_URL
      latestHeadsCount += 1
    } else {
      tossImage = TAILS_IMG_URL
      latestTailsCount += 1
    }
    this.setState({
      tossResultImg: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImg, tailsCount, headsCount} = this.state
    const totalCount = tailsCount + headsCount

    return (
      <div className="bg-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossResultImg} alt="toss result" className="coin-face" />
          <button
            className="toss-button"
            type="button"
            onClick={this.onCoinToss}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="total">Total: {totalCount}</p>
            <p className="heads">Heads: {headsCount}</p>
            <p className="tails">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
