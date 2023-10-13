import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    head: 0,
    tail: 0,
  }

  getImageAndCount = () => {
    const {imageUrl, head, tail} = this.state

    const randomNumber = Math.floor(Math.random() * 2)

    if (randomNumber === 1) {
      this.setState(prevState => ({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',

        tail: prevState.tail + 1,
      }))
    } else {
      this.setState(prevState => ({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        head: prevState.head + 1,
      }))
    }
  }

  render() {
    const {imageUrl, head, tail, randomNumber1} = this.state
    console.log(imageUrl)
    return (
      <div className="bg-Container">
        <div className="Container">
          <h1>Coin Toss Game </h1>
          <p>Heads (or) Tails</p>

          <img src={imageUrl} className="image" alt="toss result" />
          <button
            type="button"
            className="button1"
            onClick={this.getImageAndCount}
          >
            Toss Coin
          </button>

          <div className="con">
            <p className="para">Total:{head + tail}</p>
            <p className="para">Heads:{head}</p>
            <p className="para">Tails:{tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
