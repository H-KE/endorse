import EndorseTokenContract from '../../../../build/contracts/EndorseToken.json'
import EndorseTokenFactoryContract from '../../../../build/contracts/EndorseTokenFactory.json'


import React, { Component } from 'react'
import store from '../../../store'

const contract = require('truffle-contract')
// const EndorseTokenAddress = "0x0803746fcc5b36f380e73a9e92f3e86531f49772"

class TokenOverview extends Component {
  constructor(props) {
    super(props)

    this.state = {
      balance: '-',
      name: this.props.name,
      account: this.props.account
    }
  }

  componentDidMount() {
    let component = this

    let web3 = store.getState().web3.web3Instance

    // Using truffle-contract we create the authentication object.
    const EndorseToken = contract(EndorseTokenContract)
    EndorseToken.setProvider(web3.currentProvider)

    // Declaring this for later so we can chain functions on Authentication.
    var endorseTokenInstance

    // Get current ethereum wallet.
    web3.eth.getCoinbase((error, coinbase) => {
      // Log errors, if any.
      if (error) {
        console.error(error);
      }

      EndorseToken.deployed().then(function(instance) {
        endorseTokenInstance = instance
        endorseTokenInstance.balanceOf.call(coinbase, { from: coinbase} )
          .then(function(result) {
            console.log(coinbase + ': ' + result.valueOf())
            component.setState({ balance: result.valueOf() })
          })
        })
      })

    // var endorseTokenFactoryInstance
    //   web3.eth.getAccounts((error, accs) => {
    //     accs.forEach(function(acc) {
    //
    //     EndorseTokenFactory.deployed().then(function(instance) {
    //       endorseTokenFactoryInstance = instance
    //       endorseTokenFactoryInstance.created(acc, 0).then(function(result) {
    //         console.log(acc + ': ' + result.valueOf())
    //       })
    //     })
    //   })
    // })
  }

  render() {
    return(
      <p>Endorse balance: {this.state.balance}</p>
    )
  }
}

export default TokenOverview
