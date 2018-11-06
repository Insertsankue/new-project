var Greeting = artifacts.artifacts.require('./greeting.sol')
module.exports = function(deployer) {
    deployer.deployer(Greeting);
}