pragma solidity ^0.4.13;
import "./EndorseToken.sol";

/// Simple contract that collects money, keeps them till the certain birthday
/// time and then allows certain recipient to take the collected money.
contract EndorseProject {

    /// Address of the recipient allowed to take the gift after certain birthday
    /// time.
    address public projectHost;
    string public projectName;
    string public projectDescription;
    uint public endorsePeriodEnd;
    uint public competitionEnd;
    uint public projectFunds;
    uint public minimumDORS;

    uint public totalEndorsement;
    address[] public participants;

    event EndorsePeriodEnd(address factory, uint value);
    event CompetitionEnd(address factory, uint value);

    /// Instantiate the contract with given recipient and birthday time.
    function EndorseProject(address _host,
                            address _endorseToken,
                            /*uint _endorsePeriodEnd,*/
                            /*uint _competitionEnd,*/
                            /*uint _minimumDORS,*/
                            string _projectName,
                            string _projectDescription) {
        projectHost = _host;
        projectName = _projectName;
        projectDescription = _projectDescription;
        /*endorsePeriodEnd = _endorsePeriodEnd;
        competitionEnd = _competitionEnd;
        minimumDORS = _minimumDORS;*/
        totalEndorsement = 0;
        endorseToken = _endorseToken;
    }

    /// Collect money if birthday time didn't come yet.
    function() {
        // Assert competition has ended
        require(now < competitionEnd);
    }

    /// Take a gift.
    function fund() payable {
        // Only proper recipient is allowed to take the gift
        require(msg.sender == projectHost);

        // Gift couldn't be taken before birthday time
        require(now < endorsePeriodEnd);
    }

    function getBalance() constant returns(uint) {
        return this.balance;
    }

    function endorse(uint endorsement) returns(bool) {
        EndorseToken token = EndorseToken(endorseToken);
        if (token.transferFrom(msg.sender, address(this), endorsement)) {
            endorsements[msg.sender] = endorsement;
            return true;
        } else {
            return false;
        }
    }

    function payout() {

    }

    function register() {

    }

    address projectFactory;
    address endorseToken;
    mapping (address => uint256) endorsements;
}
