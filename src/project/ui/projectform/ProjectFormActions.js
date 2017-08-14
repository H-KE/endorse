import EndorseProjectFactory from '../../../../build/contracts/EndorseProjectFactory.json'
import store from '../../../store'

const contract = require('truffle-contract')

export function createProject(project) {
  let web3 = store.getState().web3.web3Instance

  // Double-check web3's status.
  if (typeof web3 !== 'undefined') {
    return function(dispatch) {
      // Using truffle-contract we create the authentication object.
      const factory = contract(EndorseProjectFactory)
      factory.setProvider(web3.currentProvider)

      // Declaring this for later so we can chain functions on Authentication.
      var factoryInstance

      // Get current ethereum wallet.
      web3.eth.getCoinbase((error, coinbase) => {
        // Log errors, if any.
        if (error) {
          console.error(error);
        }

        factory.deployed().then(function(instance) {
          factoryInstance = instance

          // Attempt to sign up user.
          // factoryInstance.createProject(name, {from: coinbase})
          // .then(function(result) {
          //   // If no error, login user.
          //   return dispatch(loginUser())
          // })
          // .catch(function(error) {
          //   console.log(error);
          // })

          factoryInstance.createProject(coinbase, project.projectName, project.projectDescription, {from: coinbase, gas: 1000000})
            .then(function(result) {
              console.log(project.projectName + ' deployed at address: ' + result);
              alert(project.projectName + ' deployed at address: ' + result);
            })
        })
      })
    }
  } else {
    console.error('Web3 is not initialized.');
  }
}
