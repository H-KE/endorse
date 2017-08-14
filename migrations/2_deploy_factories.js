const EndorseToken =
  artifacts.require(`./EndorseToken.sol`)
const EndorseProjectFactory =
  artifacts.require("./EndorseProjectFactory.sol")

module.exports = (deployer) => {
  deployer.deploy(EndorseToken, 1000000000, 'Endorse', 8, 'DORS').then(function() {
    return deployer.deploy(EndorseProjectFactory, EndorseToken.address)
  })
}
