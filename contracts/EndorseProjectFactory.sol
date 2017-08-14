pragma solidity ^0.4.13;

import "./EndorseToken.sol";
import "./EndorseProject.sol";

contract EndorseProjectFactory {

    address[] public projects;
    address public endorseTokenAddress;

    event EndorsePeriodEnd(address factory, uint value);
    event CompetitionEnd(address factory, uint value);

    function EndorseProjectFactory(address _endorseTokenAddress) {
      owner = msg.sender;
      endorseTokenAddress = _endorseTokenAddress;
    }

    function createProject (address _host,
                            /*uint _endorsePeriodEnd,*/
                            /*uint _competitionEnd,*/
                            /*uint _minimumDORS,*/
                            string _projectName,
                            string _projectDescription) onlyBy(owner) returns (address) {
      EndorseProject project = (new EndorseProject(_host, endorseTokenAddress, _projectName, _projectDescription));
      projects.push(address(project));
      return address(project);
    }

    modifier onlyBy(address _account) {
      require(msg.sender == _account);
      _;
    }

    function changeOwner(address _newOwner) onlyBy(owner) {
      owner = _newOwner;
    }

    address owner;
}
