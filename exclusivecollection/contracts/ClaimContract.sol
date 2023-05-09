// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC1155LazyMint.sol";

contract MyContract is ERC1155LazyMint {
    ERC1155LazyMint public accessKeysCollection;
    constructor(
        string memory _name,
        string memory _symbol,
        address _royaltyRecipient,
        uint128 _royaltyBps,
        address _accessKeysCollection
    ) ERC1155LazyMint(_name, _symbol, _royaltyRecipient, _royaltyBps) {
        accessKeysCollection = ERC1155LazyMint(_accessKeysCollection);
    }

    function verifyClaim(address _claimer, uint256 _tokenId, uint256 _quantity) 
        public view override {
            require(
                accessKeysCollection.balanceOf(_claimer, 0) >= _quantity,
                "Rejected: Claimer does not have access key");
    }

    function _transferTokensOnClaim(address _receiver, uint256 _tokenId, uint256 _quantity) 
        internal override {
            accessKeysCollection.burn(_receiver, 0, _quantity);
            //_mint(_receiver, _tokenId, _quantity, "");
            super._transferTokensOnClaim(_receiver, _tokenId, _quantity);
        }
        

    
}